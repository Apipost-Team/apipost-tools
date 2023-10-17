import { DOMParser } from 'xmldom';
import { isObject } from 'lodash';

var isXml = function (val: any) {
  try {
    const element = new DOMParser().parseFromString(val, 'text/xml')?.documentElement;
    return isObject(element);
  } catch (ex) {
    return false;
  }
};

export default isXml;
