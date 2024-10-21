const UserModel = require("../schema/userSchema");
const CustomErr = require("../errHandleMiddleware/customErr");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const { name, email, password, gender, number } = req.body;

  if (!name || !email || !password || !gender || !number) {
    return next(new CustomErr("All Input Fields are Required !", 400));
  }

  try {
    const emailCheck = await UserModel.findOne({ email });

    // -----checking user is availabe or not

    if (emailCheck) {
      return res.status(400).json({ message: "Already a user !!!!" });
    }

    // ----- password encryption

    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error Occured while salting !", success: false });
      }

      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error Occured while Encrypting password !" });
        }

        const UserData = new UserModel({
          name,
          email,
          password: hash,
          number,
          gender,
        });

        const succRate = await UserData.save();

        console.log(succRate);

        res.status(200).json({
          message: "New User Created Successfully !",
          userDataRes: succRate,
          success: true,
        });
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports = signup;
