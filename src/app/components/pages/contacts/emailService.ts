import emailjs from 'emailjs-com';

interface formProps {
  name: string;
  email: string;
  message: string;
}

export function sendEmail(formValues: formProps) {
  return emailjs.send(
    'service_73znvqg',
    'template_0rgw4va',
    formValues as any,
    'user_g6ZvhjvM2KR4ffH28Wgvh',
  );
}
