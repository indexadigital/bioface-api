import { PartialType } from '@nestjs/swagger';
import { CreateTransacoeDto } from './create-transacoe.dto';

export class UpdateTransacoeDto extends PartialType(CreateTransacoeDto) {}
