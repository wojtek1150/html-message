/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { REG_OUTLOCK } from '../html-parser.service';
export class HtmlPreviewPipe {
    /**
     * @param {?} value
     * @param {?} length
     * @return {?}
     */
    transform(value, length) {
        return value
            .replace(REG_OUTLOCK, '')
            .replace(/<[^>]*>?/gm, '')
            .replace('&nbsp;', ' ')
            .substr(0, length === -1 ? Infinity : length);
    }
}
HtmlPreviewPipe.decorators = [
    { type: Pipe, args: [{
                name: 'htmlPreview'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1wcmV2aWV3LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9odG1sLW1lc3NhZ2UvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaHRtbC1wcmV2aWV3LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUtyRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBRTFCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNyQyxPQUFPLEtBQUs7YUFDVCxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQzthQUN4QixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQzthQUN6QixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUN0QixNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUFYRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRUdfT1VUTE9DSyB9IGZyb20gJy4uL2h0bWwtcGFyc2VyLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdodG1sUHJldmlldydcbn0pXG5leHBvcnQgY2xhc3MgSHRtbFByZXZpZXdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgIC5yZXBsYWNlKFJFR19PVVRMT0NLLCAnJylcbiAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAucmVwbGFjZSgnJm5ic3A7JywgJyAnKVxuICAgICAgLnN1YnN0cigwLCBsZW5ndGggPT09IC0xID8gSW5maW5pdHkgOiBsZW5ndGgpO1xuICB9XG5cbn1cbiJdfQ==