import { Test, TestingModule } from '@nestjs/testing'
import { RmaterialController } from './rmaterial.controller'
import { RmaterialService } from './rmaterial.service'

describe('RmaterialController', () => {
  let controller: RmaterialController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RmaterialController],
      providers: [RmaterialService],
    }).compile()

    controller = module.get<RmaterialController>(RmaterialController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
