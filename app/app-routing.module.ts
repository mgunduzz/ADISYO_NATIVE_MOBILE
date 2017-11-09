import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "cars", loadChildren: "./cars/cars.module#CarsModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "tables", loadChildren: "./tables/tables.module#TablesModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
