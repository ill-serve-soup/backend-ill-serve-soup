# I'll Serve Soup API `https://soup-server.herokuapp.com/`

## Registering a New Profile

**POST** request to `/auth/register` with the following parameters:
```
{
  firstName: '', // required
  lastName: '', // required
  email: '', // required, must be unique
  password: '', // required
  profilePicUrl: '' // optional, defaults to placeholder image
}
```

## Logging In to an Existing Profile

**POST** request to `/auth/login` with the following parameters:
```
{
  email: '', // required
  password: '' // required
}
```
1. If you provide the correct email and password, the server will respond with a *200* status and the following object:
```
{
  message: "Welcome, FIRSTNAME!",
  userId: 123, // the userId is an integer which associates your user profile with your respective inventory items
  token: "YOUR UNIQUE LOGIN TOKEN GOES HERE"
}
```
2. You will use the token provided in the above response to view restricted pages.

## Viewing Inventory<br/>
### Viewing All Items

**GET** request to `/users/:userId/inventory` (where `userId`) is the same userId that you receive on login<br/>
### Viewing One Specific Item
**GET** request to `/users/:userId/inventory/:itemId`<br/>
## Adding Inventory

**POST** request to `/users/:userId/inventory` with an object of the following type:
```
{
  name: '', // string, required
  qty: 123, // integer, required
  categoryId: 123, // ingeger, required
  units: '', // string, optional
  imageUrl: '', // string, optional 
  inStock: true, // boolean, optional
  description: '' // string, optional
}
```

