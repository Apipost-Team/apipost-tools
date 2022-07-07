import html_beautify from 'html-beautify';
export const formatHtml = (html: any) => {
  html = html_beautify(html, {});
  return html.replace(/\n(\n)*( )*(\n)*\n/g, '\n');
};

export default formatHtml;
