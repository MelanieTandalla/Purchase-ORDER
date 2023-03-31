export interface Invoice {
    id:                number;
    company?:           null;
    created?:           Date;
    updated?:           Date;
    createdby?:         number;
    updatedby?:         number;
    active?:            boolean;
    archived?:          boolean;
    module?:            null;
    documentNumber:    string;
    date:              string;
    supplier?:          Supplier;
    purchaseOrderLine?: Supplier[];
}

export interface Supplier {
    id:        number;
    company?:   null;
    created?:   Date;
    updated?:   Date;
    createdby?: number;
    updatedby?: number;
    active?:    boolean;
    archived?:  boolean;
    module?:    null;
    product:  Supplier;
    quantity: number;
    price:    number;
    name?:     string;
    value?:    string;
    phone?:    string;
}