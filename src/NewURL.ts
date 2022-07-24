import completionHttpProtocol from './completionHttpProtocol';
/**
 * 根据url生成URL 对象
 */
const NewURL = (url: string) => {
  if (Object.prototype.toString.call(url) !== '[object String]') {
    url = '';
  }
  //补全http协议前缀
  url = completionHttpProtocol(url);
  let http_url = url;
  const hostReg = /(http([s]?):\/\/)([^\/\?\\#]*)([\/|\?|\\#]?)/i;

  const host_arr = http_url.match(hostReg) || [];
  const protocol = host_arr[1];
  const host = host_arr[3];
  const hs = host.split(':');
  const hostname = hs[0];
  const port = hs[1] ? hs[1] : '';

  // 主域部分
  const origin = protocol + host;

  let urls: any = {};
  try {
    const tmp_urls: any = new URL(http_url);
    const searchParams: any = new URLSearchParams(tmp_urls.search) || {};
    tmp_urls.params = {};

    Object.keys(searchParams).forEach(key => {
      let x = searchParams[key];
      tmp_urls.params[x[0]] = x[1];
    })

    for (const x of tmp_urls) {
      urls[x] = tmp_urls[x];
    }
  } catch (e) {
    const a = document.createElement('a');
    a.href = http_url;
    urls = {
      source: url,
      href: a.href,
      protocol: a.protocol,
      host: a.hostname,
      hostname: a.hostname,
      port: a.port,
      origin: a.origin,
      search: a.search,
      params: (function () {
        const ret:any = {};
        const seg = a.search.replace(/^\?/, '').split('&');
        const len = seg.length;
        let i = 0;
        let s;
        for (; i < len; i++) {
          if (!seg[i]) {
            continue;
          }
          s = seg[i].split('=');
          ret[s[0]] = s[1];
        }
        return ret;
      })(),
      pathname: a.pathname,
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
      hash: a.hash,
    };

    if (urls.port) {
      urls.host = `${urls.host}:${urls.port}`;
    }
  }

  if (urls.host) {
    urls.host = urls.host.replace(/%7B/g, '{').replace(/%7D/g, '}');
  }

  let hash = urls.hash;

  if (hash.substring(0, 1) === '#') {
    hash = hash.substring(1);
  }
  const res_urls = {
    protocol,
    host,
    hostname,
    origin,
    port,
    search: urls.search,
    params: urls.params,
    pathname: urls.pathname,
    hash,
  };

  if (res_urls.origin) {
    res_urls.origin = res_urls.origin.substring(7);
  }

  return res_urls;
};

export default NewURL;
