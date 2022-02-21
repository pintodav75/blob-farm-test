
import express, { Express, Router } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import database from './database';
import router from './route';

const app: Express = express();

app.use(express.urlencoded({extended: true}) as RequestHandler);
app.use(express.json() as RequestHandler) 

const port: number = Number(process?.env?.PORT) || 8050;

// Initialize fake database
database.init();

// Register routes
const routes: Router[] = Object.values(router);
// All of the routes will be prefixed with /api
app.use('/api', routes);

// Start the server
app.listen(port);
console.log(`Server app listening on ${port}`);
