/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// OLD FOR TEXT MAILS TO HMTL MAILS
/** @type {?} */
var REG_CID1 = new RegExp('(\[cid:[^\s]+])<([^>]+)><([^>]+)>', 'gmi');
/** @type {?} */
var REG_CID2 = new RegExp('(\\[cid:[^\\s]+])\\s+<([^>]+)><([^>]+)>', 'gmi');
/** @type {?} */
var REG_LINKS = new RegExp('([^\\s<]+)<([^>]+)>', 'gmi');
/** @type {?} */
var REG_TRIM_START = new RegExp('^(\\s)*');
/** @type {?} */
var REG_TRIM_END = new RegExp('(\\s)*$');
/** @type {?} */
var REG_WHITE_SPACE = new RegExp('\\n', 'g');
// END
/** @type {?} */
export var REG_IMAGES = new RegExp('(<img.*">)', 'gmi');
/** @type {?} */
export var REG_OUTLOCK = new RegExp('(_{32}.From.*)', 'gmi');
var HtmlParserService = /** @class */ (function () {
    function HtmlParserService() {
    }
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    HtmlParserService.removeCid = /**
     * @private
     * @param {?} s
     * @return {?}
     */
    function (s) {
        return s.replace(REG_CID1, '').replace(REG_CID2, '');
    };
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    HtmlParserService.parseLinks = /**
     * @private
     * @param {?} s
     * @return {?}
     */
    function (s) {
        /** @type {?} */
        var replacer = (/**
         * @param {?} match
         * @param {?} text
         * @param {?} url
         * @return {?}
         */
        function (match, text, url) { return match ? "<a href=\"" + url + "\" target=\"_blank\" rel=\"nofollow\">" + text + "</a>" : ''; });
        return s.replace(REG_LINKS, replacer);
    };
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    HtmlParserService.trim = /**
     * @private
     * @param {?} s
     * @return {?}
     */
    function (s) {
        return s.replace(REG_TRIM_START, '').replace(REG_TRIM_END, '');
    };
    /**
     * @private
     * @param {?} s
     * @return {?}
     */
    HtmlParserService.parseHtml = /**
     * @private
     * @param {?} s
     * @return {?}
     */
    function (s) {
        return s
            .replace('<html><body>', '').replace('</body></html>', '') // Replace wrap
            .replace('style=\"text-align:right;\"', 'class=\"align-right\"') // Replace Align Right
            .replace('style=\"text-align:center;\"', 'class=\"align-center\"') // Replace Align Center
            .replace(REG_IMAGES, '') // Remove IMGS
            .replace(REG_OUTLOCK, ''); // Remove Outlock Footer
    };
    /**
     * @param {?} s
     * @return {?}
     */
    HtmlParserService.parse = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        if (!s) {
            return '';
        }
        if (s.includes('[cid:')) { // FALLBACK FOR TEXT ONLY MESSAGES
            return this.trim(this.parseLinks(this.removeCid(s))).replace(REG_WHITE_SPACE, '<br/>');
        }
        return this.parseHtml(s);
    };
    return HtmlParserService;
}());
export { HtmlParserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1wYXJzZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0bWwtbWVzc2FnZS8iLCJzb3VyY2VzIjpbImxpYi9odG1sLXBhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxtQ0FBbUMsRUFBRSxLQUFLLENBQUM7O0lBQ2pFLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyx5Q0FBeUMsRUFBRSxLQUFLLENBQUM7O0lBQ3ZFLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUM7O0lBQ3BELGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0lBQ3RDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0lBQ3BDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDOzs7QUFFOUMsTUFBTSxLQUFPLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDOztBQUN6RCxNQUFNLEtBQU8sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztBQUc5RDtJQUFBO0lBK0JBLENBQUM7Ozs7OztJQTdCZ0IsMkJBQVM7Ozs7O0lBQXhCLFVBQXlCLENBQVM7UUFDaEMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVjLDRCQUFVOzs7OztJQUF6QixVQUEwQixDQUFTOztZQUMzQixRQUFROzs7Ozs7UUFBRyxVQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFLLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFZLEdBQUcsOENBQW9DLElBQUksU0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQTFFLENBQTBFLENBQUE7UUFDakgsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFYyxzQkFBSTs7Ozs7SUFBbkIsVUFBb0IsQ0FBUztRQUMzQixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRWMsMkJBQVM7Ozs7O0lBQXhCLFVBQXlCLENBQVM7UUFDaEMsT0FBTyxDQUFDO2FBQ0wsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZTthQUN6RSxPQUFPLENBQUMsNkJBQTZCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxzQkFBc0I7YUFDdEYsT0FBTyxDQUFDLDhCQUE4QixFQUFFLHdCQUF3QixDQUFDLENBQUMsdUJBQXVCO2FBQ3pGLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsY0FBYzthQUN0QyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0lBQ3ZELENBQUM7Ozs7O0lBRU0sdUJBQUs7Ozs7SUFBWixVQUFhLENBQVM7UUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDdEIsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsa0NBQWtDO1lBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEY7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE9MRCBGT1IgVEVYVCBNQUlMUyBUTyBITVRMIE1BSUxTXG5jb25zdCBSRUdfQ0lEMSA9IG5ldyBSZWdFeHAoJyhcXFtjaWQ6W15cXHNdK10pPChbXj5dKyk+PChbXj5dKyk+JywgJ2dtaScpO1xuY29uc3QgUkVHX0NJRDIgPSBuZXcgUmVnRXhwKCcoXFxcXFtjaWQ6W15cXFxcc10rXSlcXFxccys8KFtePl0rKT48KFtePl0rKT4nLCAnZ21pJyk7XG5jb25zdCBSRUdfTElOS1MgPSBuZXcgUmVnRXhwKCcoW15cXFxcczxdKyk8KFtePl0rKT4nLCAnZ21pJyk7XG5jb25zdCBSRUdfVFJJTV9TVEFSVCA9IG5ldyBSZWdFeHAoJ14oXFxcXHMpKicpO1xuY29uc3QgUkVHX1RSSU1fRU5EID0gbmV3IFJlZ0V4cCgnKFxcXFxzKSokJyk7XG5jb25zdCBSRUdfV0hJVEVfU1BBQ0UgPSBuZXcgUmVnRXhwKCdcXFxcbicsICdnJyk7XG4vLyBFTkRcbmV4cG9ydCBjb25zdCBSRUdfSU1BR0VTID0gbmV3IFJlZ0V4cCgnKDxpbWcuKlwiPiknLCAnZ21pJyk7XG5leHBvcnQgY29uc3QgUkVHX09VVExPQ0sgPSBuZXcgUmVnRXhwKCcoX3szMn0uRnJvbS4qKScsICdnbWknKTtcblxuXG5leHBvcnQgY2xhc3MgSHRtbFBhcnNlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3RhdGljIHJlbW92ZUNpZChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnJlcGxhY2UoUkVHX0NJRDEsICcnKS5yZXBsYWNlKFJFR19DSUQyLCAnJyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUxpbmtzKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVwbGFjZXIgPSAobWF0Y2gsIHRleHQsIHVybCkgPT4gbWF0Y2ggPyBgPGEgaHJlZj1cIiR7dXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+JHt0ZXh0fTwvYT5gIDogJyc7XG4gICAgcmV0dXJuIHMucmVwbGFjZShSRUdfTElOS1MsIHJlcGxhY2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHRyaW0oczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKFJFR19UUklNX1NUQVJULCAnJykucmVwbGFjZShSRUdfVFJJTV9FTkQsICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlSHRtbChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzXG4gICAgICAucmVwbGFjZSgnPGh0bWw+PGJvZHk+JywgJycpLnJlcGxhY2UoJzwvYm9keT48L2h0bWw+JywgJycpIC8vIFJlcGxhY2Ugd3JhcFxuICAgICAgLnJlcGxhY2UoJ3N0eWxlPVxcXCJ0ZXh0LWFsaWduOnJpZ2h0O1xcXCInLCAnY2xhc3M9XFxcImFsaWduLXJpZ2h0XFxcIicpIC8vIFJlcGxhY2UgQWxpZ24gUmlnaHRcbiAgICAgIC5yZXBsYWNlKCdzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXI7XFxcIicsICdjbGFzcz1cXFwiYWxpZ24tY2VudGVyXFxcIicpIC8vIFJlcGxhY2UgQWxpZ24gQ2VudGVyXG4gICAgICAucmVwbGFjZShSRUdfSU1BR0VTLCAnJykgLy8gUmVtb3ZlIElNR1NcbiAgICAgIC5yZXBsYWNlKFJFR19PVVRMT0NLLCAnJyk7IC8vIFJlbW92ZSBPdXRsb2NrIEZvb3RlclxuICB9XG5cbiAgc3RhdGljIHBhcnNlKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFzKSB7IHJldHVybiAnJzsgfVxuICAgIGlmIChzLmluY2x1ZGVzKCdbY2lkOicpKSB7IC8vIEZBTExCQUNLIEZPUiBURVhUIE9OTFkgTUVTU0FHRVNcbiAgICAgIHJldHVybiB0aGlzLnRyaW0odGhpcy5wYXJzZUxpbmtzKHRoaXMucmVtb3ZlQ2lkKHMpKSkucmVwbGFjZShSRUdfV0hJVEVfU1BBQ0UsICc8YnIvPicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXJzZUh0bWwocyk7XG4gIH1cbn1cbiJdfQ==