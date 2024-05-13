import { Component, OnInit, NgModule,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { SelectItem } from 'primeng/api';
import {ComboPersonalServiceService} from 'src/app/demo/service/combopersonal-service.service'; 
import { Pantallas } from 'src/app/demo/models/PantallaViewMode';
import { Rol } from 'src/app/demo/models/RolesViewModel';
import { Respuesta } from 'src/app/demo/models/ServiceResult';
import { MessageService } from 'primeng/api';
import { ComboPEnviar, Llenar } from '../../models/ComboPersonalViewModel';
import {AlimentosServiceService} from 'src/app/demo/service/alimento-service.service'; 
import { CargarAlimentos } from '../../models/AlimentosViewModel';
import { CargarBebidas } from '../../models/BebidasViewModel';
import { CargarPostres } from '../../models/PostreViewModel';
import { CargarComplementos } from '../../models/ComplementoViewModel';
import { BebidasServiceService } from '../../service/bebida-service.service';
import { PostreServiceService } from '../../service/postre-service.service';
import { ComplementoServiceService } from '../../service/complemento-service.service';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { FileUploadModule } from 'primeng/fileupload';
import { Fill } from '../../models/ComboPersonalViewModel';
import { dA } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-combo-detalle',
  templateUrl: './combo-detalle.component.html',
  styleUrl: './combo-detalle.component.scss',
  providers: [MessageService]
})
export class ComboDetalleComponent implements OnInit{
  EditarCombo: Llenar;
  form: FormGroup;
  ComboId: number;
  postres: SelectItem[] = [];
  invalid: boolean = false;
  alimentos: SelectItem[] = [];
  bebidas: SelectItem[] = [];
  complementos: SelectItem[] = [];
  Imagen: string;
  staticData = [{}];
  selectedImageURL: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private rolService: ComboPersonalServiceService,
    private formBuilder: FormBuilder,
    private postreService: PostreServiceService,
    private alimentoService: AlimentosServiceService,
    private bebidaService: BebidasServiceService,
    private complementoService: ComplementoServiceService,
    private messageService: MessageService,
    private router: Router,
  ) { }
  

ngOnInit(): void {
   this.route.params.subscribe(params => {
      this.ComboId = +params['id'];
      this.obtenerRol(this.ComboId);

    });
    this.form = this.formBuilder.group({
      nombreRol: ['', Validators.required],
      postre: ['',Validators.required],
      Alim_Id: ['', Validators.required],
      Bebi_Id: ['', Validators.required],
      Comb_Precio: ['', Validators.required],
      Comp_Id: ['', Validators.required],
      Post_Id: ['', Validators.required],
      creacion: ['', Validators.required],
      modifica: ['', Validators.required],
      FechaCreacion: ['', Validators.required],
      FechaModificacion: ['', Validators.required],
    });
}
cargarComplementos(){
  this.complementoService.getComplemento().subscribe(
    (data: any[]) => {
      console.log(data)
      this.complementos = data.map(item => ({ label: item.comp_Descripcion, value: item.comp_Id }));
    },
    error => {
      console.log(error);
    }
  );
}
cargarPostres(){
  this.postreService.getPostre().subscribe(
    (data: any[]) => {
      console.log(data)
      this.postres = data.map(item => ({ label: item.post_Descripcion, value: item.post_id }));
    },
    error => {
      console.log(error);
    }
  );
}
cargarBebidas(){
  this.bebidaService.getBebidas().subscribe(
    (data: any[]) => {
      console.log(data)
      this.bebidas = data.map(item => ({ label: item.bebi_Descripcion, value: item.bebi_Id }));
    },
    error => {
      console.log(error);
    }
  );
}
cargarAlimentos(){
  this.alimentoService.getAlimento().subscribe(
    (data: any[]) => {
      this.alimentos = data.map(item => ({ label: item.alim_Descripcion, value: item.alim_Id }));
    },
    error => {
      console.log(error);
    }
  );
}

obtenerRol(id: number) {
  this.rolService.obtenerComboPorId(id).subscribe(
    (data: any) => {
      this.EditarCombo = data;

      this.Imagen = this.EditarCombo.comb_Imagen;
      this.selectedImageURL = "https://localhost:44332/uploads/" + this.Imagen;
      
      this.cargarPostres();
      this.cargarAlimentos();
      this.cargarBebidas();
      this.cargarComplementos();
       this.form.patchValue({
         nombreRol: this.EditarCombo.comb_Descripcion,
          postre: this.EditarCombo.post_Descripcion,
          Alim_Id: this.EditarCombo.alim_Descripcion,
          Bebi_Id: this.EditarCombo.bebi_Descripcion,
          Comb_Precio: this.EditarCombo.comb_Precio,
          Comp_Id: this.EditarCombo.comp_Descripcion,
          Post_Id: this.EditarCombo.post_Descripcion,
          creacion: this.EditarCombo.usua_Creacion,
          modifica: this.EditarCombo.usua_Modifica,
          FechaCreacion: this.EditarCombo.comb_Fecha_Creacion,
          FechaModificacion: this.EditarCombo.comb_Fecha_Modificacion
       });
    },
    error => {
      console.log(error);
    }
  );
}
Volver(){
  this.router.navigate(['app/IndexComboPersonal'])
}
}


@NgModule({
  imports: [
    FileUploadModule,
    ImageModule,
    GalleriaModule,
    OrderListModule,
    PickListModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    CarouselModule,
    RippleModule,
    FormsModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    DialogModule,
    ToastModule,
    SliderModule,
    RatingModule,
    MatButtonModule,
    DataViewModule
  ],
  declarations: [
    ComboDetalleComponent
  ]
})
export class  ComboDetalleModule { }