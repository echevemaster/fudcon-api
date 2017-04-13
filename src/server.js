import express from "express";
import {root} from "./routes/index";
const app =  express();
const router = express.Router()
const port = process.env.RROBBEN_PORT || 9999

app.use('/', root);
const server = app.listen(port)

console.log('Running server at localhost:' + port);
process.on('SIGTERM', function() {
    console.log('stopping server...');
    server.close();
});

process.on('SIGINT', function() {
    console.log('stopping server...');
    server.close();
});
