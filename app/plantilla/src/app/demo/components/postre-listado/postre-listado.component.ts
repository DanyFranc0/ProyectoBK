import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Postre, Postre2 } from '../../models/PostreViewModel';
import { PostreServiceService } from '../../service/postre-service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { Rol } from '../../models/RolesViewModel';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';

import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-postre-listado',
  templateUrl: './postre-listado.component.html',
  styleUrl: './postre-listado.component.scss',
  providers: [MessageService]
})
export class PostreListadoComponent implements OnInit {
  Postre!: Postre[];
  display: boolean = false;
  departamento: Postre[] = [];
  formDepartamento: FormGroup;
  selectedDepartamento: any;
  modalTitle: string = 'Nuevo Registro';
  modalButtonLabel: string = 'Guardar';
  confirmacionVisible: boolean = false;
  departamentoAEliminar: Postre | null = null;
  uploadedFiles: any[] = [];
  
  constructor(
    private service: PostreServiceService, 
    private router: Router,
    private fb: FormBuilder,
    private _postreServices: PostreServiceService,
    private messageService: MessageService,
  )
     {
      this.formDepartamento = this.fb.group({
        // post_Id: ["", Validators.required],
        post_Descripcion: ["", Validators.required],
        post_Precio: ["", Validators.required],
         post_Imagen: ["", Validators.required],
      });
     }

  ngOnInit(): void {
 this.getPostres();
  }

  getPostres() {
    this.service.getPostre().subscribe(
      (data: any) => {
        console.log(data);
        this.Postre = data;
        console.log(this.Postre);
      },
       error => {
        console.log(error);
      }
    );
  }
  displayNuevoDepartamento() {
    this.formDepartamento.reset();
    this.modalTitle = 'Nuevo Registro';
    this.modalButtonLabel = 'Guardar';
    this.display = true;
  }

  // editDepartamento(departamento: any) {
  //   this.selectedDepartamento = departamento;
  //   this.modalTitle = 'Editar Registro';
  //   this.modalButtonLabel = 'Actualizar';
  //   this.formDepartamento.patchValue({
  //     codigo: departamento.dept_Codigo,
  //     departamento: departamento.dept_Descripcion,

  //   });
  //   this.display = true;
  // }

  onUpload(event: any) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
}

  guardarDepartamento() {
    if (this.formDepartamento.invalid) {
      return;
    }
    if (this.modalTitle === 'Nuevo Registro') {
      this.NuevoDepartamento();
    } 
    // else {
    //   this.actualizarDepartamento();
    // }
  }

  NuevoDepartamento() {
    const modelo: Postre2 = {
      post_Id: 0,
      post_Descripcion: this.formDepartamento.value.post_Descripcion,
      post_Precio: this.formDepartamento.value.post_Precio,
      post_Imagen: this.formDepartamento.value.post_Imagen,
      post_Usua_Creacion: 1,
    }
    this._postreServices.agregar(modelo).subscribe({
      next: (data) => {  
        this.getPostres();
        this.display = false;
        this.messageService.add({severity:'success', summary:'Éxito', detail:'¡Departamento creado correctamente!'});
      },
      error: (e) => {
        console.log(e);
        this.messageService.add({severity:'error', summary:'Error', detail:'Departamento ya existente.'});
      }
    })
  }

  // actualizarDepartamento() {
  //   const idDepartamento = this.selectedDepartamento.dept_Codigo;
  //   const modelo: Departamento = {
  //     dept_Codigo: this.formDepartamento.value.codigo,
  //     dept_Descripcion: this.formDepartamento.value.departamento
  //   }
  //   this._departamentoServicio.actualizar(idDepartamento, modelo).subscribe({
  //     next: (data) => {
  //       this.getPostres();
  //       this.display = false;
  //       console.log(idDepartamento);
  //       this.messageService.add({severity:'success', summary:'Éxito', detail:'¡Departamento editado correctamente!'});
  //     },
  //     error: (e) => {
  //       console.log(e);
  //       this.messageService.add({severity:'error', summary:'Error', detail:'Departamento ya existente.'});
  //     }
  //   })
  // }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    ReactiveFormsModule,
    DropdownModule,
    ProgressBarModule,
    ImageModule,
    ToastModule,
    SliderModule,
    GalleriaModule,
    RatingModule,
    CarouselModule,
    FileUploadModule
  ],
  declarations: [PostreListadoComponent]
})
export class PostresListadoModule {}
