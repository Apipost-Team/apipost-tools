import ATools from '../src/index';


describe('works', () => {
  const { ms2second } = ATools;
  const successStr = '1563443717288';
  it('测试ms2second pass', () => {
    expect(ms2second(successStr)).toEqual(1563443717);
  });
});

