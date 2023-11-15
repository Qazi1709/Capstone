import express from "express";
import {
  userRegisterValidations,
  errorMiddleware,
} from "../../middlewares/validations/index.js"

import patientModel from "../../models/patientModel.js";
const router = express.Router();

router.post(
  "/signIn",
  userRegisterValidations(),
  errorMiddleware,
  async (req, res) => {
    try {
      console.log(req.body);
      let {
        name,
        mobileNumber,
        email,
        gender,
        age,
        address
      } = req.body;
      // if (password2 !== password) {
      //   return res.status(400).json({
      //     message: "Passwords don't match please try again.",
      //     status: false,
      //   });
      // }
      let findMobileNo = await patientModel.findOne({ mobileNumber });
      console.log(findMobileNo);
      if (findMobileNo) {
        return res.status(409).json({
          message: "User already exists",
          status: false,
        });
      }
      // password = await bcrypt.hash(password, 12);

      let userData = {
        name,
        mobileNumber,
        email,
        gender,
        age,
        address
      };
   
      let userDataPayload = new patientModel(userData);
      userDataPayload.save(); 
      res.status(200).json({ message: "User Signed in Successfully!", status: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error Please Try Again!",
        status: false,
      });
    }
  }
);
 
  
export default router;  



// router.post(
//     "/login",
//     userLoginValidation(),
//     errorMiddlewareForLogin,
//     async (req, res) => {
//       try {
//         console.log(req.body);
//         let findEmail = await userModel.findOne({email: req.body.email});
//         if (!findEmail) {
//           return res.status(401).json({ error: "Email Not Found" });
//         }
//         const matchPassword = await bcrypt.compare(
//           req.body.password,
//           findEmail.password
//         );
//         if (!matchPassword) {
//           return res.status(401).json({ error: "incorrect password" });
//         }
//         let payload = {
//           email: req.body.email,
//           role: "user",
//         };
//         let privateKey = "codeforindia";
//         var token = jwt.sign(payload, privateKey, { expiresIn: "1d" });
//         return res.status(200).json({ message: "User logged in Successfully!", status: true, token });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({
//           message: "Internal Server Error Please Try Again!",
//           status: false,
//         });
//       }
//     }
//   );