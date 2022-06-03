import ATools from '../src/index';


describe('works', () => {
  const { formatXml } = ATools;
  const xml = "<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>";
  const formattingXml = "<note>\r\n    <to>Tove</to>\r\n    <from>Jani</from>\r\n    <heading>Reminder</heading>\r\n    <body>Don't forget me this weekend!</body>\r\n</note>"
  it('测试formatXml pass', () => {
    expect(formatXml(xml)).toEqual(formattingXml);
  });
});

