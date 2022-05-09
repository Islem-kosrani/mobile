export const parseRequiredErrorType = (text) => {
    if (text?.trim() === '') {
        return 'Le champ est obligatoire';
    }
    return '';
};