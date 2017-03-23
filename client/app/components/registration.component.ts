import { Component } from '@angular/core';
import { RegistrationService } from '../services/app.services';

@Component({
    selector    : 'user-registration',
    moduleId    : module.id,
    templateUrl : '../../client/views/userRegistration.html',
    providers   : [RegistrationService]
})


export class RegistrationComponent {
    firstName   : string;
    lastName    : string;
    email       : string;
    phoneNo     : string;
    address     : string;
    city        : string;     

    constructor(private registrationService: RegistrationService) {}

    addUser(){
        var userData = {
                firstName   : this.firstName,
                lastName    : this.lastName,
                email       : this.email,
                phoneNo     : this.phoneNo,
                address     : this.address,
                city        : this.city,     
        }
        this.registrationService.addUser(userData)
            .subscribe(data => {
                console.log(data)
            })
    }
}