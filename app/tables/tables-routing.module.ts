import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TableDetailComponent } from "./table-detail/table-detail.component";

import { TableListComponent } from "./table-list.component";

const routes: Routes = [
    { path: "", component: TableListComponent },
    { path: "table-detail/:id", component: TableDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TablesRoutingModule { }
