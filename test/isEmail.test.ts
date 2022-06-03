import ATools from '../src/index';


describe('works', () => {
  const { isEmail } = ATools;
  const eamil = '1030698842@qq.com';
  const str = "1234qwe";
  it('测试isEmail pass', () => {
    expect(isEmail(eamil)).toEqual(true);
  });
  it('测试isEmail faild', () => {
    expect(isEmail(str)).toEqual(false);
  });
});

