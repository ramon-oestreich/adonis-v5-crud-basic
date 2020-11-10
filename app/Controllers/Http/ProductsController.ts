import Application from '@ioc:Adonis/Core/Application';
import Product from 'App/Models/Product';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {

  public async index({ }: HttpContextContract) {
    return await Product.all();
  }

  public async store({ request }: HttpContextContract) {
    
    let data = request.only([
      'name', 'price', 'brand', 'category'
    ]);

    const file = request.file('path_image')

    if (!file) {
      return 'Insira um arquivo!'
    }

    await file.move(Application.tmpPath('upload'))
    data['path_image'] = `uploads/${file.clientName}`

    return await Product.create(data)
  }

  public async show({ params }: HttpContextContract) {
    return await Product.find(params.id)
  }


  public async update({ params, request }: HttpContextContract) {

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
    product.save()

  }

  public async destroy({ params }: HttpContextContract) {
    const product = await Product.find(params.id)
    product?.delete()
  }
}
