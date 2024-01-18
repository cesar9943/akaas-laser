import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    // Update your SendGrid API key here
    api_key:
      "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",
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

const contactHandler = async (req, res) => {
  console.log(req.body);
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update your email here
    to: "armandoc9943@gmail.com",
    from: "armandoc9943@gmail.com",
    subject: "Hi there",
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};

export default contactHandler;
