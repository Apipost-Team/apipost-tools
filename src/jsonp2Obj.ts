import isJsonp from './isJsonp';
import isJson from './isJson';

export const jsonp2Obj = (jsonp: any) => {
  if (!isJsonp(jsonp)) {
    return jsonp;
  }
  const pattern = /([\s\S]*?)\(([\s\S]*?)\)([\s\S]*?)/;
  const Res = jsonp.match(pattern);
  if (isJson(Res && Res[2])) {
    return [`${Res[1]}(`, Res[2], `)${Res[3]}`];
  } else {
    return jsonp;
  }
};

export default jsonp2Obj;