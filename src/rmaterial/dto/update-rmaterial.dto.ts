import { PartialType } from '@nestjs/mapped-types'
import { CreateRmaterialDto } from './create-rmaterial.dto'

export class UpdateRmaterialDto extends PartialType(CreateRmaterialDto) {}
