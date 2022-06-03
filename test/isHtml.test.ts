import ATools from '../src/index';


describe('works', () => {
  const { isHtml } = ATools;
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Title</title>
  </head>
  <body>
  </body>
  </html>`;
  const str = "1234qwe";
  it('测试isHtml pass', () => {
    expect(isHtml(html)).toEqual(true);
  });
  it('测试isHtml faild', () => {
    expect(isHtml(str)).toEqual(false);
  });
});

