import JSONbig from 'json-bigint';
import isJSON from './isJson';
import isXml from './isXml';
import formatXml from './formatXml';
import isHtml from './isHtml';
import formatHtml from './formatHtml';
import isJsonp from './isJsonp';
import jsonp2Obj from './jsonp2Obj';


export const beautifyRaw = (data: any) => {
  let beautifyRaw = '';
  let mode = 'text';
  if (Object.prototype.toString.call(data) === '[object Object]') {
    // 传入数据为对象
    try {
      beautifyRaw = JSONbig.stringify(data, null, '\t');
    } catch (error) {
      beautifyRaw = JSON.stringify(data, null, '\t');
    }
    mode = 'json';
  } else if (Object.prototype.toString.call(data) === '[object String]') {
    // 传入数据为字符串
    if (isJSON(data)) {
      try {
        beautifyRaw = JSONbig.stringify(JSONbig.parse(data), null, '\t');
      } catch (error) {
        beautifyRaw = JSON.stringify(JSON.parse(data), null, '\t');
      }
      mode = 'json';
    } else if (isXml(data)) {
      beautifyRaw = formatXml(data);
      mode = 'xml';
    } else if (isHtml(data)) {
      beautifyRaw = formatHtml(data);
      mode = 'html';
    } else if (isJsonp(data)) {
      const _obj = jsonp2Obj(data);
      try {
        beautifyRaw = _obj[0] + JSONbig.stringify(JSONbig.parse(_obj[1]), null, '\t') + _obj[2];
      } catch (error) {
        try {
          beautifyRaw = _obj[0] + JSON.stringify(JSON.parse(_obj[1]), null, '\t') + _obj[2];
        } catch (error) {
          console.log(error, '美化JSONP失败');
        }
      }
      mode = 'json';
    } else {
      try {
       // eval(data);
        eval(`(function sandbox(){ ${data} })`)
        mode = 'javascript';
      } catch (error) {
        mode = 'text';
      }
      beautifyRaw = data;
    }
  } else {
    beautifyRaw = String(data);
  }

  return {
    mode,
    value: beautifyRaw,
  };
};

export default beautifyRaw;
