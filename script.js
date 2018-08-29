(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function debounceFn(miliseconds, timeoutPropertyName) {
        if (miliseconds === void 0) { miliseconds = 100; }
        if (timeoutPropertyName === void 0) { timeoutPropertyName = 'timeoutFn'; }
        return function (target, propertyKey, descriptor) {
            Object.defineProperty(target, timeoutPropertyName, {
                value: 0,
                writable: true
            });
            var originalMethod = descriptor.value;
            descriptor.value = function () {
                var _this = this;
                if (this[timeoutPropertyName])
                    clearTimeout(this[timeoutPropertyName]);
                var args = arguments;
                this[timeoutPropertyName] = setTimeout(function () {
                    originalMethod.apply(_this, args);
                }, miliseconds);
            };
            return descriptor;
        };
    }

    var ExampleClass = /** @class */ (function () {
        function ExampleClass() {
            this.divRefCount = 0;
            this.divDebounceRefCount = 0;
            this.divRef = document.querySelector('.without-debounce');
            this.divDebounceRef = document.querySelector('.with-debounce');
            this.divDebounceRef.textContent = "Called: " + this.divDebounceRefCount;
            this.divRef.textContent = "Called: " + this.divRefCount;
            window.addEventListener('scroll', this.onDebounceScrollFn.bind(this));
            window.addEventListener('scroll', this.onScrollFn.bind(this));
        }
        ExampleClass.prototype.onDebounceScrollFn = function (e) {
            this.divDebounceRefCount += 1;
            this.divDebounceRef.textContent = "Called: " + this.divDebounceRefCount;
        };
        ExampleClass.prototype.onScrollFn = function (e) {
            this.divRefCount += 1;
            this.divRef.textContent = "Called: " + this.divRefCount;
        };
        __decorate([
            debounceFn(250, 'debounceResizeProperty'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Event]),
            __metadata("design:returntype", void 0)
        ], ExampleClass.prototype, "onDebounceScrollFn", null);
        return ExampleClass;
    }());
    new ExampleClass;

})));
//# sourceMappingURL=index.umd.js.map
