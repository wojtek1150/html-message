/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class HtmlPreviewMessageComponent {
    constructor() {
        this.length = 100;
    }
}
HtmlPreviewMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-html-message-preview',
                template: `
    <p>{{message | htmlPreview:length}}</p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
HtmlPreviewMessageComponent.propDecorators = {
    message: [{ type: Input }],
    length: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HtmlPreviewMessageComponent.prototype.message;
    /** @type {?} */
    HtmlPreviewMessageComponent.prototype.length;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1wcmV2aWV3LW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaHRtbC1tZXNzYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaHRtbC1wcmV2aWV3LW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxRSxNQUFNLE9BQU8sMkJBQTJCO0lBUHhDO1FBU1csV0FBTSxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOztHQUVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7c0JBRUUsS0FBSztxQkFDTCxLQUFLOzs7O0lBRE4sOENBQXlCOztJQUN6Qiw2Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaHRtbC1tZXNzYWdlLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPnt7bWVzc2FnZSB8IGh0bWxQcmV2aWV3Omxlbmd0aH19PC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIdG1sUHJldmlld01lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxlbmd0aCA9IDEwMDtcbn1cbiJdfQ==