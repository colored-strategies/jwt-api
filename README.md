# JSON Web Tokens API

This is an authentication, token encode & decode API that uses JWT technology and MongoDB data source.    

## Running the API

API serves over http://localhost:3000/ by default. Following commands starts up the server.   
<code>npm run start</code> **OR** <code>yarn start</code>

## API Configuration

This API uses two environment variables. **MONGO_URI** used as a MongoDB connection string. **API_URL** used as a base for product thumb and full-size images.    

Add **MONGO_URI** & **API_URL** variables to your **.env** file by updating with your own keys.    
    
**MONGO_URI**="mongodb://username:password@localhost/testDB?retryWrites=true&w=majority"   
**API_URL**="http://localhost"    

## API Routing

API serves over GET, POST, PUT, DELETE methods. Additional routing may be added as desired.

    GET         /products/seeder        Seed with the initial data   
    GET         /products               Return all the products   
    POST        /products/add           Create new product   
    PUT         /products/update        Update given product's data    
    DELETE      /products/delete        Delete the product/s within given id array 

