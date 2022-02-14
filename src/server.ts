import 'dotenv/config';

import app from './app';
import { swaggerDoc, swaggerServe } from './api_docs';
import clientDB from './database';

clientDB.create();
app.use('/api-docs', swaggerServe, swaggerDoc);

const { APP_PORT } = process.env;
app.listen(APP_PORT, () => console.log(`server running on ${APP_PORT}`));
