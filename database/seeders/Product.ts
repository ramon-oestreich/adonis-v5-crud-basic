import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductFactory } from 'Database/factories'

export default class ProductSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await ProductFactory.createMany(200)
  }
}
