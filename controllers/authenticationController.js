const { User } = require('./models');
const createJWTToken = require('./utils/createJWTToken');

const authenticationController = {
  async register(req, res) {
    try {
      await User.create(req.body);
      res.status(201).json({
        message: 'user registered',
      });
    } catch {
      res.status(400).json({
        error: 'email is already in use',
      });
    }
  },
  async login(req, res) {
    if (req.userEmail) {
      return res.status(400).json({
        message: 'already authorized',
      });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(403).json({
          error: 'email or password do not match',
        });
      }

      const isValidPassword = await user.comparePassword(password);

      if (!isValidPassword) {
        return res.status(403).json({
          error: 'email or password do not match',
        });
      }

      let jwtToken;
      try {
        jwtToken = createJWTToken(user);
      } catch {
        return res.status(403).json({
          error: 'authentication is required',
        });
      }

      res.status(200).json({
        name: user.name,
        token: jwtToken,
      });
    } catch (error) {
      res.status(500).json({
        message: 'error occured trying to login',
        error: error,
      });
    }
  },
};

module.exports = authenticationController;
