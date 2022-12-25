import express, {Application} from 'express';
import appRouter from './routes/appRouter'


const app: Application = express();
const port = 5000;


app.use('/api', appRouter);

app.listen(port, () => {
  console.log(`Connected On port : ${port}`);
});

export default app;
