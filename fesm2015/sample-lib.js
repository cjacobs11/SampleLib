import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SampleLibService {
    constructor() { }
}
SampleLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SampleLibService.ctorParameters = () => [];
/** @nocollapse */ SampleLibService.ngInjectableDef = defineInjectable({ factory: function SampleLibService_Factory() { return new SampleLibService(); }, token: SampleLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SampleLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getText() {
        return 'Just some text';
    }
}
SampleLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sample-lib',
                template: `
    <p>
      sample-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
SampleLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SampleLibModule {
}
SampleLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SampleLibComponent],
                imports: [],
                exports: [SampleLibComponent]
            },] }
];

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