require('dotenv').config(); // Load environment variables from .env file

const Server = require('./models/server');
const server = new Server();

server.listen();

/* import app from './application';

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
}); */