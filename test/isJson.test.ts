import ATools from '../src/index';


describe('works', () => {
  const { isJson } = ATools;
  const jsonStr = '{"name":"测试文档.doc"}';
  const notJsonStr = "1234qwe";
  it('测试isJson pass', () => {
    expect(isJson(jsonStr)).toEqual(true);
  });
  it('测试isJson faild', () => {
    expect(isJson(notJsonStr)).toEqual(false);
  });
});

