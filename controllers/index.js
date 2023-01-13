const router = require('express').Router();

// const apiRoutes = require('/api');
const userRoutes = require('api/userRoutes');


router.use('/users', userRoutes);
// router.use('/api', apiRoutes);

// router.use('/lmft', server);
// router.use('/aba', server);
// router.use('/lgbt', server);

module.exports = router;
