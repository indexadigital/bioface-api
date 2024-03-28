import { Test, TestingModule } from '@nestjs/testing';
import { CobrancasService } from './cobrancas.service';

describe('CobrancasService', () => {
  let service: CobrancasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CobrancasService],
    }).compile();

    service = module.get<CobrancasService>(CobrancasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
