import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello CDK-pipeline');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server up at http://localhost:${port}`);
});

export default app;
