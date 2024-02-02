import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailData) => {
  return await resend.emails.send(emailData);
};
