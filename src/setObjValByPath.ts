// 成功结果对象
export const setObjValByPath = (obj: any, val: any, path: String) => {
  if (Object.prototype.toString.call(path) != '[object String]') {
    return;
  }
  if (Object.prototype.toString.call(obj) != '[object Object]') {
    return;
  }
  let arr = path.split('.');
  arr.reduce((acc, cur, i) => {
    return (acc[cur] = i === arr.length - 1 ? val : acc[cur] || {})
  }, obj)
}

export default setObjValByPath;