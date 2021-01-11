function sltcv() {

const nodemailer = require('nodemailer');
const user = document.getElementById("user").value;
if(!user) return alert("Veuillez spécifier l'email").value;
const password = document.getElementById("password").value;
if(!password) return alert("Veuillez spécifier le mot de passe").value;
const username = document.getElementById("username").value;
if(!username) return alert("Veuillez spécifier le pseudo").value;
const email = document.getElementById("email").value;
if(!email) return alert("Veuillez spécifier l'email à spammer").value;
const subject = document.getElementById("subject").value;
if(!subject) return alert("Veuillez spécifier le sujet du mail").value;
const text = document.getElementById("text").value;
if(!text) return alert("Veuillez spécifier le message du mail").value;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: password
    }
});


let inteval = setInterval(function() {
    transporter.sendMail({from: username, to: email, subject: subject, text: text}, function(err, data) {
        if (err) return console.log("Veuillez vous rendre sur: https://myaccount.google.com/lesssecureapps");
        console.log("Email send: " + data.body)
    })
}, 500);

setTimeout(function() {
    clearInterval(inteval)
    console.log(`Nombre de message envoillé: 120`)
}, 60000)
}