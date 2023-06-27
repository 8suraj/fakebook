const express = require('express');

const dotenv = require('dotenv');
const http = require('http');
const app = require('./app');
const server = http.createServer(app);

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 8000;
function startServer() {
	server.listen(PORT, () =>
		console.log(`Listening on port ${PORT}...`)
	);
}
startServer();
