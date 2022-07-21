const completionHttpProtocol = (data: any) => {
  if (Object.prototype.toString.call(data) === '[object String]') {
    if (
      data.substr(0, 7).toLowerCase() !== 'http://' &&
      data.substr(0, 8).toLowerCase() !== 'https://'
    ) {
      data = `http://${data}`;
    }
  } else if (Object.prototype.toString.call(data) === '[object Object]' && data.hasOwnProperty('url')) {
    if (
      data.url.substr(0, 7).toLowerCase() !== 'http://' &&
      data.url.substr(0, 8).toLowerCase() !== 'https://'
    ) {
      data.url = `http://${data.url}`;
    }
  }
  return data;
};

export default completionHttpProtocol;