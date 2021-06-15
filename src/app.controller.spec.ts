import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controllers/app.controller';
import { User } from './entity/user.entity';
import { AppService } from './services/app.service';

describe('AppController', () => {
  let appController: AppController;
  const user = new User();
  user.id = '1';
  user.name = 'Rodrigo';
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "an array of users"', () => {
      appController.create(user);
      expect(appController.getAll()).toStrictEqual([user]);
    });
    it('should return "user with id 1"', () => {
      expect(appController.getById(1)).toStrictEqual(user);
    });
    it('should return "{user}"', () => {
      expect(appController.create(user)).toStrictEqual(user);
    });
  });
});
