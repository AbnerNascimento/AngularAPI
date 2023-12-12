import { Component, OnInit } from '@angular/core';
import { DeputadoService } from '../../deputado.service';
import { Deputado } from '../../Deputado';

@Component({
  selector: 'app-exibe-deputado',
  templateUrl: './exibe-deputado.component.html',
  styleUrls: ['./exibe-deputado.component.css']
})
export class ExibeDeputadoComponent implements OnInit {
  deputados: Deputado[] = []
  constructor(ds: DeputadoService) {
    ds.getTodos().subscribe(response => {
      this.deputados = response.dados
    })
  }
  ngOnInit(): void { }
}
