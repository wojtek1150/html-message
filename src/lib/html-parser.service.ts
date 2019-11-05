// OLD FOR TEXT MAILS TO HMTL MAILS
const REG_CID1 = new RegExp('(\[cid:[^\s]+])<([^>]+)><([^>]+)>', 'gmi');
const REG_CID2 = new RegExp('(\\[cid:[^\\s]+])\\s+<([^>]+)><([^>]+)>', 'gmi');
const REG_LINKS = new RegExp('([^\\s<]+)<([^>]+)>', 'gmi');
const REG_TRIM_START = new RegExp('^(\\s)*');
const REG_TRIM_END = new RegExp('(\\s)*$');
const REG_WHITE_SPACE = new RegExp('\\n', 'g');
// END
export const REG_IMAGES = new RegExp('(<img.*">)', 'gmi');
export const REG_OUTLOCK = new RegExp('(_{32}.From.*)', 'gmi');


export class HtmlParserService {

  private static removeCid(s: string): string {
    return s.replace(REG_CID1, '').replace(REG_CID2, '');
  }

  private static parseLinks(s: string): string {
    const replacer = (match, text, url) => match ? `<a href="${url}" target="_blank" rel="nofollow">${text}</a>` : '';
    return s.replace(REG_LINKS, replacer);
  }

  private static trim(s: string): string {
    return s.replace(REG_TRIM_START, '').replace(REG_TRIM_END, '');
  }

  private static parseHtml(s: string): string {
    return s
      .replace('<html><body>', '').replace('</body></html>', '') // Replace wrap
      .replace('style=\"text-align:right;\"', 'class=\"align-right\"') // Replace Align Right
      .replace('style=\"text-align:center;\"', 'class=\"align-center\"') // Replace Align Center
      .replace(REG_IMAGES, '') // Remove IMGS
      .replace(REG_OUTLOCK, ''); // Remove Outlock Footer
  }

  static parse(s: string): string {
    if (!s) { return ''; }
    if (s.includes('[cid:')) { // FALLBACK FOR TEXT ONLY MESSAGES
      return this.trim(this.parseLinks(this.removeCid(s))).replace(REG_WHITE_SPACE, '<br/>');
    }
    return this.parseHtml(s);
  }
}
