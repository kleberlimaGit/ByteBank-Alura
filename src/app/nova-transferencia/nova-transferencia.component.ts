import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //Output propaga os dados para fora
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino:number = 0;

  transferir() {
    console.log('Transferindo meu Real');
    const valorAgTransferencia = {valor:this.valor,destino:this.destino}
    this.aoTransferir.emit(valorAgTransferencia);
    this.limparCampos();
  }
  limparCampos(){
    this.valor = 0;
    this.destino = 0
  }

}

