import { Injectable } from "@angular/core";

import { Table } from "./table.model";
import { TableService } from "./table.service";

@Injectable()
export class TableEditService {
    private _editModel: Table;

    constructor(private _tableService: TableService) {}
}
