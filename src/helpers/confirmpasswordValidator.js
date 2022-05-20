export function confirmpasswordValidator(confirmpassword,password) {
    if (!confirmpassword) return "Entrez Votre mot de passe."
    if (confirmpassword.length < 5) return 'Le Mot De Passe doit contenir au minimum 5 lettres.'
    if(password!=confirmpassword) return 'Veuillez confirmer votre mot de passe'

    return ''
  }
  