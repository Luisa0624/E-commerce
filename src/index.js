const express = require ('express')
const path = require('path')
const exphbs = require ('express-handlebars')
const methodOverride = require ('method-override')
const session = require ('express-session')
const flash = require ('connect-flash')
const passport = require ('passport')

//inicializar
const app = express();
require('./database')
require('./config/passport')

//config
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
}))
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/user'));
app.use(require('./routes/car'));

//vairables 
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//servidor
app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
});
