import "./Footer.sass";

function Footer(props) {
  return (
    <footer className='footer'>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'> Createad by LoO </p>
        <p className='footer__copyright-text'> Все права защищены™</p>
      </div>
      <ul className='footer__list'>
        <li className='footer__link'>ВКОНТАКТЕ</li>
        <li className='footer__link'>YOUTUBE</li>
        <li className='footer__link'>TELEGRAMM</li>
      </ul>
    </footer>
  );
}
export default Footer;
