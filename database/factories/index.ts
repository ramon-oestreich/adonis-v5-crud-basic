import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'

export const ProductFactory = Factory
.define(Product, ( {faker }) => {
    return {
        name: faker.commerce.productName,
        price: faker.commerce.price(10,25),
        brand: faker.commerce.productAdjective,
        category: faker.commerce.department,
        pathImage: faker.internet.url
    }
})
.build()


export const UserFactory = Factory
  .define(User, ({ faker }) => {
    return {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  })
  .build()
