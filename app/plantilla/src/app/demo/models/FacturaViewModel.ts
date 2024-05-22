import { DecimalPipe } from "@angular/common";

export class Factura {
     Sucu_Id?:number;
     Sucu_Descripcion?:string; 
     Empl_Id ?:number;
     Empl_Nombre ?:string;
     Fact_Fecha ?:Date;
     Fact_Total ?:DecimalPipe;
     Clie_Id?:number;
     Clie_Nombre?:String;
     Clie_Identidad?:string;
     usua_Usuario?: string;
}

export class ReporteEmpleados{
    empleado: string;
    producto: string;
    tipo: string;
    cantidad: number;
    subtotal: string
}

export class ReporteCompleto{
    empleado: string;
    sucursal: string;
    producto: string;
    tipo: string;
    cantidad: number;
    subtotal: string
}
export class ReporteProductos{
    producto: string;
    tipo: string;
    cantidad: number;
    subtotal: string
}

export class ReporteSucursal{
    sucursal: string;
    producto: string;
    tipo: string;
    cantidad: number;
    subtotal: string
}

export class FacturaDetalle {
    fact_Fecha?:Date;
     faDe_Id?:number;
     clie_Nombre?:string;
     FaDe_Ident?:number;
     FaDe_Cantidad?:number;
     FaDe_Subtotal?:number;
     FaDe_ProdId?:number;
     fact_Id?:number;
     producto?:string;
     precio?:string;
     cantidad?:string; 
     categoria?:string;
     total?:string;
 }
 
 export class FacturaDetalleEnviar {
    Fact_Id?:number;
    FaDe_Ident?:number;
    FaDe_Cantidad?:number;
    FaDe_Subtotal?:number;
    FaDe_ProdId:number;
    Prod_Producto?:string;
    Fact_Fecha ?:Date;
    Fact_Total ?:DecimalPipe;
    Clie_Id?:number;
    Clie_Nombre?:String;
    Clie_Identidad?:string;
 }
 

 export class FacturaEnviar {
     Fact_Id:number;
     FaDe_Ident?:number;
     Sucu_Id?:number;
     Empl_Id ?:number;
     Empl_Nombre ?:string;
     Fact_Fecha ?:Date;
     Fact_Total ?:DecimalPipe;
     Clie_Nombre?:String;
     Clie_Identidad?:string;
     FaDe_ProdId:number;
     Prod_Nombre?:String;
     FaDe_Cantidad?:number; 
 }
 
export class Complemento{
Comp_Id?:number;
Comp_Descripcion?:string;
text?:string;
value?:number;
image?:string;
precio?:DecimalPipe;
}

export class FacturaEliminar{
    FaDe_Ident?:string;
    Prod_Nombre?:String;
    Fact_Id:number;
    }

export class Postre{
Post_Id?:number;
Post_Descripcion?:string;
text?:string;
value?:number;
image?:string;
precio?:DecimalPipe;

}


export class Bebida{
    Bebi_Id?:number;
    Bebi_Descripcion?:string;     
    text?:string;
    value?:number;
    image?:string;
    precio?:DecimalPipe;

}


export class Combo{
    Comb_Id?:number;
    Comb_Descripcion?:string;
    text?:string;
    value?:number;
    image?:string;
    precio?:DecimalPipe;

}


export class Paquete{
   Paqe_Id?:number;
   Paqe_Descripcion?:string;
   text?:string;
   value?:number;
   image?:string;
   precio?:DecimalPipe;

}
