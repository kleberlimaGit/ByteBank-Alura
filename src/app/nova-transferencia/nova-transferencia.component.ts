import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino:number;

  constructor(private service:TransferenciaService){

  }

  transferir() {
    console.log('Transferindo meu Real');
    const valorAgTransferencia :Transferencia = {valor:this.valor,destino:this.destino}

    this.service.adicionar(valorAgTransferencia).subscribe(response => {
      console.log(response);
      this.limparCampos();
    },
    error => console.log(error)

    );
  }
  limparCampos(){
    this.valor = 0;
    this.destino = 0
  }

}

