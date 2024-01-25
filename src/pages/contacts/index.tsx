import Layout from '@/app/components/layout';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contacts() {
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

        <section className='mt-[30px]'>
          <form>
            <div className='mb-[10px] '>
              <input className='p-[10px] w-[100%]' placeholder='Name'/>
            </div>
            <div className='mb-[10px]'>
              <input className='p-[10px] w-[100%]' placeholder='Email address'/>
            </div>
            <div className='mb-[10px]'>
              <textarea className='p-[10px] w-[100%]' rows={6} placeholder='Message'/>
            </div>
          </form>
        </section>
        <button className='text-xl bg-[white] px-[20px] py-[10px] border border-black'>Send message</button>
      </main>
    </Layout>
  );
}
