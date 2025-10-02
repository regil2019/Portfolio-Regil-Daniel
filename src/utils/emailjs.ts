import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const serviceId = 'your_service_id'; // Replace with your EmailJS service ID
  const templateId = 'your_template_id'; // Replace with your EmailJS template ID
  const publicKey = 'your_public_key'; // Replace with your EmailJS public key

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('Email sent successfully:', result);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
