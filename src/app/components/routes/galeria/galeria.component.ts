import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  

}
