import { Injectable } from '@nestjs/common';
import { CreateRmaterialDto } from './dto/create-rmaterial.dto';
import { UpdateRmaterialDto } from './dto/update-rmaterial.dto';

@Injectable()
export class RmaterialService {
  create(createRmaterialDto: CreateRmaterialDto) {
    return 'This action adds a new rmaterial';
  }

  findAll() {
    return `This action returns all rmaterial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rmaterial`;
  }

  update(id: number, updateRmaterialDto: UpdateRmaterialDto) {
    return `This action updates a #${id} rmaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} rmaterial`;
  }
}
