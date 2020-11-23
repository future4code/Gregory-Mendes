import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export const config: SMTPTransport.Options = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7a3c4cb2e9c4a1",
        pass: "5de4d41b3a4065"
  }
};

export const transporter = nodemailer.createTransport(config);

export const writeEmail = async (
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string
) => {
    const mailContent: Mail.Options = {
        from,
        to,
        subject,
        text,
        html
    };

    transporter.sendMail(mailContent, (error: Error | null, info: any) => {
        if (error) {
            throw new Error(error.message);
        } else {
            console.log("E-mail enviado!");
        };
    });
};