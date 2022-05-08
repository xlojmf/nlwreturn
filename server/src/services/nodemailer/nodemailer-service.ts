import { MailAdapter, SendMailData} from "../mail-service";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9a8c6e418b5f36",
      pass: "eaf05ac3db190a"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feed <jmf@gmail.com>',
            to: 'Miguel <boi@gmail.com>',
            subject,
            html: body,
        });
    }


}


