import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private repository: Array<{}>;
  constructor(){
    this.repository = new Array<{}>()
  }
  getAll(): string {
    return 'Hello World!';
  }

  getById(id: number): string {
    return 'Hello World!';
  }

  create(user: {}): {}{
    this.repository.push(user)
    return this.repository[0];
  }
}
