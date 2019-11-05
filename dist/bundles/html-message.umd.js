(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('html-message', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['html-message'] = {}, global.ng.core, global.ng.common, global.ng.platformBrowser));
}(this, function (exports, core, common, platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HtmlMessageComponent = /** @class */ (function () {
        function HtmlMessageComponent() {
        }
        HtmlMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-html-message',
                        template: "\n    <div class=\"message\" [innerHtml]=\"message | htmlParser | safeHtml\"></div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".message{display:block;line-height:1.25}.message .align-right{text-align:right}.message .align-center{text-align:center}.message ol,.message ul{line-height:1.4;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-padding-start:40px;padding-inline-start:40px}.message p{white-space:normal}.message table{margin-top:15px;width:100%}.message h2,.message td,.message th,.message tr{padding:12px 20px}.message h2{color:#404040;font-size:20px;font-weight:500;padding:20px 20px 5px}.message th{color:#757575;font-size:12px;font-weight:500}.message td{border-collapse:collapse;border-top:1px solid #d8d8d8;color:#292929;font-size:13px;font-weight:400;text-align:center}.message a{color:#2980b9;text-decoration:none;-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out}.message a:hover{color:#55a5d9}.message tr:not(#header){-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.message tr:not(#header):hover{background:#eee}"]
                    }] }
        ];
        HtmlMessageComponent.propDecorators = {
            message: [{ type: core.Input }]
        };
        return HtmlMessageComponent;
    }());
    if (false) {
        /** @type {?} */
        HtmlMessageComponent.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HtmlPreviewMessageComponent = /** @class */ (function () {
        function HtmlPreviewMessageComponent() {
            this.length = 100;
        }
        HtmlPreviewMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-html-message-preview',
                        template: "\n    <p>{{message | htmlPreview:length}}</p>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        HtmlPreviewMessageComponent.propDecorators = {
            message: [{ type: core.Input }],
            length: [{ type: core.Input }]
        };
        return HtmlPreviewMessageComponent;
    }());
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
    var REG_IMAGES = new RegExp('(<img.*">)', 'gmi');
    /** @type {?} */
    var REG_OUTLOCK = new RegExp('(_{32}.From.*)', 'gmi');
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Pipe, args: [{
                        name: 'htmlParser'
                    },] }
        ];
        return HtmlParserPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Pipe, args: [{
                        name: 'htmlPreview'
                    },] }
        ];
        return HtmlPreviewPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitized) {
            this.sanitized = sanitized;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SafeHtmlPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return this.sanitized.bypassSecurityTrustHtml(value);
        };
        SafeHtmlPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'safeHtml' },] }
        ];
        /** @nocollapse */
        SafeHtmlPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        return SafeHtmlPipe;
    }());
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
    var HtmlMessageModule = /** @class */ (function () {
        function HtmlMessageModule() {
        }
        HtmlMessageModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            HtmlMessageComponent,
                            HtmlPreviewMessageComponent,
                            HtmlParserPipe,
                            HtmlPreviewPipe,
                            SafeHtmlPipe
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [HtmlMessageComponent, HtmlPreviewMessageComponent]
                    },] }
        ];
        return HtmlMessageModule;
    }());

    exports.HtmlMessageComponent = HtmlMessageComponent;
    exports.HtmlMessageModule = HtmlMessageModule;
    exports.HtmlParserPipe = HtmlParserPipe;
    exports.HtmlParserService = HtmlParserService;
    exports.HtmlPreviewMessageComponent = HtmlPreviewMessageComponent;
    exports.HtmlPreviewPipe = HtmlPreviewPipe;
    exports.REG_IMAGES = REG_IMAGES;
    exports.REG_OUTLOCK = REG_OUTLOCK;
    exports.SafeHtmlPipe = SafeHtmlPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=html-message.umd.js.map
