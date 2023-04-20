var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayoub.aitahmda.97@gmail.com',
    //need to genirate from gmail mr frank
    pass: ''
  }
});

var mailOptions = {
  from: 'ayoub.aitahmda.97@gmail.com',
  to: 'ezitounioussama@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 