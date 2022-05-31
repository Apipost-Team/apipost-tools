import ATools from '../src/index';


describe('works', () => {
  const { isJson5 } = ATools;
  const jsonStr = "{ name:'测试文档.doc'} //名称";
  const notJsonStr = "1234qwe";
  it('测试isJson5 pass', () => {
    expect(isJson5(jsonStr)).toEqual(true);
  });
  it('测试isJson5 faild', () => {
    expect(isJson5(notJsonStr)).toEqual(false);
  });
});

