import nodemailer from 'nodemailer';
import validator from 'validator';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
	host: config.MAILHOST,
	port: config.MAILPORT,
	auth: {
		user: config.MAILUSER,
		pass: config.MAILPASSWORD,
	},
});

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		await isValid(body)
			.then(async (data) => {
				const mail = await transporter.sendMail({
					form: `"${data.name}" <${data.email}>`,
					to: config.CONTACTMAIL,
					subject: `Site Web | ${data.subject}`,
					text: data.message,
					html: `<body style="font-family: Arial;"><div style="background-color: #EEDECC; padding: 20px; border-radius: 16px;"><h1 style="font-weight: bold;">Formulaire Website</h1><p><span style="font-weight: bold;">Objet : </span>${data.subject}</p><p><span style="font-weight: bold;">Nom : </span>${data.name}</p><p><span style="font-weight: bold;">Tel : </span>${data.phone}</p><p><span style="font-weight: bold;">Email : </span>${data.email}</p><p><span style="font-weight: bold;">Message :</span></p><pre style="font-family: Arial; white-space: pre-wrap;">${data.message}</pre><br><a href="mailto:${data.email}?subject=Domaine de Pipangaille - Reponse&body=Votre message : <br><pre style='font-family: Arial; white-space: pre-wrap;'>${data.message}</pre><br><br>Notre reponse : <br>" style="padding: 8px 12px; background-color: #1A1D1A; border-radius: 8px; color: white; text-decoration: none;">Repondre directement</a></div></body>`,
				});
				// console.log('Message sent: %s', mail.messageId);
				// console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
				return Promise.resolve();
			})
			.catch((errors) => {
				return Promise.reject(errors);
			});

		return 'Envoyé !';
	} catch (error) {
		sendError(event, createError({ statusCode: 400, statusMessage: error }));
	}
});

async function isValid(body) {
	const errors = [];

	if (validator.isEmpty(body.email || ''))
		errors.push({
			field: 'email',
			error: 'Field is required.',
		});
	if (validator.isEmpty(body.name || ''))
		errors.push({ field: 'name', error: 'Field is required.' });
	if (validator.isEmpty(body.subject || ''))
		errors.push({ field: 'subject', error: 'Field is required.' });
	if (validator.isEmpty(body.message || ''))
		errors.push({ field: 'message', error: 'Field is required.' });
	if (!validator.isEmail(body.email || ''))
		errors.push({ field: 'email', error: 'Field should be a valid email.' });

	if (errors.length > 0) {
		return Promise.reject(errors);
	} else {
		return Promise.resolve({
			email: validator.normalizeEmail(body.email),
			subject: validator.escape(body.subject),
			name: validator.escape(body.name),
			message: validator.escape(body.message),
			phone: validator.escape(body.phone),
		});
	}
}