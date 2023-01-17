const router = require('express').Router();
const userRoutes = require('./userRoutes');
const mapRoutes = require('./mapsRoutes');

router.use('/users', userRoutes);
router.use('/map', mapRoutes);

module.exports = router;