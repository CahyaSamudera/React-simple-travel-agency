import video from '../../Video/video.mp4';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className='showcase' id='hero'>
        <header>
          <h2 className='logo'>Travel</h2>
          <div className='toggle'></div>
        </header>
        <video src={video} autoPlay loop muted type='video/mp4'></video>
        <div className='overlay'></div>
        <div className='text'>
          <h2>Never Stop</h2>
          <h3>Exploring The World</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            obcaecati natus mollitia incidunt magni quaerat deleniti dolores
            voluptate aspernatur nostrum.
          </p>
          <a href='#hero'>Explore</a>
        </div>
        <ul className='social-media'>
          <li>
            <a href='#hero'>
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='#hero'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='#hero'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className='menu'>
        <ul>
          <li>
            <a href='#hero'>Home</a>
          </li>
          <li>
            <a href='#hero'>Services</a>
          </li>
          <li>
            <a href='#hero'>Prices</a>
          </li>
          <li>
            <a href='#hero'>Projects</a>
          </li>
          <li>
            <a href='#hero'>Contact</a>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default Hero;
