import { Test, TestingModule } from '@nestjs/testing'
import { RmaterialService } from './rmaterial.service'

describe('RmaterialService', () => {
  let service: RmaterialService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmaterialService],
    }).compile()

    service = module.get<RmaterialService>(RmaterialService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
