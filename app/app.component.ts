import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { LoginService } from "./login/shared/login.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor(
        private _routerExtensions: RouterExtensions,
        private _loginService: LoginService
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit() {
        const isLogin: boolean = this._loginService.checkUserLogin();
        if (isLogin) {
            this._loginService.doLogin();
        }
    }
}
