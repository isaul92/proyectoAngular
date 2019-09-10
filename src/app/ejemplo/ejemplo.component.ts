import { Component, OnInit } from '@angular/core';
import {Route,ActivatedRoute,Params, Router} from '@angular/router';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  constructor() {     alert("cargafo");
}

  ngOnInit() {

  }

}
