const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../middleware/auth-middleware.js");
const authRouter = require("../routers/auth-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);

module.exports = server;
