import { Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Config } from "../../shared/config";
import { Table } from "./table.model";

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
export class TableService {
    private static cloneUpdateModel(table: Table): object {
        return editableProperties.reduce((a, e) => (a[e] = table[e], a), {});
    }

    private _tables: Array<Table> = [];

    constructor(private _ngZone: NgZone) {
        this._tables.push({ id: 0, name: "Masa 1", status: 0 });
        this._tables.push({ id: 1, name: "Masa 2", status: 0 });
        this._tables.push({ id: 2, name: "Masa 3", status: 2 });
        this._tables.push({ id: 3, name: "Masa 4", status: 0 });
        this._tables.push({ id: 4, name: "Masa 5", status: 1 });
        this._tables.push({ id: 5, name: "Masa 6", status: 1 });
        this._tables.push({ id: 6, name: "Masa 7", status: 0 });
        this._tables.push({ id: 7, name: "Masa 8", status: 2 });
        this._tables.push({ id: 8, name: "Masa 9", status: 0 });
        this._tables.push({ id: 9, name: "Masa 10", status: 2 });
        this._tables.push({ id: 10, name: "Masa 11", status: 1 });
        this._tables.push({ id: 11, name: "Masa 12", status: 0 });
        this._tables.push({ id: 12, name: "Masa 13", status: 2 });
        this._tables.push({ id: 13, name: "Masa 14", status: 0 });
        this._tables.push({ id: 14, name: "Masa 15", status: 2 });
        this._tables.push({ id: 15, name: "Masa 16", status: 2 });
    }

    getTableById(id: number): Table {
        const foundedTable: Table = this._tables.filter((table) => {
            return table.id === id;
        })[0];

        if (!foundedTable) {
            return;
        }

        return foundedTable;
    }

    load(): Observable<Array<Table>> {
        return new Observable((observer: any) => {
            observer.next(this._tables);
        });
    }
}
