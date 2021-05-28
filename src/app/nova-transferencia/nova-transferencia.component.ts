import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino:number;

  constructor(private service:TransferenciaService, private router:Router){

  }

  transferir() {
    console.log('Transferindo meu Real');
    const valorAgTransferencia :Transferencia = {valor:this.valor,destino:this.destino}

    this.service.adicionar(valorAgTransferencia).subscribe(response => {
     this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error)

    );
  }

}

