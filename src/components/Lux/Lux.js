import './Lux.css';
import Room1 from '../../Images/room_1.jpg';
import Room2 from '../../Images/room_2.jpg';
import Room3 from '../../Images/room_3.jpg';

const Lux = () => {
  return (
    <div className='rooms'>
      <div className='container'>
        <h5 className='section-header'>
          <span className='heading'>Luxurious</span>
          <span className='sub-heading'>Affordable Rooms</span>
        </h5>
        <div className='grid rooms-grid'>
          <div className='grid-item featured-rooms'>
            <div className='image-wrap'>
              <img className='room-image' src={Room1} alt='room-1' />
              <h5 className='room-name'>Astro Hotel</h5>
            </div>
            <div className='room-info-wrap'>
              <span className='room-price'>
                $150 <span className='per-night'>Per Night</span>
              </span>
              <p className='paragraph'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam, ullam.
              </p>
              <a href='#hero' className='btn rooms-btn'>
                Book Now &rarr;
              </a>
            </div>
          </div>
          <div className='grid-item featured-rooms'>
            <div className='image-wrap'>
              <img className='room-image' src={Room2} alt='room-1' />
              <h5 className='room-name'>Astro Hotel</h5>
            </div>
            <div className='room-info-wrap'>
              <span className='room-price'>
                $150 <span className='per-night'>Per Night</span>
              </span>
              <p className='paragraph'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam, ullam.
              </p>
              <a href='#hero' className='btn rooms-btn'>
                Book Now &rarr;
              </a>
            </div>
          </div>
          <div className='grid-item featured-rooms'>
            <div className='image-wrap'>
              <img className='room-image' src={Room3} alt='room-1' />
              <h5 className='room-name'>Astro Hotel</h5>
            </div>
            <div className='room-info-wrap'>
              <span className='room-price'>
                $150 <span className='per-night'>Per Night</span>
              </span>
              <p className='paragraph'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam, ullam.
              </p>
              <a href='#hero' className='btn rooms-btn'>
                Book Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lux;
