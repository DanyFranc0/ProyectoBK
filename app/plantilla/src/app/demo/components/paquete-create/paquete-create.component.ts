import { Component, OnInit, NgModule,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
import { MenuItem, SelectItem } from 'primeng/api';
import {PromocionServiceService} from 'src/app/demo/service/promocion-service.service'; 
import { Pantallas } from 'src/app/demo/models/PantallaViewMode';
import { Rol } from 'src/app/demo/models/RolesViewModel';
import { Respuesta } from 'src/app/demo/models/ServiceResult';
import { MessageService } from 'primeng/api';
import { Promociones } from '../../models/PromocionViewModel';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { FileUploadModule } from 'primeng/fileupload';
import { PaquetesServiceService } from '../../service/paquetes-service.service';
import { AlimentosServiceService } from '../../service/alimento-service.service';
import { BebidasServiceService } from '../../service/bebida-service.service';
import { PostreServiceService } from '../../service/postre-service.service';
import { ComplementoServiceService } from '../../service/complemento-service.service';
import { Bebida, Bebida3, Complemento, Complemento2, Postre, Postre2 } from '../../models/BebidasViewModel';
import { Alimento, Alimento3 } from '../../models/AlimentosViewModel';
import { PaquetesEnviar } from '../../models/PaquetesViewModel';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CountryService } from '../../service/country.service';
import { DataView } from 'primeng/dataview';

@Component({
  selector: 'app-paquete-create',
  templateUrl: './paquete-create.component.html',
  styleUrl: './paquete-create.component.scss',
  providers: [MessageService]
})
export class PaqueteCreateComponent implements OnInit{
  form: FormGroup;
  products!: Product[];
    activeTab: string = 'Alimentos';
    mostrar: string = ''; 
    alimentosActivo: boolean = true;
    bebidasActivo: boolean = false;
    PromId: number;
    Usua_Id: number;
    alimentos: Alimento3[];
    postres: Postre2[];
    bebidas: Bebida3[];
    complementos: Complemento2[];
    routeItems: MenuItem[] = [];
    selectedImageURL: string | null = null;
    imageSelected: boolean = false;
    showFileUpload: boolean = true;
  prueba: string = "";


  sortOptions: SelectItem[] = [];

  sortOptionsB: SelectItem[] = [];
  sortOptionsC: SelectItem[] = [];
  sortOptionsP: SelectItem[] = [];
  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

    constructor(private productService: ProductService,
      private router: Router,
      private fb: FormBuilder,
      private alimentoService: AlimentosServiceService,
      private bebidaService: BebidasServiceService,
      private postreService: PostreServiceService,
      private complementoService: ComplementoServiceService,
      private messageService: MessageService,
      private countryService: CountryService,
       private rolService: PaquetesServiceService) {
        this.form = this.fb.group({
          paqe_Descripcion: ['', Validators.required],
          paqe_Precio: ['', Validators.required],
        });
        }

  ngOnInit(): void {

        this.sortOptions = [
            { label: 'Precio mas alto', value: '!alim_Precio' },
            { label: 'Precio mas bajo', value: 'alim_Precio' }
        ];

        this.sortOptionsB = [
          { label: 'Precio mas alto', value: '!bebi_Precio' },
          { label: 'Precio mas bajo', value: 'bebi_Precio' }
      ];

      this.sortOptionsC = [
        { label: 'Precio mas alto', value: '!comp_Precio' },
        { label: 'Precio mas bajo', value: 'comp_Precio' }
    ];

    this.sortOptionsP = [
      { label: 'Precio mas alto', value: '!post_Precio' },
      { label: 'Precio mas bajo', value: 'post_Precio' }
  ];

   this.cargarAlimentos();
   this.cargarBebidas();
   this.cargarComplementos();
   this.cargarPostres();
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
}


  onTabClick(tab: string) {
    this.activeTab = tab;
  }

  cargarComplementos(){
    this.complementoService.getComplemento().subscribe(
      (data: any[]) => {
        console.log(data)
        this.complementos = data;
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
        this.postres = data
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
        this.bebidas = data
      },
      error => {
        console.log(error);
      }
    );
  }
  cargarAlimentos(){
    this.alimentoService.getAlimento().subscribe(
      (data: any[]) => {
        this.alimentos = data
      },
      error => {
        console.log(error);
      }
    );
  }


  onUpload(event) {
    const file: File = event.files[0];
    this.selectedImageURL = URL.createObjectURL(file);
    if (file) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const uniqueFileName = uniqueSuffix + '-' + file.name;
      this.prueba = uniqueFileName;
      const formData: FormData = new FormData();

      formData.append('file', file, uniqueFileName);
      this.rolService.EnviarImagen(formData).subscribe(
        response => {
          console.log('Upload successful', response);
          if (response.message === "Exito") {
            // this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Imagen Subida', life: 3000 });
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Formato de imagen incorrecto', life: 3000 });
          }
        },
        error => {
          console.error('Error uploading image', error);
        }
      );
    }
  }

  guardar() {
    if (this.form.valid) {
        const paqe_Descripcion = this.form.value.paqe_Descripcion;
        const paqe_Precio = this.form.value.paqe_Precio;
        const Usua_Id = 1
        const paqe_Imagen = this.prueba;
        const nuevoRol: PaquetesEnviar = {
            paqe_Id: 0,
            paqe_Descripcion: paqe_Descripcion,
            paqe_Imagen: paqe_Imagen,
            paqe_Precio: paqe_Precio,
            Usua_Id: Usua_Id,
        };
  
        this.rolService.agregar(nuevoRol).subscribe(
            (respuesta: Respuesta) => {
                if (respuesta.success) {
                    // Guardar el ID del rol creado
                    this.PromId = parseInt(respuesta.message);
                  
                    this.mostrar = 'Exito';
                  
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: '¡Paquete registrada correctamente!' });
                // this.router.navigate(['app/IndexPaquetes']);
                
                } else {
                    console.error('Error al crear el rol:', respuesta.message);
                }
            },
            error => {
                console.error('Error al crear el rol:', error);
            }
        );
    } else {
        console.log("Ingrese los campos")
      
    }
  }

  Volver(){
    this.router.navigate(['app/IndexPaquetes'])
  }

}




@NgModule({
  imports: [
    OrderListModule,
    PickListModule,
    CommonModule,
    ReactiveFormsModule,
    ImageModule,
    TableModule,
    CarouselModule,
    ButtonModule,
    FileUploadModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    FormsModule,
    MultiSelectModule,
    AutoCompleteModule,
    DropdownModule,
    ProgressBarModule,
    DialogModule,
    ToastModule,
    SliderModule,
    TabMenuModule,
    GalleriaModule,
    RatingModule,
    MatButtonModule,
    DataViewModule
  ],
  declarations: [
    PaqueteCreateComponent
  ]
})
export class PromocionCreateModule { }