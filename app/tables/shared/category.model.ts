import { ProductModel } from "./product.model";
export class CategoryModel {
    isActive: boolean = false;
    products: Array<ProductModel>;
    name: string;
    restaurantId: number;
    sortNo: number;
    isBeverage?: any;
    userId: number;
    customerId: number;
    id: number;
    rowVersion: string;
    guid: string;
    insertDate: string;
    updateDate: string;
    insertUserId: number;
    updateUserId: number;
    offsetMinute: number;
    objectState: number;
    isError: boolean;
    errorMessage?: any;
    errorTitle?: any;
}
