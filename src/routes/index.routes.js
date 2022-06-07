import { Router } from 'express';
import Task from '../models/Task.js';
import User from '../models/User.js';
const router = Router();

import generateRandomProduct from '../utils/fakerContainer.js';
const listProducts = generateRandomProduct(10)

//ok!
router.get('/', async (req, res) => {
    //busco las tareas en la base de datos
    //uso async/await para que no se quede en espera

    //.lean() para que me devuelva objetos de javascript y no de mongoose
    const tasks = await Task.find().lean();
    const users = await User.find().lean();

    //renderizo la vista con las tareas
    res.render('index', { tasks, users, listProducts });
});

//ok!
router.get('/libros', async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('libros', { tasks });
});

//ok!
router.get('/usuarios', async (req, res) => {
    const users = await User.find().lean();
    res.render('usuarios', { users });
});

//ok!
router.get('/login', (req, res) => {
    res.render('login')
});

//ok!
router.get('/registro', (req, res) => {
    res.render('registro')
});

//ok!
router.get('/productos', (req, res) => {
    res.render('faker', { listProducts })
});

//ok!
router.get('/nosotros', (req, res) => {
    res.send({ "nosotros": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' })
});


//post

//ok!
router.post('/tasks/add', async (req, res) => {
    try {
        //cuando llegue el modelo req.body lo paso al modelo Task
        //y lo guardo en constante task
        const task = Task(req.body);
        //guardo la tarea en la base de datos
        const newTask = await task.save()
        console.log({ newTask });
        res.redirect('/');
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Hubo un error: ya se encuentra en la base de datos');
    }
});


router.get('/edit/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        console.log(task)
        res.render('edit', { task });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Hubo un error: ya se encuentra en la base de datos');
    }

});

router.post('/edit/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    console.log(task)
    res.redirect('/');
    
})

router.get('/delete/:id', async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    console.log(task)
    res.redirect('/');
})

router.get('/toggleDone/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    console.log(task)
    task.done = !task.done;
    await task.save();
    res.redirect('/');

}
)

export default router;