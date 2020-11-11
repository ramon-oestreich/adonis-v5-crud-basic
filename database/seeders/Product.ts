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
      },

      { 
        name: 'Sobremesa Chandelle 200g Chantilly Caramelo',
        category: 'Laticínios',
        price:4.99,
        brand: 'Chandelle',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/268054_2'
      },
      { 
        name: 'Absorvente Always Com 8 Super Protecao Com Abas Suave',
        category: 'Perfumaria E Beleza',
        price:4.19,
        brand: 'Always',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/285909_2'
      },
      { 
        name: 'Tempero Smart Zero Sódio 48g Frango',
        category: 'Mercearia',
        price:18.38,
        brand: 'Smart',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/448210_2'
      },
      { 
        name: 'Amaciante Roupa Baby Soft 5l Toque Cuidado',
        category: 'Limpeza',
        price:13.95,
        brand: 'Baby Soft',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/305299_2'
      },
      { 
        name: 'Acendedor Alcool Solido Fiat Lux',
        category: 'Bazar E Utilidades',
        price:11.49,
        brand: 'Fiat Lux',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/270090_2'
      },
      { 
        name: 'Mostarda Kuhne 255g Levemente Picante',
        category: 'Mercearia',
        price:18.68,
        brand: 'Kuhne',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/291388_2'
      },
      { 
        name: 'Vagem Macarrao Organica Solo Vivo 300g',
        category: 'Hortifruti',
        price:6.99,
        brand: 'Solo Vivo',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/276040_2'
      },
      { 
        name: 'Pao De Alho Zinho 300g Picante',
        category: 'Padaria',
        price:10.89,
        brand: 'Zinho',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/278834_2'
      },
      { 
        name: 'Detergente Líquido Triex 500ml Clear',
        category: 'Limpeza',
        price:1.29,
        brand: 'Triex',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/448021_2'
      },
      { 
        name: 'Molho Tomate Barilla 400g Olive',
        category: 'Mercearia',
        price:21.9,
        brand: 'Barilla',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/275288_2'
      },
      { 
        name: 'Vinho Chileno Leon De Tarapacá 750ml Cabernet Sauvignon',
        category: 'Bebidas',
        price:64.9,
        brand: 'León Tarapacá',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/289634_2'
      },
      { 
        name: 'Coxa Sobrecoxa Frango Frimesa 700g Empanado',
        category: 'Frios E Congelados',
        price:19.9,
        brand: 'Frimesa',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/288750_2'
      },
      { 
        name: 'Vaso Flor De Maio P11',
        category: 'Flores E Plantas',
        price:9.98,
        brand: 'Sem Marca',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/294551_2'
      },
      { 
        name: 'Chocolate Granulado Dori 215g Copo',
        category: 'Mercearia',
        price:7.57,
        brand: 'Dori',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/270399_2'
      },
      { 
        name: 'Protetor Sol Sundown 120ml Fps30',
        category: 'Perfumaria E Beleza',
        price:39.9,
        brand: 'Sundown',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/283047_2'
      },
      { 
        name: 'Hamburguer Sadia Speciale 175g Bovino',
        category: 'Frios E Congelados',
        price:17.9,
        brand: 'Speciale',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/445130_2'
      },
      { 
        name: 'Bebida Máquina Pilão 104g Café Espresso 12',
        category: 'Mercearia',
        price:26.6,
        brand: 'Pilão',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/289908_2'
      },
      { 
        name: 'Bala Gelatina Fini 90g Ice Cream',
        category: 'Mercearia',
        price:6.99,
        brand: 'Fini',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/447240_2'
      },
      { 
        name: 'Vinho Chileno Concha Y Toro Reservado 750ml Sauvignon Blanc',
        category: 'Mercearia',
        price:35.9,
        brand: 'Concha Y Toro',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/289629_2'
      },
      { 
        name: 'Condicionador Pantene 400ml Cachos Definid',
        category: 'Perfumaria E Beleza',
        price:26.4,
        brand: 'Pantene',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/294283_2'
      },
      { 
        name: 'Cereal Mucilon 180g Sac Ameixa-Aveia',
        category: 'Mercearia',
        price:6.99,
        brand: 'Mucilon',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/299347_2'
      },
      { 
        name: 'Cereal Barra Nuts Linea 50g Tradicional',
        category: 'Mercearia',
        price:9.56,
        brand: 'Linea',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/289321_2'
      },
      { 
        name: 'Leite Fermentado Liquido Activia 170g Sem Lactose Ameixa',
        category: 'Laticínios',
        price:3.29,
        brand: 'Activa',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/281910_2'
      },
      { 
        name: 'Geleia Saint Dalfour 284g Quatro Frutas',
        category: 'Mercearia',
        price:36.9,
        brand: 'St. Dalfour',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/293065_2'
      },
      { 
        name: 'Sabonete Antibacterial Rexona 84g Limpeza Profunda',
        category: 'Perfumaria E Beleza',
        price:1.58,
        brand: 'Rexona',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/446805_2'
      },
      { 
        name: 'Alcool Bacfree Coperalcool 500ml 46graus Tradicional',
        category: 'Limpeza',
        price:5.58,
        brand: 'Coperalcool',
        pathImage: 'https://savegnago.vteximg.com.br/arquivos/ids/269657_2'
      },

     ])
  }
}
