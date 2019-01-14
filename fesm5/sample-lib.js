import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SampleLibService = /** @class */ (function () {
    function SampleLibService() {
    }
    SampleLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SampleLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ SampleLibService.ngInjectableDef = defineInjectable({ factory: function SampleLibService_Factory() { return new SampleLibService(); }, token: SampleLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { SampleLibService, SampleLibComponent, SampleLibModule };

//# sourceMappingURL=sample-lib.js.map