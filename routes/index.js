const express = require('express');
const router = express.Router();
const productsRoute = require('./products')
// localhost:8000/api

const defaultRoutes = [

    {
        path: '/products',
        route: productsRoute,
    },

];

defaultRoutes.forEach(({ path, route }) => {
    router.use(path, route);
});

module.exports = router;