export const Title = () => (
  <a href='/'>
    <img
      src='https://yt3.googleusercontent.com/ytc/AIf8zZS3z6ihwP6q2VdS0PftKtQQ6GtHTPgKTFF6p6PC=s900-c-k-c0x00ffffff-no-rj'
      className='logo'
      alt='logo'
    ></img>
  </a>
);

const Header = function () {
  return (
    <div className='header'>
      <Title />
      <ul className='nav-item'>
        <li>Your Order</li>
        <li>Offers</li>
        <li>Cart</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
