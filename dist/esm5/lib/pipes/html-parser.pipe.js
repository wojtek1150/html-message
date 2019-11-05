/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { HtmlParserService } from '../html-parser.service';
var HtmlParserPipe = /** @class */ (function () {
    function HtmlParserPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HtmlParserPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return HtmlParserService.parse(value);
    };
    HtmlParserPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'htmlParser'
                },] }
    ];
    return HtmlParserPipe;
}());
export { HtmlParserPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1wYXJzZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0bWwtbWVzc2FnZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9odG1sLXBhcnNlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRDtJQUFBO0lBU0EsQ0FBQzs7Ozs7SUFKQyxrQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFlBQVk7aUJBQ25COztJQU9ELHFCQUFDO0NBQUEsQUFURCxJQVNDO1NBTlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0bWxQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vaHRtbC1wYXJzZXIuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2h0bWxQYXJzZXInXG59KVxuZXhwb3J0IGNsYXNzIEh0bWxQYXJzZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBIdG1sUGFyc2VyU2VydmljZS5wYXJzZSh2YWx1ZSk7XG4gIH1cblxufVxuIl19