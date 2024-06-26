import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Complemento } from '../../models/ComplementoViewModel';
import { ComplementoServiceService } from '../../service/complemento-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-complemento-listado',
  templateUrl: './complemento-listado.component.html',
  styleUrl: './complemento-listado.component.scss'
})
export class ComplementoListadoComponent implements OnInit {
  Complemento!: Complemento[];

  constructor(private service: ComplementoServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getComplemento().subscribe(
      (data: any) => {
        console.log(data);
        this.Complemento = data;
        console.log(this.Complemento);
      },
       error => {
        console.log(error);
      }
    );
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    SliderModule,
    RatingModule
  ],
  declarations: [ComplementoListadoComponent]
})
export class ComplementosListadoModule {}
