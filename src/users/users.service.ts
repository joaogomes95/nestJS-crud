import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  users = [
    {
      id: 0,
      email: 'joao@gmail.com',
      name: 'João',      
      password: '1234'
    },

    {
      id: 1,
      email: 'jhon@gmail.com',
      name: 'Jhon',      
      password: '1234'
    }

  ];
  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

  findAll() {    
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, createUserDto: CreateUserDto) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
      }
    }
    this.users.push(createUserDto);

  }

  remove(id: number) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
      }
    }    
  }
}
