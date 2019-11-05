/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { REG_OUTLOCK } from '../html-parser.service';
var HtmlPreviewPipe = /** @class */ (function () {
    function HtmlPreviewPipe() {
    }
    /**
     * @param {?} value
     * @param {?} length
     * @return {?}
     */
    HtmlPreviewPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} length
     * @return {?}
     */
    function (value, length) {
        return value
            .replace(REG_OUTLOCK, '')
            .replace(/<[^>]*>?/gm, '')
            .replace('&nbsp;', ' ')
            .substr(0, length === -1 ? Infinity : length);
    };
    HtmlPreviewPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'htmlPreview'
                },] }
    ];
    return HtmlPreviewPipe;
}());
export { HtmlPreviewPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1wcmV2aWV3LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9odG1sLW1lc3NhZ2UvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaHRtbC1wcmV2aWV3LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRDtJQUFBO0lBYUEsQ0FBQzs7Ozs7O0lBUkMsbUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsTUFBYztRQUNyQyxPQUFPLEtBQUs7YUFDVCxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQzthQUN4QixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQzthQUN6QixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUN0QixNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFYRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7aUJBQ3BCOztJQVdELHNCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFR19PVVRMT0NLIH0gZnJvbSAnLi4vaHRtbC1wYXJzZXIuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2h0bWxQcmV2aWV3J1xufSlcbmV4cG9ydCBjbGFzcyBIdG1sUHJldmlld1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZVxuICAgICAgLnJlcGxhY2UoUkVHX09VVExPQ0ssICcnKVxuICAgICAgLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJylcbiAgICAgIC5yZXBsYWNlKCcmbmJzcDsnLCAnICcpXG4gICAgICAuc3Vic3RyKDAsIGxlbmd0aCA9PT0gLTEgPyBJbmZpbml0eSA6IGxlbmd0aCk7XG4gIH1cblxufVxuIl19