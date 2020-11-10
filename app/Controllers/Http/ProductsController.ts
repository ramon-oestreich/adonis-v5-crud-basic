import Application from '@ioc:Adonis/Core/Application';
import Product from 'App/Models/Product';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {


  public async index({ response }: HttpContextContract) {
    const products = await Product.all();
    return response.status(200).json(products)
  }

  public async store({ request, response }: HttpContextContract) {

    let data = request.only([
      'name', 'price', 'brand', 'category'
    ]);

    const file = request.file('path_image')

    if (!file) {
      return 'Insert file!'
    }

    await file.move(Application.tmpPath('upload'))
    data['path_image'] = `uploads/${file.clientName}`
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

    const product = await Product.findOrFail(params.id)

    let data = request.only([
      'name', 'price', 'brand', 'category'
    ]);

    const file = request.file('path_image')

    if (!file) {
      return 'Insira um arquivo!'
    }

    await file.move(Application.tmpPath('upload'))
    data['path_image'] = `uploads/${file.clientName}`

    await product.merge(data)
    return response.status(200).json(product.save())

  }

  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.status(404).json({ message: 'Product not found!' })
    }
    return response.status(200).json(product?.delete())
  }
}
