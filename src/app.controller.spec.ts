import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

describe('AppController', () => {
  let appController: AppController;
  const user: {} = {"id": 1, "name": "Rodrigo"}

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAll()).toBe('Hello World!');
    });
    it('should return "Hello World!"', () => {
      expect(appController.getById(1)).toBe('Hello World!');
    });
    it('should return "{user}"', () => {
      expect(appController.create(JSON.stringify(user))).toBe(JSON.stringify(user));
    });
  });
});
