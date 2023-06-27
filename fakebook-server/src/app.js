const path = require('path');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { authRouter } = require('./routers/auth.router');
const app = express();

// Use Helmet!
app.use(helmet());
app.use(
	cors({
		origin: ['http://localhost:5173'],
		credentials: true,
	})
);
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use('/api/v1/',);
app.use('/auth', authRouter);

app.get('/*', (req, res) => {
	res.sendFile(
		path.join(__dirname, '..', 'public', 'index.html')
	);
});
module.exports = app;
