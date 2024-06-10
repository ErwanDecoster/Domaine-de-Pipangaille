export default function (isoDate: string) {
  const dateNow = new Date()
  const date = new Date(isoDate)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  if (dateNow.getMonth() === date.getMonth() && dateNow.getFullYear() === date.getFullYear()) {
    if (dateNow.getDate() === date.getDate()) {
      return (timeToString(date))
    }
    else if (dateNow.getDate() - 1 === date.getDate()) {
      return (`Hier à ${timeToString(date)}`)
    }
  }
  return (date.toLocaleDateString('fr-FR', options))
}
