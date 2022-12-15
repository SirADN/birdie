import express = require("express");
import cors = require("cors");
//import path = require("path");

class Server {
  app: any;
  port: string | undefined;
  paths: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT; // Loaded from .env file
    this.paths = {
      // auth: "/api/auth",
      // homepage: "/api/homepage",
      ping: "/hello",
      testDB: "/testdb",
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors()); // Enable CORS
  }

  // Bind controllers to routes
  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth"));
    // this.app.use(this.paths.homepage, require("../routes/homepage"));
    this.app.use(this.paths.ping, require("../routes/ping"));
    this.app.use(this.paths.testDB, require("../routes/testdb"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }
}

module.exports = Server;