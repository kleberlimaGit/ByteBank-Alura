import { Transferencia } from './../models/transferencia.models';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todasTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  adicionar(transferencia: any){
    this.dataInstante(transferencia);
    this.transferencias.push(transferencia);
  }

  private dataInstante(transferencia: any){
    transferencia.data = new Date();
  }

}
