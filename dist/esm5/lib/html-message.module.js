/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlMessageComponent } from './components/html-message.component';
import { HtmlPreviewMessageComponent } from './components/html-preview-message.component';
import { HtmlParserPipe } from './pipes/html-parser.pipe';
import { HtmlPreviewPipe } from './pipes/html-preview.pipe';
import { SafeHtmlPipe } from './pipes/save-html.pipe';
var HtmlMessageModule = /** @class */ (function () {
    function HtmlMessageModule() {
    }
    HtmlMessageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HtmlMessageComponent,
                        HtmlPreviewMessageComponent,
                        HtmlParserPipe,
                        HtmlPreviewPipe,
                        SafeHtmlPipe
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [HtmlMessageComponent, HtmlPreviewMessageComponent]
                },] }
    ];
    return HtmlMessageModule;
}());
export { HtmlMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1tZXNzYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0bWwtbWVzc2FnZS8iLCJzb3VyY2VzIjpbImxpYi9odG1sLW1lc3NhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RDtJQUFBO0lBYWdDLENBQUM7O2dCQWJoQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwyQkFBMkIsQ0FBQztpQkFDN0Q7O0lBQytCLHdCQUFDO0NBQUEsQUFiakMsSUFhaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEh0bWxNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2h0bWwtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHRtbFByZXZpZXdNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2h0bWwtcHJldmlldy1tZXNzYWdlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEh0bWxQYXJzZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9odG1sLXBhcnNlci5waXBlJztcbmltcG9ydCB7IEh0bWxQcmV2aWV3UGlwZSB9IGZyb20gJy4vcGlwZXMvaHRtbC1wcmV2aWV3LnBpcGUnO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9zYXZlLWh0bWwucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEh0bWxNZXNzYWdlQ29tcG9uZW50LFxuICAgIEh0bWxQcmV2aWV3TWVzc2FnZUNvbXBvbmVudCxcbiAgICBIdG1sUGFyc2VyUGlwZSxcbiAgICBIdG1sUHJldmlld1BpcGUsXG4gICAgU2FmZUh0bWxQaXBlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0h0bWxNZXNzYWdlQ29tcG9uZW50LCBIdG1sUHJldmlld01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEh0bWxNZXNzYWdlTW9kdWxlIHt9XG4iXX0=