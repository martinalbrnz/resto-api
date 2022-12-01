import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from 'src/app.module'
import { StaffModule } from './staff.module'
import { StaffService } from './staff.service'

describe('StaffService', () => {
  let service: StaffService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        StaffModule,
        AppModule,
      ],
      providers: [
        StaffService,
      ],
    }).compile()

    service = module.get<StaffService>(StaffService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
