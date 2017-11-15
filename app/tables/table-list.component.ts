import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Area } from "./shared/area.model";
import { Table } from "./shared/table.model";
import { TableService } from "./shared/table.service";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "tables", loadChildren: "./tables/tables.module#TablesModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Tables",
    moduleId: module.id,
    templateUrl: "./table-list.component.html",
    styleUrls: ["./table-list.component.css"]
})
export class TableListComponent implements OnInit {
    tables: Array<Table> = new Array();
    areas: Array<Area> = new Array();

    constructor(
        private _routerExtensions: RouterExtensions,
        private _tableService: TableService
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    onTableItemTap(table: Table): void {

        this._routerExtensions.navigate(["/tables/table-detail", table.id],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }

    ngOnInit(): void {
        this._tableService.loadAreas().subscribe((areas) => {
            this.areas = areas;

            setTimeout(() => {
                this.onTableItemTap(this.areas[0].tables[0]);
            }, 100);
        });
    }
}
