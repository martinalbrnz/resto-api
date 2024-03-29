import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product, ProductDocument } from './schemas/product.schema'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

  findAll(): Promise<Product[]> {
    const allProducts = this.productModel.find().exec()
    return allProducts
  }

  findOne(id: string) {
    const product = this.productModel.findById(id).exec()
    return product
  }

  async create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto).save()
    return createdProduct
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true })
    return updatedProduct
  }

  remove(id: string) {
    const deletedProduct = this.productModel.findByIdAndDelete(id)
    return deletedProduct
  }
}
