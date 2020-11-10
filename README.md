# adonis-v5-crud-basic

### Installation

AdonisJS requires Node.js >= 12.0.0, along with npm >= 6.0.0.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/ramon-oestreich/adonis-v5-crud-basic.git
$ cd adonis-v5-crud-basic/
$ npm install 
$ cp .env.example .env
$ node ace generate:key
$ configure file .env with environments
$ node ace migration:run
$ up server node ace serve --watch
```

## Example .ENV

```
PORT=3333
HOST=127.0.0.1
NODE_ENV=development
APP_KEY=FUxuBWWFqEsq0TSSYPCbtX4unAnkxrQD
DB_CONNECTION=mysql
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=yout_user
MYSQL_PASSWORD=your_password
MYSQL_DB_NAME=your_database

```



## Routes

| Route  | Handler  | Middleware  | Name  | Domain  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  GET /products |  ProductsController.index  |   | products.index   |   |
| POST /products  | ProductsController.store  |   | products.store  |   |
| GET /products/:id  | ProductsController.show  |   | products.show  |   |
| PUT,PATCH /products/:id  | ProductsController.update  |   | products.update  |   |
|DELETE /products/:id  | ProductsController.destroy  |   | products.destroy  |   |
