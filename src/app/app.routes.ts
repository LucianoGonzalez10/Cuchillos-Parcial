import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListCuchillosComponent } from './components/list-cuchillos/list-cuchillos.component';
import { AddCuchillosComponent } from './components/add-cuchillos/add-cuchillos.component';

export const routes: Routes = [
    {
    path: "mis-cuchillos",
    component: ListCuchillosComponent,
    },
    
    {
    path:"agregar-cuchillo",
    component: AddCuchillosComponent,
    }
];
