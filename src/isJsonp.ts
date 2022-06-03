import isJson from './isJson';
export const isJsonp = (jsonp: string): boolean => {
  try {
    const index = jsonp.indexOf('(');
    const last_index = jsonp.lastIndexOf(')');
    const str = jsonp.slice(index + 1, last_index);
    return isJson(str);
  } catch (error) {
    return false;
  }
}


export default isJsonp;
