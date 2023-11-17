import "./Header.sass";
import Menu from "../Menu/Menu";
import logo from '../../assets/images/logo.svg'
function Header(props) {
  return (
    <header className='header'>
          <Menu></Menu>
          <div className="header__logo-zone">
              <h1 className="header__title">Чайное путешествие</h1>
              <div style={{backgroundImage:`url(${logo})`}} className="header__logo"></div>
          </div>
    </header>
  );
}
export default Header;
