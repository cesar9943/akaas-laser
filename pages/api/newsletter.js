import WelcomeEmailTemplate from "@/components/Emails/welcome-template";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "lib/email";
const prisma = new PrismaClient();

const newsletterHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const emailData = {
      from: "lourdes@akaaslasermedspa.com",
      to: [email],
      subject: "Welcome to Akaas Laser Med SpA",
      react: WelcomeEmailTemplate({ email }),
    };
    await prisma.newsletter.create({
      data: {
        email: email,
      },
    });

    await sendEmail(emailData);
  } catch (error) {
    if (error?.code === "P2002") {
      return res.status(400).json({ error: "Email already exist" });
    }
    console.log({ error });

    return res.status(500).json({ error: "Unknow error" });
  }

  return res.status(200).json({ message: "success" });
};

export default newsletterHandler;
