# JSON Web Tokens API

This is an authentication, token encode & decode API that uses JWT technology and MongoDB data source.    

## Running the API

API serves over http://localhost:3000/ by default. Following commands starts up the server.   
<code>npm run dev</code> **OR** <code>yarn dev</code>

## API Configuration

This API uses two environment variables. **MONGO_URI** used as a MongoDB connection string. **JWT_SECRET** used as a secret key signature.    

Add **MONGO_URI** & **JWT_SECRET** variables to your **.env** file by updating with your own keys.    
    
**MONGO_URI**="mongodb://username:password@localhost/testDB?retryWrites=true&w=majority"   
**JWT_SECRET**="abc123"    

## API Routing

API serves over POST and DELETE methods. Additional routing may be added as desired.

    POST         /user/signUp        Add user data to data source   
    POST         /user/authenticate  Generate token for given authentication information   
    POST         /user/getUser       Decode given token and get user data    
    DELETE       /user/delete        Delete the data source content (use with caution!) 

## Example Request
<ul>
  <li><strong>POST</strong> /user/signUp</li>   

    Name:Ultimo   
    Surname:Magnefiso   
    Gender:Female   
    DateOfBirth:01/01/1990   
    Username:aa   
    Password:bb   
  <li><strong>POST</strong> /user/authenticate</li>   
   
    username:aa   
    password:bb  
    fullDetail:false  
  <li><strong>POST</strong> /user/getUser</li>   

    token:addsadasd.hfghfghfg.sfdsdfsd   

</ul>
