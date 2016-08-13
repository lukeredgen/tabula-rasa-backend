/**
 * Created by Luke on 13/08/2016.
 */
const AuthenticationController = require('./controllers/authentication'),
    UserController = require('./controllers/user'),
    ProjectController = require('./controllers/project'),
    express = require('express'),
    passportService = require('./config/passport'),
    passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

const REQUIRE_ADMIN = "Admin",
    REQUIRE_MEMBER = "Member";

module.exports = function(app){
    const apiRoutes = express.Router(),
        authRoutes = express.Router(),
        userRoutes = express.Router(),
        projectRoutes = express.Router(),
        releaseRoutes = express.Router();


    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.)
}