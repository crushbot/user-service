/*
 * Api server
 */
import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import config from './config';
import user from './user/api';

const app = new Koa();
app.use(logger());
app.use(bodyParser());
app.use(compress());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.body = { ok: false, message: err.message };
    ctx.status = err.status || 500;
  }
});

// User
app.use(user.routes());
app.use(user.allowedMethods());

// Start server
app.listen(config.port);

// Export application
export default app;
