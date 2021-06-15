import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AppService {
  private repository: User[];
  constructor() {
    this.repository = new Array<User>();
  }

  getAll(): User[] {
    return this.repository;
  }

  getById(id: string): User {
    let result: User;
    this.repository.forEach((user) => {
      if (user.id == id) {
        result = user;
      }
    });
    return result;
  }

  create(user: User): User {
    this.repository.push(user);
    return user;
  }
}
