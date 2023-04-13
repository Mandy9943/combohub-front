import emailjs from "emailjs-com";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;

    const emailParams = {
      to_name: "Tu nombre",
      to_email: "Tu correo electrónico",
      message: JSON.stringify(formData),
    };

    try {
      const emailjsResponse = await emailjs.send(
        "service_y6kmkdb",
        "template_ui5zr25",
        emailParams,
        "fksy_lQlbbrGMKJa3"
      );
      res.status(200).json({ success: true, data: emailjsResponse });
    } catch (error) {
      console.error("Error al enviar el correo electrónico", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Método no permitido" });
  }
}
