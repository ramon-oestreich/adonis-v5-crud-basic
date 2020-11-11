import  Product  from 'App/Models/Product';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'


export default class ProductSeeder extends BaseSeeder {
  public async run () {
     await Product.createMany([
      { 
        name: 'Borracha Escolar Faber Castell Super Soft',
        category: 'Bazar E Utilidades',
        price:5.39,
        brand: 'Faber Castell',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/293238_2'
      },
      { 
        name: 'Cereal Barra Linea 60g Cookies Cream',
        category: 'Mercearia',
        price:4.99,
        brand: 'Linea',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/296943_2'
      }

     ])
  }
}
