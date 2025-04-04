import { createError, defineEventHandler, readBody, sendError, useRuntimeConfig } from '#imports'
import nodemailer from 'nodemailer'
import validator from 'validator'

const config = useRuntimeConfig()

const transporter = nodemailer.createTransport({
  host: config.MAIL_HOST,
  port: config.MAIL_PORT,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASSWORD,
  },
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    await isValid(body)
      .then(async (data) => {
        await transporter.sendMail({
          from: `Site internet - Domaine de Pipangaille<contact@domaine-de-pipangaille.fr>`,
          replyTo: data.email,
          to: config.CONTACT_MAIL,
          subject: `Site internet | ${data.object}`,
          text: data.message,
          html: `
            <body style="font-family: Arial;">
              <div style="background-color: #EEDECC; padding: 20px; border-radius: 16px;">
                <h1 style="font-weight: bold; font-size: 24px;">Formulaire Domaine de Pipangaille</h1>
                <p style="padding: 4px 0px;">
                  <span style="font-weight: bold;">Objet : </span>
                  ${data.object}
                </p>
                <p style="padding: 4px 0px;">
                  <span style="font-weight: bold;">Nom : </span>
                  ${data.name}</p>
                <p style="padding: 4px 0px;">
                  <span style="font-weight: bold;">Tel : </span>
                  <a style="color: #0e5899; text-decoration: none;" href="tel:${data.phone}">
                    ${data.phone}
                  </a>
                </p>
                <p style="padding: 4px 0px;">
                  <span style="font-weight: bold;">Email : </span>
                  <a style="color: #0e5899; text-decoration: none;" href="mailto:${data.email}">
                    ${data.email}
                  </a>
                </p>
                <p style="padding-top: 4px;">
                  <span style="font-weight: bold;">Message :</span>
                </p>
                <pre style="font-family: Arial; white-space: pre-wrap; padding-bottom: 4px;">${data.message}</pre>
              </div>
            </body>
          `,
        })
        return Promise.resolve()
      })
      .catch((errors) => {
        console.log(errors)
        return Promise.reject(errors)
      })
    return 'send'
  }
  catch (error) {
    sendError(event, createError({ statusCode: 400, statusMessage: error.message }))
  }
})

async function isValid(body) {
  const errors = []

  if (validator.isEmpty(body.name || ''))
    errors.push('Le champ Nom est requis.')
  if (validator.isEmpty(body.email || ''))
    errors.push('Le champ Email est requis.')
  if (!validator.isEmail(body.email || ''))
    errors.push('L\'email est incorrect.')
  if (validator.isEmpty(body.object || ''))
    errors.push('Le champ Objet est requis.')
  if (validator.isEmpty(body.message || ''))
    errors.push('Le champ Message est requis.')

  if (errors.length > 0) {
    return Promise.reject(errors)
  }
  else {
    return Promise.resolve({
      email: validator.normalizeEmail(body.email),
      object: validator.escape(body.object),
      name: validator.escape(body.name),
      message: validator.escape(body.message),
      phone: validator.escape(body.phone),
    })
  }
}
