import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlMessageComponent {
}
HtmlMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-html-message',
                template: `
    <div class="message" [innerHtml]="message | htmlParser | safeHtml"></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".message{display:block;line-height:1.25}.message .align-right{text-align:right}.message .align-center{text-align:center}.message ol,.message ul{line-height:1.4;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-padding-start:40px;padding-inline-start:40px}.message p{white-space:normal}.message table{margin-top:15px;width:100%}.message h2,.message td,.message th,.message tr{padding:12px 20px}.message h2{color:#404040;font-size:20px;font-weight:500;padding:20px 20px 5px}.message th{color:#757575;font-size:12px;font-weight:500}.message td{border-collapse:collapse;border-top:1px solid #d8d8d8;color:#292929;font-size:13px;font-weight:400;text-align:center}.message a{color:#2980b9;text-decoration:none;-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out}.message a:hover{color:#55a5d9}.message tr:not(#header){-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.message tr:not(#header):hover{background:#eee}"]
            }] }
];
HtmlMessageComponent.propDecorators = {
    message: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HtmlMessageComponent.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlPreviewMessageComponent {
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
const REG_IMAGES = new RegExp('(<img.*">)', 'gmi');
/** @type {?} */
const REG_OUTLOCK = new RegExp('(_{32}.From.*)', 'gmi');
class HtmlParserService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlParserPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return HtmlParserService.parse(value);
    }
}
HtmlParserPipe.decorators = [
    { type: Pipe, args: [{
                name: 'htmlParser'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlPreviewPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafeHtmlPipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{ name: 'safeHtml' },] }
];
/** @nocollapse */
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafeHtmlPipe.prototype.sanitized;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlMessageModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HtmlMessageComponent, HtmlMessageModule, HtmlParserPipe, HtmlParserService, HtmlPreviewMessageComponent, HtmlPreviewPipe, REG_IMAGES, REG_OUTLOCK, SafeHtmlPipe };
//# sourceMappingURL=html-message.js.map
