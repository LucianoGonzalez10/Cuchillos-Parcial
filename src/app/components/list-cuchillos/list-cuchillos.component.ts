import { Component, inject, OnInit } from '@angular/core';
import { Cuchillo } from '../../interfaces/cuchillo.interface';
import { CuchilloService } from '../../service/cuchillo.service';
import { AddCuchillosComponent } from "../add-cuchillos/add-cuchillos.component";
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-list-cuchillos',
  standalone: true,
  imports: [AddCuchillosComponent, NavBarComponent],
  templateUrl: './list-cuchillos.component.html',
  styleUrl: './list-cuchillos.component.css'
})
export class ListCuchillosComponent implements OnInit{

  ngOnInit() : void{
    this.listarCuchillos();
  }

  listaCuchillos : Cuchillo[] = [];
  cuchilloService = inject(CuchilloService);

  agregarCuchillo(cuchillo : Cuchillo){
    this.listaCuchillos.push(cuchillo);
  }

  listarCuchillos(){
    this.cuchilloService.getCuchillos().subscribe({
      next: (cuchillo : Cuchillo[]) => {
        this.listaCuchillos = cuchillo;
      },
      error: (e : Error) => {
        console.log(e.message);
      }
    })
  }

  eliminarCuchillo(id : number | undefined){
    this.cuchilloService.deleteCuchillo(id).subscribe({
      next: () => {
        this.listarCuchillos();
      },
      error: (e : Error) =>{
        console.log(e.message);
      }
    })
  }
}
