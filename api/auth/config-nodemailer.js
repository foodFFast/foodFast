// import nodemailer from "nodemailer"

// // let transporter=nodemailer.createTransport({
// //     host:"smtp.mailtrap.io",
// //     port:2525,
 
// //     auth:{
// //         user:"f056cc172deb52",
// //         pass:"84c80ded6a5f85"
// //     }
// // });
// let transporter=nodemailer.createTransport({
//      host:"smtp.gmail.com",
//      port:587,
//     secure:true,
//     auth:{
//         user:"fodfast7@gmail.com",
//         pass:"d39_6DOTBel519"
//     }
// });

// export let sendEmail=(emailTemplate)=>{
//    transporter.sendMail(emailTemplate,(err,info)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Email sent ", info).response
//     }
//    })

// }
import nodemailer from "nodemailer";

export const sendEmail = async (email, name , id, token) => {
    try {
        const transporter = nodemailer.createTransport({
            // host: process.env.HOST,
            // service: process.env.SERVICE,
            // port: 587,
            // secure: true,
            // auth: {
            //     user: process.env.USER,
            //     pass: process.env.PASS,
            // },
            host:"smtp.mailtrap.io",
                 port:2525,
             
               auth:{
                    user:"f056cc172deb52",
                  pass:"84c80ded6a5f85"
           }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject:"Password reset for " + email,
            html:`<p> Hello, ` + name +  `. Please  copy the link and <a href="http://localhost:3001/api/v1/auth/reset-password/${id}/${token}">reset your password</a>`       

        });

        console.log("email fue enviado correctamente");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

