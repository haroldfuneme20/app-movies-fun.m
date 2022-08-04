import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   search: string = ' ';
   controlForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    ) {
      this.cargarForm();
    }

  ngOnInit(): void {}

  cargarInbfo(event: Event) {
    console.log(this.controlForm.value.search);
    this.router.navigate([`/buscar/${this.controlForm.value.search}`]);
  }

  cargarForm() {
    this.controlForm = this.fb.group({
      search: new FormControl('', []),
    });
  }

}
