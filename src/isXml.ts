export const isXml = (val: any) => new DOMParser().parseFromString(val, 'text/xml').documentElement.nodeName !== 'html' && (val.substring(0, 1) === '<') && (val.charAt(val.length - 1) === '>');

export default isXml;