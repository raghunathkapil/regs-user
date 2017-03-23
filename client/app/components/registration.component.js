"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_services_1 = require("../services/app.services");
var RegistrationComponent = (function () {
    function RegistrationComponent(registrationService) {
        this.registrationService = registrationService;
    }
    RegistrationComponent.prototype.addUser = function () {
        var userData = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNo: this.phoneNo,
            address: this.address,
            city: this.city,
        };
        this.registrationService.addUser(userData)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'user-registration',
        moduleId: module.id,
        templateUrl: '../../client/views/userRegistration.html',
        providers: [app_services_1.RegistrationService]
    }),
    __metadata("design:paramtypes", [app_services_1.RegistrationService])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map