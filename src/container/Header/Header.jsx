import React, { useEffect } from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  const [welcomeImageLoaded, setWelcomeImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = images.welcome;
    img.onload = () => setWelcomeImageLoaded(true);
  }, []);

  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
        {welcomeImageLoaded && <img src={images.welcome} alt='header img' />}
    </div>
  </div>
};


export default Header;

