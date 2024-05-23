// email.js

const nodemailer = require('nodemailer');

// Konfigurasi transporter untuk mengirim email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ridhoamrullah99@gmail.com', // Ganti dengan alamat email Anda
    pass: 'rhgz nsts rsap pnrg ' // Ganti dengan kata sandi email Anda
  }
});

module.exports = transporter;
