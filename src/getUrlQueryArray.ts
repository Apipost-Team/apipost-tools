export const getUrlQueryArray = (url: string): any[] => {
  try {
    const array = [];
    const arrObj = url.split('?');
    if (arrObj.length > 1) {
      const arrPara = arrObj[1].split('&');
      let arr;

      for (let i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split('=');

        if (arr != null && arr.length !== 0) {
          if (arr.length === 1) {
            array.push({
              key: arr[0],
              value: '',
            });
          } else {
            const key = arr[0];
            arr.shift();
            array.push({
              key,
              value: arr.join('='),
            });
          }
        }
      }
    }
    return array;
  } catch (error) {
    return [];
  }
}

export default getUrlQueryArray;
