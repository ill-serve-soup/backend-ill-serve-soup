# I'll Serve Soup API

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
  token: "YOUR UNIQUE LOGIN TOKEN GOES HERE"
}
```
2. You will use the token provided in the above response to view restricted pages.

## Viewing Inventory

### Viewing All Items
