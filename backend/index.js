
let express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('static'));

app.get('/test', (req, res) => {
    return res.status(200).send({
        "status": "Server is running !!!"
    });
});

app.get('/api/category', (req, res) => {
    let categories = require('./server/categories/index.get.json')
    return res.status(200).send(categories);
});

app.get('/api/banners', (req, res) => {
    let banners = require('./server/banners/index.get.json')
    return res.status(200).send(
        banners
    );
});

app.get('/api/products', (req, res) => {
    let products = require('./server/products/index.get.json')
    return res.status(200).send({ products });
});

app.post('/api/addToCart', (req, res) => {
    let addToCart = require('./server/addToCart/index.post.json')
    return res.status(201).send(addToCart);
});

app.listen(3000, () => {
    console.log('App is running');
})