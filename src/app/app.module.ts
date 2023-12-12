import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibeDeputadoComponent } from './components/exibe-deputado/exibe-deputado.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaDeputadoComponent } from './components/busca-deputado/busca-deputado.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibeDeputadoComponent,
    BuscaDeputadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
