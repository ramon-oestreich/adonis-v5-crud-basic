import Product from 'App/Models/Product';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {


  public async index({ response }: HttpContextContract) {
    const products = await Product.all();
    return response.status(200).json(products)
  }

  public async store({ request, response }: HttpContextContract) {

    const data = request.only([
      'name', 'price', 'brand', 'category', 'path_image'
    ]);

    const product = await Product.create(data)

    return response.status(201).json(product)
  }

  public async show({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.status(404).json({ message: 'Product not found!' })
    }
    return response.status(200).json(product)
  }


  public async update({ params, request, response }: HttpContextContract) {

    const product = await Product.find(params.id)

    const data = request.only([
      'name', 'price', 'brand', 'category', 'path_image'
    ]);
    if (!product) {
      return response.status(404).json({ message: 'Product not found!' })
    }

    await product?.merge(data)
    return response.status(200).json(product?.save())

  }

  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.status(404).json({ message: 'Product not found!' })
    }
    return response.status(200).json(product?.delete())
  }
}
