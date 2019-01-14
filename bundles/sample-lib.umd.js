(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sample-lib', ['exports', '@angular/core'], factory) :
    (factory((global['sample-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SampleLibService = /** @class */ (function () {
        function SampleLibService() {
        }
        SampleLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SampleLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ SampleLibService.ngInjectableDef = i0.defineInjectable({ factory: function SampleLibService_Factory() { return new SampleLibService(); }, token: SampleLibService, providedIn: "root" });
        return SampleLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SampleLibComponent = /** @class */ (function () {
        function SampleLibComponent() {
        }
        /**
         * @return {?}
         */
        SampleLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        SampleLibComponent.prototype.getText = /**
         * @return {?}
         */
            function () {
                return 'Just some text v1.0.1';
            };
        SampleLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-sample-lib',
                        template: "\n    <p>\n      sample-lib works updated to 1.0.1!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SampleLibComponent.ctorParameters = function () { return []; };
        return SampleLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SampleLibModule = /** @class */ (function () {
        function SampleLibModule() {
        }
        SampleLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SampleLibComponent],
                        imports: [],
                        exports: [SampleLibComponent]
                    },] }
        ];
        return SampleLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SampleLibService = SampleLibService;
    exports.SampleLibComponent = SampleLibComponent;
    exports.SampleLibModule = SampleLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sample-lib.umd.js.map