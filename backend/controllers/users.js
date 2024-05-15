const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = (req, res) => {
  const { firstName, lastName, date_of_birth, email, password, phone_number} = req.body;

  const newUser = new userModel({
    firstName,
    lastName,
    date_of_birth,
    email,
    password,
    phone_number
  });

  newUser
    .save()
    .then((user) => {
      res.status(201).json({
        success: true,
        message: "user created successfully",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        message: "server error",
      });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  userModel
    .findOne({ email })
    .then(async (result) => {

      if (!result) {
        res.status(401);
        res.json({
          error: err,
          success: false,
          message:
            "the email dosen't exist or password you entered is incorrect",
        });
        return;
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (valid) {

            const payload = {
                id : result._id,
                role : result.role,
            }

            const options = {
                expiresIn : "60m"
            }

            const token = jwt.sign(payload, process.env.SECRET, options)

          res.status(200).json({
            success: true,
            message: "Valid credentials",
            token : token
          });

        } else{
            res.status(401);
            res.json({
              error: err,
              success: false,
              message:
                "the email dosen't exist or password you entered is incorrect",
            }) 
        }
      } catch (error) {
        throw new Error("err");
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        message: "server error",
      });
    });
}

module.exports = {
  register,login
};
