import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';

import config from './config/core.server.config';
import mongoDB from './config/core.server.db';
import moduleRoutes from './routes/core.server.routes';
import passportConfig from './config/core.server.passport';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'darkfire09',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);
moduleRoutes(app);

app.use(express.static(__dirname + '/../../'));

app.all('/*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../client/base-view/core-content.client.view.html`));
});

app.listen(config.port, () => {
	console.log(`Server running on ${config.host}:${config.port}`);
});
