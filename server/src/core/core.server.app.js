import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import appConfig from './config/core.server.app-config';
import mongoDB from './config/core.server.db';
import moduleRoutes from './routes/core.server.routes';

const app = express();
app.use(favicon(path.join(`${__dirname} /../../../client/core/assets`, 'images', 'favicon.ico')));
app.use(bodyParser.json());
app.use(passport.initialize());

moduleRoutes(app);

app.use(express.static(`${__dirname} /../../../public`));
app.use(express.static(`${__dirname} /../../../client`));
app.use(express.static(`${__dirname} /../../../uploads`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.all('/*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../../../client/core/base-view/core-content.client.view.html`));
});

app.listen(appConfig.port, () => {
	console.log(`Server running on ${appConfig.host}:${appConfig.port}`);
});