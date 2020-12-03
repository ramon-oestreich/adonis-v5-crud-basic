import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
    return 'home page'
})

Route.resource('products', 'ProductsController').apiOnly();
