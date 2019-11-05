/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// OLD FOR TEXT MAILS TO HMTL MAILS
/** @type {?} */
const REG_CID1 = new RegExp('(\[cid:[^\s]+])<([^>]+)><([^>]+)>', 'gmi');
/** @type {?} */
const REG_CID2 = new RegExp('(\\[cid:[^\\s]+])\\s+<([^>]+)><([^>]+)>', 'gmi');
/** @type {?} */
const REG_LINKS = new RegExp('([^\\s<]+)<([^>]+)>', 'gmi');
/** @type {?} */
const REG_TRIM_START = new RegExp('^(\\s)*');
/** @type {?} */
const REG_TRIM_END = new RegExp('(\\s)*$');
/** @type {?} */
const REG_WHITE_SPACE = new RegExp('\\n', 'g');
// END
/** @type {?} */
export const REG_IMAGES = new RegExp('(<img.*">)', 'gmi');
/** @type {?} */
export const REG_OUTLOCK = new RegExp('(_{32}.From.*)', 'gmi');
export class HtmlParserService {
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    static removeCid(s) {
        return s.replace(REG_CID1, '').replace(REG_CID2, '');
    }
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    static parseLinks(s) {
        /** @type {?} */
        const replacer = (/**
         * @param {?} match
         * @param {?} text
         * @param {?} url
         * @return {?}
         */
        (match, text, url) => match ? `<a href="${url}" target="_blank" rel="nofollow">${text}</a>` : '');
        return s.replace(REG_LINKS, replacer);
    }
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    static trim(s) {
        return s.replace(REG_TRIM_START, '').replace(REG_TRIM_END, '');
    }
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    static parseHtml(s) {
        return s
            .replace('<html><body>', '').replace('</body></html>', '') // Replace wrap
            .replace('style=\"text-align:right;\"', 'class=\"align-right\"') // Replace Align Right
            .replace('style=\"text-align:center;\"', 'class=\"align-center\"') // Replace Align Center
            .replace(REG_IMAGES, '') // Remove IMGS
            .replace(REG_OUTLOCK, ''); // Remove Outlock Footer
    }
    /**
     * @param {?} s
     * @return {?}
     */
    static parse(s) {
        if (!s) {
            return '';
        }
        if (s.includes('[cid:')) { // FALLBACK FOR TEXT ONLY MESSAGES
            return this.trim(this.parseLinks(this.removeCid(s))).replace(REG_WHITE_SPACE, '<br/>');
        }
        return this.parseHtml(s);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1wYXJzZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0bWwtbWVzc2FnZS8iLCJzb3VyY2VzIjpbImxpYi9odG1sLXBhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztNQUNNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxtQ0FBbUMsRUFBRSxLQUFLLENBQUM7O01BQ2pFLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyx5Q0FBeUMsRUFBRSxLQUFLLENBQUM7O01BQ3ZFLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUM7O01BQ3BELGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7O01BQ3RDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7O01BQ3BDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDOzs7QUFFOUMsTUFBTSxPQUFPLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDOztBQUN6RCxNQUFNLE9BQU8sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztBQUc5RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFFcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFTO1FBQ2hDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQVM7O2NBQzNCLFFBQVE7Ozs7OztRQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLG9DQUFvQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ2pILE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFTO1FBQzNCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQVM7UUFDaEMsT0FBTyxDQUFDO2FBQ0wsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZTthQUN6RSxPQUFPLENBQUMsNkJBQTZCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxzQkFBc0I7YUFDdEYsT0FBTyxDQUFDLDhCQUE4QixFQUFFLHdCQUF3QixDQUFDLENBQUMsdUJBQXVCO2FBQ3pGLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsY0FBYzthQUN0QyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0lBQ3ZELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFTO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ3RCLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLGtDQUFrQztZQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hGO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE9MRCBGT1IgVEVYVCBNQUlMUyBUTyBITVRMIE1BSUxTXG5jb25zdCBSRUdfQ0lEMSA9IG5ldyBSZWdFeHAoJyhcXFtjaWQ6W15cXHNdK10pPChbXj5dKyk+PChbXj5dKyk+JywgJ2dtaScpO1xuY29uc3QgUkVHX0NJRDIgPSBuZXcgUmVnRXhwKCcoXFxcXFtjaWQ6W15cXFxcc10rXSlcXFxccys8KFtePl0rKT48KFtePl0rKT4nLCAnZ21pJyk7XG5jb25zdCBSRUdfTElOS1MgPSBuZXcgUmVnRXhwKCcoW15cXFxcczxdKyk8KFtePl0rKT4nLCAnZ21pJyk7XG5jb25zdCBSRUdfVFJJTV9TVEFSVCA9IG5ldyBSZWdFeHAoJ14oXFxcXHMpKicpO1xuY29uc3QgUkVHX1RSSU1fRU5EID0gbmV3IFJlZ0V4cCgnKFxcXFxzKSokJyk7XG5jb25zdCBSRUdfV0hJVEVfU1BBQ0UgPSBuZXcgUmVnRXhwKCdcXFxcbicsICdnJyk7XG4vLyBFTkRcbmV4cG9ydCBjb25zdCBSRUdfSU1BR0VTID0gbmV3IFJlZ0V4cCgnKDxpbWcuKlwiPiknLCAnZ21pJyk7XG5leHBvcnQgY29uc3QgUkVHX09VVExPQ0sgPSBuZXcgUmVnRXhwKCcoX3szMn0uRnJvbS4qKScsICdnbWknKTtcblxuXG5leHBvcnQgY2xhc3MgSHRtbFBhcnNlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3RhdGljIHJlbW92ZUNpZChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnJlcGxhY2UoUkVHX0NJRDEsICcnKS5yZXBsYWNlKFJFR19DSUQyLCAnJyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUxpbmtzKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVwbGFjZXIgPSAobWF0Y2gsIHRleHQsIHVybCkgPT4gbWF0Y2ggPyBgPGEgaHJlZj1cIiR7dXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+JHt0ZXh0fTwvYT5gIDogJyc7XG4gICAgcmV0dXJuIHMucmVwbGFjZShSRUdfTElOS1MsIHJlcGxhY2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHRyaW0oczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKFJFR19UUklNX1NUQVJULCAnJykucmVwbGFjZShSRUdfVFJJTV9FTkQsICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlSHRtbChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzXG4gICAgICAucmVwbGFjZSgnPGh0bWw+PGJvZHk+JywgJycpLnJlcGxhY2UoJzwvYm9keT48L2h0bWw+JywgJycpIC8vIFJlcGxhY2Ugd3JhcFxuICAgICAgLnJlcGxhY2UoJ3N0eWxlPVxcXCJ0ZXh0LWFsaWduOnJpZ2h0O1xcXCInLCAnY2xhc3M9XFxcImFsaWduLXJpZ2h0XFxcIicpIC8vIFJlcGxhY2UgQWxpZ24gUmlnaHRcbiAgICAgIC5yZXBsYWNlKCdzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7XFxcIicsICdjbGFzcz1cXFwiYWxpZ24tY2VudGVyXFxcIicpIC8vIFJlcGxhY2UgQWxpZ24gQ2VudGVyXG4gICAgICAucmVwbGFjZShSRUdfSU1BR0VTLCAnJykgLy8gUmVtb3ZlIElNR1NcbiAgICAgIC5yZXBsYWNlKFJFR19PVVRMT0NLLCAnJyk7IC8vIFJlbW92ZSBPdXRsb2NrIEZvb3RlclxuICB9XG5cbiAgc3RhdGljIHBhcnNlKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFzKSB7IHJldHVybiAnJzsgfVxuICAgIGlmIChzLmluY2x1ZGVzKCdbY2lkOicpKSB7IC8vIEZBTExCQUNLIEZPUiBURVhUIE9OTFkgTUVTU0FHRVNcbiAgICAgIHJldHVybiB0aGlzLnRyaW0odGhpcy5wYXJzZUxpbmtzKHRoaXMucmVtb3ZlQ2lkKHMpKSkucmVwbGFjZShSRUdfV0hJVEVfU1BBQ0UsICc8YnIvPicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXJzZUh0bWwocyk7XG4gIH1cbn1cbiJdfQ==