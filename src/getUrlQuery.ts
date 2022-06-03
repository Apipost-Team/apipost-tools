export const getUrlQuery = (url: string): object => {
  try {
    let urlArr=url.split('?');
    if(urlArr.length > 1){
      return  urlArr[1].split('&').reduce((searchParams: any, curKV) => {
        let [k, v] = curKV.split('=').map(decodeURIComponent);
        if (!v || v === undefined) {
          v = '';
        }
        if(k && k.length > 0){
          searchParams[k] = v;
        }
  
        return searchParams;
      }, {});
    }
    return {};
  } catch (error) {
    return {};
  }
}

export default getUrlQuery;
