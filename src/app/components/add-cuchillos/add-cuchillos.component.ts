import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cuchillo } from '../../interfaces/cuchillo.interface';
import { CuchilloService } from '../../service/cuchillo.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-add-cuchillos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavBarComponent],
  templateUrl: './add-cuchillos.component.html',
  styleUrl: './add-cuchillos.component.css'
})

export class AddCuchillosComponent {
  @Output()
  emitirCuchillo : EventEmitter<Cuchillo> = new EventEmitter();

  fb = inject(FormBuilder);
  cuchilloService = inject(CuchilloService);

  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    tipo: ['', [Validators.required]],
    tipoDeFilo: ['', [Validators.required]],
    longitud: [0, [Validators.required]],
    materialMango: ['', [Validators.required]],
    materialHoja: ['', [Validators.required]],
    hoja: ['', [Validators.required]],
    longitudTotal: [0, [Validators.required]]
  })

  agregarCuchillo(){
    if(this.formulario.invalid) console.log("Error en el formulario") ;

    const cuchillo = this.formulario.getRawValue();
    this.agregarCuchilloDb(cuchillo);
    this.emitirCuchillo.emit(cuchillo);
  }

  agregarCuchilloDb(cuchillo : Cuchillo){
    this.cuchilloService.postCuchillo(cuchillo).subscribe({
      next: (cuchillo : Cuchillo) =>{
        console.log(cuchillo);
        alert('Cuchillo Guardado...')
      },
      error: (e: Error) =>{
        console.log(e.message);
      }
    })
  }
}
