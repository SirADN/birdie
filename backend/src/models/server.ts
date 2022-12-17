/* eslint-disable @typescript-eslint/no-var-requires */
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
      ping: "/hello",
      testDB: "/testdb",
      recipients: "/recipients",
    };

    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(cors()); // Enable CORS
  }

  // Bind controllers to routes
  routes(): void {
    this.app.use(this.paths.ping, require("../routes/ping"));
    this.app.use(this.paths.testDB, require("../routes/testdb"));
    this.app.use(this.paths.recipients, require("../routes/recipients"));
  }

  listen(): void {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log("Server running on port: ", this.port);
    });
  }
}

module.exports = Server;
