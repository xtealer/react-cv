import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as cors from "cors";
import { ContactRequestProps, IEmailCredentials } from "../types/IMail";

const corsInstance = cors({ origin: true });

export default functions.https.onRequest((req, res) => {
  return corsInstance(req, res, async () => {
    try {
      const credentials: IEmailCredentials = functions.config().email;
      const data: ContactRequestProps = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: credentials.user,
          pass: credentials.password,
        },
      });

      await transporter.sendMail({
        from: `${credentials?.user}`, // sender address
        to: `xtealer00@gmail.com`, // list of receivers
        cc: `${data?.email}`,
        subject: `Contact Request From ${data?.name}`, // Subject line
        text: `A new contact request from ${data?.name} has been received.
Message: ${data?.message}

Cheers,
Xtealer No-Reply
${credentials?.user}
				`,
      });

      return res.send(data);
    } catch (err) {
      console.log(err);
      return res.status(404).send(err);
    }
  });
});
