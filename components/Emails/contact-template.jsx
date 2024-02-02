const ContactEmailTemplate = ({ name, email, number, subject, text }) => (
  <div>
    <h1>
      Hola Lurdes, tienes nuevos usuarios que se estan intentan comuncar contigo
    </h1>

    <div>Nombre: {name}</div>

    <div>Email: {email}</div>
    <div>Numero: {number}</div>
    <div>Asunto: {subject}</div>
    <div>Mensaje: {text}</div>
  </div>
);

export default ContactEmailTemplate;
