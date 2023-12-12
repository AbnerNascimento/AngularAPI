import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private url = 'https://dadosabertos.camara.leg.br/api/v2'
  constructor(private http: HttpClient) { }
  getTodos(): Observable<any> {
    return this.http.get(`${this.url}/deputados?ordem=ASC&ordenarPor=nome`)
  }
  getNome(nome: string): Observable<any> {
    return this.http.get(`${this.url}/deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`)
  }
  getPartido(partido: string): Observable<any> {
    return this.http.get(`${this.url}/deputados?siglaPartido=${partido}&ordem=ASC&ordenarPor=nome`)
  }
  getPartidoNome(partido: string, nome: string): Observable<any> {
    return this.http.get(`${this.url}/deputados?nome=${nome}&siglaPartido=${partido}&ordem=ASC&ordenarPor=nome`);
  }

}
