const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure .env is loaded

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

async function sendTestEmail() {
    try {
        let info = await transporter.sendMail({
            from: `"Test Sender" <${process.env.SMTP_USER}>`,
            to: "manojpodapati2291@gmail.com",
            subject: "SMTP Test",
            text: "If you received this, SMTP works!",
        });
        console.log("✅ Email sent successfully:", info.messageId);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
}

sendTestEmail();
