import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  function isEmailFormat(email: string) {
    
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== "" && email.match(emailFormat)) {
      return true;
    }

    return false;
  }

  if (!isEmailFormat(req.body.email)) {
    return res
      .status(500)
      .json({ log: "Mail Error", message: "El email es incorrecto." });
  }

  //validaciones campos vacios.
  if (
    !req.body.nombre ||
    !req.body.motivo ||
    !req.body.email ||
    !req.body.telefono ||
    !req.body.mensaje
  ) {
    return res
      .status(500)
      .json({ log: "Fields Empty", message: "Los campos estan incompletos." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, SMTP_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM || !SMTP_TO) {
    console.error("[contact] faltan variables SMTP en el entorno");
    return res.status(500).json({
      log: "Config Error",
      message: "El email no pudo ser enviado, por favor intente mas tarde.",
    });
  }

  const port = Number(SMTP_PORT) || 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // 465 arranca cifrado; 587 y 2587 abren en claro y suben con STARTTLS.
    // requireTLS evita que la API key viaje en texto plano si el server no lo
    // ofrece.
    secure: port === 465,
    requireTLS: port !== 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
  const mailData = {
    // Sale del entorno: con Resend tiene que ser una direccion de un
    // dominio verificado, y asi se cambia sin tocar codigo.
    from: SMTP_FROM,
    replyTo: req.body.email,
    to: SMTP_TO,
    subject: "Contacto Sitio Web Ovnisa | Nuevo Mensaje",
    html: `
    <html>
      <body>
        <div>
           <div style='background-color: #001748; padding:20px; color: #fff !important;'>
                <h2>Contacto Sitio Web Ovnisa</h2>
                <h3 style='color: #fff !important;'>Mensaje enviado por: ${req.body.nombre}</h3>
           </div>
           <div style='background-color: rgba(25, 64, 146, 0.5); padding:20px; color: #000 !important;'>
                <p>Email: ${req.body.email}</p>
                <p>Teléfono: ${req.body.telefono}</p>
                <p style='margin: 0px;'>Motivo: ${req.body.motivo}</p>
           </div>
           <div style='padding:20px; background-color: rgba(25, 64, 146, 0.1)'>
                <p style='margin: 0px;'>Mensaje: ${req.body.mensaje}</p>
           </div>
        </div> 
      </body>
    </html>
        `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        return res
          .status(500)
          .json({
            data: err,
            log: "Mail Error",
            message:
              "El email no pudo ser enviado, por favor intente mas tarde.",
          });
      } else {
        return res
          .status(200)
          .json({
            data: info,
            log: "Success",
            message:
              "¡Gracias por escribirnos! Pronto nos pondremos en contacto",
          });
      }
    });
  });
  res.status(200).json({ status: "OK" });
}
