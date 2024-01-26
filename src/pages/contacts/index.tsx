import { useState } from 'react';
import Layout from '@/app/components/layout';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendEmail } from './emailService';
import Loader from './loader';
import { Modal } from './modal';

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!')
    .required('Required!'),
  email: Yup.string().trim().email('Invalid email!').required('Required!'),
  message: Yup.string().min(20, 'Message is too short!').required('Required!'),
});

export default function Contacts() {
  const [loading, setLoading] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      sendEmail(values)
        .then(() => {
          setLoading(false);
          setModalMsg('Message sent!');
          setDisplayModal(true);
          setSubmitting(false);
          resetForm();
          setTimeout(() => {
            setDisplayModal(false);
            setModalMsg('');
          }, 2000);
        })
        .catch(() => {
          setLoading(false);
          setModalMsg('Something went wrong!');
          setDisplayModal(true);
          setSubmitting(false);
          setTimeout(() => {
            setDisplayModal(false);
            setModalMsg('');
          }, 2000);
        });
    },
  });

  return (
    <Layout>
      <main>
        <section className="font-bold text-5xl mb-[30px]">Contact me</section>
        <div className="text-xl flex items-center mb-[5px]">
          <FaPhoneAlt className="inline-block me-[10px]" /> +370 607 28695
        </div>
        <div className="text-xl flex items-center mb-[5px]">
          <FaEnvelope className="inline-block me-[10px]" />{' '}
          edanielevicius@gmail.com
        </div>
        <div className="text-xl flex items-center mb-[5px]">
          <FaMapMarkerAlt className="inline-block me-[10px]" /> Kaunas
        </div>
        <section className="mt-[30px]">
          <form id="form1" onSubmit={formik.handleSubmit}>
            <div className="mb-[10px] ">
              <span className="inline-block text-[#A50104]">
                {formik.touched.name && formik.errors.name}
              </span>
              <input
                className="p-[10px] w-[100%]"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="mb-[10px]">
              <span className="inline-block text-[#A50104]">
                {formik.touched.email && formik.errors.email}
              </span>
              <input
                className="p-[10px] w-[100%]"
                name="email"
                type="email"
                placeholder="Email address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="mb-[10px]">
              <span className="inline-block text-[#A50104]">
                {formik.touched.message && formik.errors.message}
              </span>
              <textarea
                className="p-[10px] w-[100%]"
                name="message"
                placeholder="Message"
                rows={6}
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </div>
          </form>
        </section>
        <button
          type="submit"
          form="form1"
          className="text-xl bg-[white] w-[200px] h-[50px] border border-black"
        >
          {loading ? <Loader /> : 'Send message'}
        </button>
      </main>
      <Modal displayModal={displayModal} msg={modalMsg} />
    </Layout>
  );
}
