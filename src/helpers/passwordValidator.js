export function passwordValidator(password) {
  if (!password) return "Entrez Votre mot de passe."
  if (password.length < 5) return 'Le Mot De Passe doit contenir au minimum 5 lettres.'
  return ''
}
