const router = require('express').Router();
const apiRoutes = require('./api');

//--PREFIX ALL ROUTES DEFINED IN THE DIRECTORY WITH '/api'--\\
router.use('/api', apiRoutes);

module.exports = router;