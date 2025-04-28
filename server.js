import express from 'express';
import path from 'path';
import dataRoutes from './routes/dataRoutes.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Web Scraper' });
});

app.use('/api', dataRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });