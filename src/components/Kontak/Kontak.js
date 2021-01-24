import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Kontak.css';

const Kontak = () => {
  return (
    <>
      <div className='contact' id='contact'>
        <div className='content'>
          <h2>Contact Us</h2>
        </div>
        <div className='container-3'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='text'>
                <h3>Address</h3>
                <p>
                  Jl. Pamulang Raya No.5, <br /> Pamulang, Tangerang Selatan,{' '}
                  <br /> 15713
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                {' '}
                <FaPhone />{' '}
              </div>
              <div className='text'>
                <h3>Phone</h3>
                <p>021 1234 56789</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                {' '}
                <FaEnvelope />{' '}
              </div>
              <div className='text'>
                <h3>Email</h3>
                <p>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='contactForm'>
            <form>
              <h2>Send Email</h2>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Name</span>
              </div>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea required />
                <span>Your Message ...</span>
              </div>
              <div className='inputBox'>
                <input type='submit' name='' value='Send' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;
