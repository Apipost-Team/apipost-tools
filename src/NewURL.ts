import completionHttpProtocol from './completionHttpProtocol';
/**
 * 根据url生成URL 对象
 */
const NewURL = (_url: string) => {

  if (Object.prototype.toString.call(_url) !== '[object String]') {
    _url = '';
  }
  //补全http协议前缀
  _url = completionHttpProtocol(_url);
  const hostReg = /(http([s]?):\/\/)([^\/\?\\#]*)([\/|\?|\\#]?)/i;
  const host_arr = _url.match(hostReg) || [];
  const protocol = host_arr[1];
  const host = host_arr[3];

  // 主域部分
  const origin = protocol + host;

  // 剩下部分
  _url = `https://www.apipost.cn${_url.substring(origin.length)}`;

  let urls = {};
  try {
    urls = new URL(_url);
  } catch {
    const http_url = `https://www.apipost.cn${_url.substring(origin.length)}`;
    const a = document.createElement('a');
    a.href = http_url;
    urls = {
      source: _url,
      href: a.href,
      protocol: a.protocol,
      host: a.hostname,
      hostname: a.hostname,
      port: a.port,
      origin: a.origin,
      search: a.search,
      pathname: a.pathname,
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || ['', ''])[1],
      hash: a.hash,
    };
  }
  return urls;
};

export default NewURL;
