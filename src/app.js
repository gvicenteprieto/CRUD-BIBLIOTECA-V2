import express from 'express';
import indexRoutes from './routes/index.routes.js';
import handlebars from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';
const app = express();

/*=======================[Motor de Plantillas]=======================*/
app.set('views', './src/views')

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
}))

app.set('view engine', 'hbs')


/*=======================[Middlewares]=======================*/
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
//app.use(morgan('dev'));

/*=======================[Routes]=======================*/
app.use(indexRoutes);

export default app;