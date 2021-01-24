import './Offer.css';

const Offer = () => {
  return (
    <div className='offer'>
      <div className='container2'>
        <div className='offer-content'>
          <div className='discount'>40% off</div>
          <h5 className='hotel-name'>The Paradise</h5>
          <div className='hotel-rating'>
            <i className='fas fa-star rating'></i>
            <i className='fas fa-star rating'></i>
            <i className='fas fa-star rating'></i>
            <i className='fas fa-star rating'></i>
            <i className='fas fa-star-half rating'></i>
          </div>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos
            iure illo?
          </p>
          <a href='#hero' className='btn btn-gradient'>
            Redeem Offer
            <span className='dots'>
              <i className='fas fa-ellipsis-h'></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
