import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'
import { Account, AccountDocument } from './schemas/account.schema'

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>
  ) { }

  create(createAccountDto: CreateAccountDto) {
    const createdAccount = new this.accountModel(createAccountDto)
    return createdAccount.save()
  }

  findIndexed(index: number, size: number) {
    return this.accountModel
      .find()
      .skip((Number(index) - 1) * Number(size))
      .limit(size)
      .exec()
  }

  findQuantity() {
    return this.accountModel.countDocuments().exec()
  }

  findOne(id: string) {
    return this.accountModel.findById(id).exec()
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountModel.findByIdAndUpdate(id, updateAccountDto, { new: true })
  }

  remove(id: string) {
    return this.accountModel.findByIdAndDelete(id)
  }
}
