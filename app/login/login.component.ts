import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
import { Toasty } from "nativescript-toasty";
import { LoginService } from "./shared/login.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    private _email: string;
    private _password: string;

    constructor(
        private _router: Router,
        private _loginService: LoginService
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        this._email = "asd@asd.com";
        this._password = "asd123";

        const isLogin: boolean = this._loginService.checkUserLogin();
        if (isLogin) {
            this._loginService.doLogin();
        }
    }

    onSigninButtonTap(): void {
        const email = this._email;
        const password = this._password;

        setString("email", email);
        setString("password", password);

        if (email === "asd@asd.com" && password === "asd123") {
            this._router.navigate(["/tables"]);
        } else {
            const toast = new Toasty("Kullanıcı adı veya şifre hatalı");
            toast.show();
        }
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }
}
