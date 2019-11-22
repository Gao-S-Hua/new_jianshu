# Jianshu
A minimalist writing and blogging environmen.
## Instructions:
### Client: 

```
Build with React, redux, antd, react-router-dom and webpack
All resources in ./src
```

### Server(Fake) : Express

```
For test only
All resources in ./server
Including AJAX request of data and media files from client web.
Also handle special POST request.
```

## Usage:
```
build : webpack client web resources into ./dist
client : Only run web client under http://localhost:3000/
server : Only run Express server under http://localhost:8000/
dev : (For development) Concurrently run client and server, proxy the ajax request to express server
```