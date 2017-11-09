import { Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

import {
    clear,
    getBoolean,
    getNumber,
    getString,
    hasKey,
    remove,
    setBoolean,
    setNumber,
    setString
} from "application-settings";
import { Config } from "../../shared/config";
import { User } from "./user.model";

const editableProperties = [
    "doors",
    "imageUrl",
    "luggage",
    "name",
    "price",
    "seats",
    "transmission",
    "class"
];

/* ***********************************************************
* This is the master detail data service. It handles all the data operations
* of retrieving and updating the data. In this case, it is connected to Firebase and
* is using the {N} Firebase plugin. Learn more about it here:
* https://github.com/EddyVerbruggen/nativescript-plugin-firebase
* The {N} Firebase plugin needs some initialization steps before the app starts.
* Check out how it is imported in the main.ts file and the actual script in /shared/firebase.common.ts file.
*************************************************************/
@Injectable()
export class LoginService {
    isUserLogin: boolean = false;

    constructor(private _ngZone: NgZone, private _router: Router) {

    }
    doLogin(): any {
        this._router.navigate(["/tables"]);
    }

    checkUserLogin(): boolean {
        const email = getString("email");
        const passWord = getString("password");

        if (email === "asd@asd.com" && passWord === "asd123") {
            return true;
        }

        return false;
    }
}
