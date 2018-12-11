const Koa = require('koa');
const app = new Koa();

app.keys = ['keys', 'keykeys'];

const config = require('./config/default');

const path = require('path');
const fs = require('fs');

// Здесь подключаються модули из папки handlers.
const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();

handlers.forEach(handler => require('./handlers/' + handler).init(app));

const Router = require('koa-router');

const router = new Router();

router.get('/', require('./routes/frontpage').get);
router.get('/news', require('./routes/news_page').get);
router.get('/news/:id', require('./routes/news_page').get_by_id);
router.get('/moreNews', require('./routes/news_page').get_more);
router.get('/calendar', require('./routes/calendar_page').get);
router.get('/calendartelebot', require('./routes/calendar_page').getMatchs);
router.get('/table', require('./routes/table_page').get);
router.get('/tabletelebot', require('./routes/table_page').getJSON);
router.get('/team', require('./routes/team_page').get);
router.get('/players', require('./routes/team_page').getPlayers);
router.get('/history', require('./routes/history_page').get);

app.use(router.routes());

app.listen(config.port);
