const completionHttpProtocol = (data: any) => {
  if (Object.prototype.toString.call(data) === '[object String]') {
    if (
      data.toLowerCase().substr(0, 7).toLowerCase() !== 'http://' &&
      data.toLowerCase().substr(0, 8).toLowerCase() !== 'https://'
    ) {
      data = `http://${data}`;
    }
  } else if (Object.prototype.toString.call(data) === '[object Object]' && data.hasOwnProperty('url')) {
    if(Object.prototype.toString.call(data?.url) === '[object String]'){
      if (
        data.url.toLowerCase().substr(0, 7).toLowerCase() !== 'http://' &&
        data.url.toLowerCase().substr(0, 8).toLowerCase() !== 'https://'
      ) {
        data.url = `http://${data.url}`;
      }
    }
    
  }
  return data;
};

export default completionHttpProtocol;