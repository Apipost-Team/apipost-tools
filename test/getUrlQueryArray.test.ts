import ATools from '../src/index';


describe('works', () => {
  const { getUrlQueryArray } = ATools;
  const url = 'http://echo.apipost.cn?name=tom&age=18';
  const str = "1234qwe";
  it('测试getUrlQueryArray pass', () => {
    expect(getUrlQueryArray(url)).toEqual([{"key":"name","value":"tom"},{"key":"age","value":"18"}]);
  });
  it('测试getUrlQueryArray faild', () => {
    expect(getUrlQueryArray(str)).toEqual([]);
  });
});

