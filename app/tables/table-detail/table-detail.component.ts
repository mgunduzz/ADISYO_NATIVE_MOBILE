import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { RadListView } from "nativescript-pro-ui/listview";
import { RadListViewComponent } from "nativescript-pro-ui/listview/angular";
import "rxjs/add/operator/switchMap";
import { Table } from "./../shared/table.model";
import { TableService } from "./../shared/table.service";

/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
@Component({
    selector: "TableDetail",
    moduleId: module.id,
    templateUrl: "./table-detail.component.html",
    styleUrls: ["./table-detail.component.css"],
    providers: [RadListViewComponent]
})
export class TableDetailComponent implements OnInit {

    private _table: Table = new Table();
    private _categories: Array<string> = new Array();

    constructor(
        private _pageRoute: PageRoute,
        private _tableService: TableService,
        private _routerExtensions: RouterExtensions
    ) {

    }

    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }

    getCurrentTableById(id: number) {
        this._table = this._tableService.getTableById(id);
    }

    ngOnInit(): void {
        this._categories.push("Dürümler");
        this._categories.push("Şerbetli Tatlı Çeşitleri");
        this._categories.push("Hızlı Servisler");
        this._categories.push("İskenderler");
        this._categories.push("Döner");
        this._categories.push("Fırında Pişmiş Etler");

        this._pageRoute.activatedRoute
            .switchMap((activatedRoute) => activatedRoute.params)
            .forEach((params) => {
                const tableId = params.id;

                this.getCurrentTableById(+tableId);
            });
    }

}
