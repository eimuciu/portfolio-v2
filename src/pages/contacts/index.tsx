import Layout from '@/app/components/layout';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          className="text-xl bg-[white] px-[20px] py-[10px] border border-black"
        >
          Send message
        </button>
      </main>
    </Layout>
  );
}
