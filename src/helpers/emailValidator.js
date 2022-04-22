export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Entrez Votre Email."
  if (!re.test(email)) return ' Tapez une adresse email valide!'
  return ''
}
