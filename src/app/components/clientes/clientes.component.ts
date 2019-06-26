import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/class/cliente';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };

  constructor(
    private clienteServicio: ClienteService,
    private flassMesseges: FlashMessagesService) { }

  getSaldoTotal() {
    let saldoTotal = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      });
    }
    return saldoTotal;
  }

  agregar({value, valid}: {value: Cliente, valid: boolean}) {
    if (!valid) {
      this.flassMesseges.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // agregar servicio de cliente
    }

  }

  ngOnInit() {
    this.clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    );
  }

}
