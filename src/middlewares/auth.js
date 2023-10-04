// auth.js
const passport = require('passport');
const passportJWT = require('passport-jwt');
const { secretKey } = require('../../jwt-config');
const { userModel } = require('../models/index')

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

const jwtAuthMiddleware = new JwtStrategy(jwtOptions,async (jwtPayload, done) => {

    const userId = jwtPayload.userId


    const user = await userModel.findByPk(userId);


  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

passport.use(jwtAuthMiddleware);

module.exports = passport.authenticate('jwt', { session: false });
