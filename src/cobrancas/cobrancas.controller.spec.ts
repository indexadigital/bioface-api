import { Test, TestingModule } from '@nestjs/testing';
import { CobrancasController } from './cobrancas.controller';
import { CobrancasService } from './cobrancas.service';

describe('CobrancasController', () => {
  let controller: CobrancasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobrancasController],
      providers: [CobrancasService],
    }).compile();

    controller = module.get<CobrancasController>(CobrancasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
