//==================================================
//Puerto
//==================================================
process.env.PORT = (process.env.PORT || 8080);



//==================================================
//Entorno
//==================================================

process.env.NODE_ENV = (process.env.NODE_ENV || 'dev');


//==================================================
//Base de Datos
//==================================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';

} else {

    urlDB = 'mongodb+srv://XabyerB:0LyoEFB496d7a1J5@cluster0.zv1ee.mongodb.net/cafe';

}

process.env.URLDB = urlDB;