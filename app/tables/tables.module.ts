import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TableEditService } from "./shared/table-edit.service";
import { TableService } from "./shared/table.service";
import { TableDetailComponent } from "./table-detail/table-detail.component";

import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { TableListComponent } from "./table-list.component";
import { TablesRoutingModule } from "./tables-routing.module";

@NgModule({
    imports: [
        NativeScriptModule,
        TablesRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        TableListComponent, TableDetailComponent
    ],
    providers: [
        TableService, TableEditService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TablesModule { }
