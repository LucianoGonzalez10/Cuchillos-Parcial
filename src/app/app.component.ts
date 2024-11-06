import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListCuchillosComponent } from "./components/list-cuchillos/list-cuchillos.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListCuchillosComponent, CommonModule, NavBarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionCuchillos';
}
