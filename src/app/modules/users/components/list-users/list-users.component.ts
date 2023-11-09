import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public users: User[] = [];
  constructor(private usersService: UsersService) {}


  ngOnInit() {
    this.users = this.usersService.getUsers();
    // this.users.push({
    //   name: 'Ana',
    //   profession: 'Analista',
    //   birthDate: '01/02/2003',
    //   documentNumber: '0123456789',
    //   email: 'ana@email.com',
    //   password: 'senha',
    //   phone: '11987654321',
    //   income: 1000,
    //   address: {
    //     zipCode: '00010001',
    //     street: 'Rua Avenida',
    //     number: 100,
    //     neighborhood: 'Sul',
    //     city: 'São Paulo',
    //     state: 'SP'
    //   }
    // })
  }

}
