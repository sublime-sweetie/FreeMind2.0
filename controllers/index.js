const router = require('express').Router();


const userRoutes = require('./api/userRoutes');
const homeRoutes= require('./homepageRoute')
const mapRoutes = require('./mapsRoute')

router.use('/users', userRoutes);
router.use('/', homeRoutes);


router.use('/abamap', mapRoutes);
router.use('/lgbtmap', mapRoutes);
router.use('/lmftmap', mapRoutes);
module.exports = router;
