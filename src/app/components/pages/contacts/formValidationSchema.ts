import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, 'Name is too short!')
      .max(50, 'Name is too long!')
      .required('Required!'),
    email: Yup.string().trim().email('Invalid email!').required('Required!'),
    message: Yup.string().min(20, 'Message is too short!').required('Required!'),
  });