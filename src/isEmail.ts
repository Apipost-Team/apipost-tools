export const isEmail = (str: string): boolean => {
  try {
    const emaileRegExp = new RegExp('^([a-zA-Z0-9_\\-\.])+@([a-zA-Z0-9_\\-\.])+\.([a-zA-Z]{2,4})$');
    return emaileRegExp.test(str);
  } catch (error) {
    return false;
  }
}


export default isEmail;
