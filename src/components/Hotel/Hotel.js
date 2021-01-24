import './Hotel.css';
import Hotel1 from '../../Images/hotel_astro_resort.jpg';
import Hotel2 from '../../Images/hotel_the_enchanted_garden.jpg';
import Hotel3 from '../../Images/hotel_the_paradise.jpg';

const Hotel = () => {
  return (
    <>
      <div className='hotels'>
        <div className='container'>
          <h5 className='section-header'>
            <span className='heading'>Explore</span>
            <span className='sub-heading'>Our Beautiful Hotels</span>
          </h5>
          <div className='grid'>
            <div className='grid-item featured-hotels'>
              <img src={Hotel1} alt='' className='hotel-image' />
              <h5 className='hotel-name'>Astro Hotel</h5>
              <span className='hotel-price'>From $100/Night</span>
              <div className='hotel-rating'>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star-half rating'></i>
              </div>
              <a href='#hero' className='btn btn-gradient'>
                Book Now
                <span className='dots'>
                  <i className='fas fa-ellipsis-h'></i>
                </span>
              </a>
            </div>

            <div className='grid-item featured-hotels'>
              <img src={Hotel2} alt='' className='hotel-image' />
              <h5 className='hotel-name'>Enchanted Garden</h5>
              <span className='hotel-price'>From $200/Night</span>
              <div className='hotel-rating'>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
              </div>
              <a href='#hero' className='btn btn-gradient'>
                Book Now
                <span className='dots'>
                  <i className='fas fa-ellipsis-h'></i>
                </span>
              </a>
            </div>

            <div className='grid-item featured-hotels'>
              <img src={Hotel3} alt='' className='hotel-image' />
              <h5 className='hotel-name'>The Paradise</h5>
              <span className='hotel-price'>From $300/Night</span>
              <div className='hotel-rating'>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star rating'></i>
                <i className='fas fa-star-half rating'></i>
              </div>
              <a href='#hero' className='btn btn-gradient'>
                Book Now
                <span className='dots'>
                  <i className='fas fa-ellipsis-h'></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
