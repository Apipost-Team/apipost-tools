import ATools from '../src/index';


describe('works', () => {
  const { getUrlQuery } = ATools;
  const url = 'http://echo.apipost.cn?name=tom&age=18';
  const str = "1234qwe";
  it('测试getUrlQuery pass', () => {
    expect(getUrlQuery(url)).toEqual({"age": "18", "name": "tom"});
  });
  it('测试getUrlQuery faild', () => {
    expect(getUrlQuery(str)).toEqual({});
  });
});

