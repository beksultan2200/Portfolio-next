import Image from 'next/image'
import scss from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <nav className={scss.header__nav}>
          <a href="#">
            <div className={scss.header__logo}>
              <Image src='/Navbar/logo.jpg' alt='' width={50} height={50} style={{ borderRadius: '50%' }} />
              {/*<span></span>*/}
              <p>BEKSULTAN CHOTBAEV</p>
            </div>
          </a>
          <ul className={scss.header__ul}>
            <li><a href="#hero">Главная</a></li>
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#projects">Проекты</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar