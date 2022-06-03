export const isHtml = (html: string): boolean => {
  try {
    if (typeof html !== 'string') {
//       html = '';
      return false;
    }
    const trimmed = html.replace(/^[ \t\n\r]+/, '');
    return Boolean(trimmed) && (trimmed.substring(0, 1) === '<') && (trimmed.charAt(trimmed.length - 1) === '>');
  } catch (error) {
    return false;
  }
}


export default isHtml;
