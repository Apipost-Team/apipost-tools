import ATools from '../src/index';


describe('works', () => {
  const { isJsonp } = ATools;
  const jsonpStr = 'callback({"name":"hax","gender":"Male"})';
  const JsonStr = '{"name":"hax","gender":"Male"}';
  it('测试isJsonp pass', () => {
    expect(isJsonp(jsonpStr)).toEqual(true);
  });
  it('测试isJsonp faild', () => {
    expect(isJsonp(JsonStr)).toEqual(false);
  });
});

