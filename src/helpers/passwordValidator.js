export function passwordValidator(password,confirmpassword) {
  if (!password) return "Entrez Votre mot de passe."
  if (password.length < 5) return 'Le Mot De Passe doit contenir au minimum 5 lettres.'
  if(password!=confirmpassword) return 'Veuillez confirmer votre mot de passe'
  return ''
}
