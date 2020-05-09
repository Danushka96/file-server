# File Server
This is an application used to store files in a server, Organize and download when you need. 
For operating you don't need ftp, All the files can be transfered via HTTP protocol,

## Screenshots

![](https://i.imgur.com/TEMAQXZ.png)

![](https://i.imgur.com/asaYmDP.png)

![](https://i.imgur.com/56gfPK3.png)

![](https://i.imgur.com/xy0I6nA.png)


#### Upload and download speed changes with your network connection speed

## Project development setup

This project is consist of two systems, Front and Back

### Frontend Setup

Developed with Vue

```
yarn install
yarn serve
```

#### Configuration

Open config/index.js and configure backend url ( you dont need to touch this configuration unless you changed the backend port)

### Backend Setup

Developed with NodeJS

```
yarn install
yarn run server
```

#### Configuration

open server/config/index.js and change your file saving path

## Project deployment setup

1. Build the front-end with yarn build
2. Move files to the web server public url
3. start server with pm2 node process manager

##### This Project is still in the development stage. So any kind contribution is welcome.

#### Made with ❤ for community
