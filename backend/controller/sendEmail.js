const nodemailer = require("nodemailer");

exports.sendEmail = async () => {
  try {
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transport.sendMail({
      from: process.env.EMAIL,
      to: "laithalzbaidy@gmail.com",
      subject: "Response",
      text: "Your request has been accepted by the admin. You can now log in.",
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
