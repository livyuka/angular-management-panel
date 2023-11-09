import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public userForm!: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
    this.setFormData();
  }

  private buildForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      profession: new FormControl(),
      birthDate: new FormControl(null, [Validators.required]),
      documentNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      income: new FormControl(),
      address: new FormGroup({
        zipCode: new FormControl(),
        street: new FormControl(),
        number: new FormControl(),
        complement: new FormControl(),
        neighborhood: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
      }),
    });
  }

  private setFormData(): void {
    const newUser: User = {
      name: 'Ana',
      profession: 'Analista',
      birthDate: '01/02/2003',
      documentNumber: '0123456789',
      email: 'ana@email.com',
      password: 'senha',
      phone: '11987654321',
      income: 1000,
      address: {
        zipCode: '00010001',
        street: 'Rua Avenida',
        number: 100,
        neighborhood: 'Sul',
        city: 'São Paulo',
        state: 'SP'
      },
    };

    this.userForm.patchValue(newUser);
  }

  public onSave(): void {
    console.log(this.userForm);
    this.usersService.createUser(this.userForm.getRawValue());
    this.router.navigate(['/users']);
  }
}
