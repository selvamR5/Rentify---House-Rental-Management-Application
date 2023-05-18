var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/create/profile", (req, res) => {
console.log("reqqqqq",req.body)
  const newUser = User({
    Email: req.body.emailId,
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    Password: bcrypt.hashSync(req.body.password, salt),
    PhoneNumber: req.body.phoneNumber,
  })

  newUser.save().then((document) => {
    console.log("User Saved successfully." + document);
    res.status(200).send(document)  
  },
    (err) => {
      console.log("Unable to save user",err)
      res.status(401).send("Error Creating user")  
    }
    )

})

router.post("/login/check", (req, res) => {
  console.log(req.body);
  const { emailId, password } = req.body;

  User.findOne({
    Email: req.body.emailId
  }, (err, user) => {
    if (err) {
      console.log('err', err);
    }
    else if (user) {
      console.log('cust', user);
      if (!bcrypt.compare(req.body.password, user.Password)) {
        console.log('Invalid Credentials');
        res.status(401).end('Invalid crentials');
      }
      else {
        //  const payload = { _id: customer._id, emailId: customer.Email };
        //  const token = jwt.sign(payload, secret)
        //  console.log('result'+customer);
        const loginResponse = {
          //  token: "JWT " + token,
          user
        }
        res.status(200).send(loginResponse);
      }
    }
  })

})

module.exports = router;
