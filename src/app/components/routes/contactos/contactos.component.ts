import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
