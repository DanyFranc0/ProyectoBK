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
import { CargarPostres, LlenarPostres } from '../../models/PostreViewModel';
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
import { UsuariosServiceService } from '../../service/usuario-service.service';
import { LlenarUsuario } from '../../models/UsuariosViewModel';
import { LlenarCargo } from '../../models/CargosViewModel';
import { CargosServiceService } from '../../service/cargo-service.service';
import { DepartamentoServiceService } from '../../service/departamento-service.service';
import { LlenarDepartamento } from '../../models/DepartamentosViewModel';

@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrl: './departamento-detalle.component.scss',
  providers:[MessageService]
})
export class DepartamentoDetalleComponent implements OnInit{

  EditarCombo: LlenarDepartamento;
  form: FormGroup;
  ComboId: string;
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
    private rolService: DepartamentoServiceService,
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
      const prueba  = params['id'];
      console.log("FDSF: " + prueba)
    //  this.obtenerRol(this.ComboId);
    });
    this.form = this.formBuilder.group({
      dept_Codigo: ['', Validators.required],
      dept_Descripcion: ['', Validators.required],
      creacion: ['', Validators.required],
      modifica: ['', Validators.required],
      FechaCreacion: ['', Validators.required],
      FechaModificacion: ['', Validators.required],
    });
  }

  obtenerRol(id: string) {
    this.rolService.obtenerDepaPorId(id).subscribe(
      (data: any) => {
        this.EditarCombo = data;

         this.form.patchValue({
          dept_Codigo: this.EditarCombo.dept_Codigo,
          dept_Descripcion: this.EditarCombo.dept_Descripcion,
            creacion: this.EditarCombo.usua_Creacion,
            modifica: this.EditarCombo.usua_Modifica,
            FechaCreacion: this.EditarCombo.dept_Fecha_Creacion,
            FechaModificacion: this.EditarCombo.dept_Fecha_Modifica
         });
      },
      error => {
        console.log(error);
      }
    );
  }
  Volver(){
    this.router.navigate(['app/Index'])
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
    DepartamentoDetalleComponent
  ]
})
export class  CargoDetalleModule { }
