import UserModel from '../models/UserModel';

export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {

        const user = await UserModel.findOne({ accessToken: accessToken });
        if(user) {
          req.user = user;
          next();
        } else {
          res.status(401);
          throw new Error('Not authorized, please log in');
        }
    } catch (error) {
        res.status(500).json({ sucess:false , response : error.message });

    }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
}


export default authenticateUser;

