import ContactEmailTemplate from "@/components/Emails/contact-template";
import { sendEmail } from "lib/email";

const contactHandler = async (req, res) => {
  const { name, email, number, subject, text } = req.body;

  const emailData = {
    from: "lourdes@akaaslasermedspa.com",
    to: ["akaaslaser@gmail.com"],
    subject: "Mensaje desde el Landing page: " + subject,
    react: ContactEmailTemplate({ name, email, number, subject, text }),
  };
  const { data, error } = await sendEmail(emailData);

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default contactHandler;
