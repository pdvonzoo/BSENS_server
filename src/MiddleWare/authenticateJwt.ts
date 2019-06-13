import { Request, Response, NextFunction } from "express";
import * as passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "../Model/User";

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const params = {
  secretOrKey: TOKEN_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const verifyUser = async (payload: { userid: string }, done: any) => {
  try {
    const user = await User.findOne({ userid: payload.userid });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return passport.authenticate("jwt", { session: false }, (error, user) => {
    if (error) {
      console.log(error);
    }
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};

export const isAuthenticated = ({ request }: { request: Request }) => {
  if (!request.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};

passport.use(new Strategy(params, verifyUser));
passport.initialize();
