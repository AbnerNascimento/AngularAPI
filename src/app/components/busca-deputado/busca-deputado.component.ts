import { Component } from '@angular/core';
import { DeputadoService } from '../../deputado.service';
import { Deputado } from '../../Deputado';

@Component({
  selector: 'app-busca-deputado',
  templateUrl: './busca-deputado.component.html',
  styleUrls: ['./busca-deputado.component.css']
})
export class BuscaDeputadoComponent {
  deputados: Deputado[] = []
  constructor(public dep: DeputadoService) { }

  pesquisa(nome: string, partido: string) {
    if (nome != '' && partido == '') {
      this.dep.getNome(nome).subscribe(response => {
        this.deputados = response.dados
      })
    } else if (nome == '' && partido != '') {
      this.dep.getPartido(partido).subscribe(response => {
        this.deputados = response.dados
      })
    } else {
      this.dep.getPartidoNome(partido, nome).subscribe(response => {
        this.deputados = response.dados
      })
    }
  }
}
