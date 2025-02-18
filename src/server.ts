import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb+srv://admin:admin@team-culture.qhxsj.mongodb.net/?retryWrites=true&w=majority&appName=team-culture';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
