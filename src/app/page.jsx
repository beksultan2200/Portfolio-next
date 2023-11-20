import Image from 'next/image';
import scss from './page.module.scss'
import Script from 'next/script'
import { FaLinkedin, FaGithub, FaTelegram, FaTiktok, FaSquareInstagram } from "react-icons/fa6";
const page = () => {

  const projectData = [
    {
      img: '/projects/cloneGit.png',
      title: 'Clone Github',
      desc: 'Мини клон гитхаба на react',
      code: 'https://github.com/beksultan2200/clone-github',
      link: 'https://clone-github-lilac.vercel.app/beksultan2200'
    },
    {
      img: '/projects/cloneGit.png',
      title: 'Clone Github',
      desc: 'Мини клон гитхаба на react',
      code: 'https://github.com/beksultan2200/clone-github',
      link: 'https://clone-github-lilac.vercel.app/beksultan2200'
    },
    {
      img: '/projects/cloneGit.png',
      title: 'Clone Github',
      desc: 'Мини клон гитхаба на react',
      code: 'https://github.com/beksultan2200/clone-github',
      link: 'https://clone-github-lilac.vercel.app/beksultan2200'
    },
  ]

  return (
    <main>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EB51K2GSVW" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-EB51K2GSVW');
        `}
      </Script>
      <section id='hero' className={scss.hero}>
        <div className={scss.hero__content}>
          <h1>
            Привет, я Бексултан
          </h1>
          <p>
            Веб-разработчик, ориентированный на интерфейс, создающий интерфейс веб-сайтов и веб-приложений
          </p>
          <a href="#projects">Проекты</a>
        </div>
        <div className={scss.hero__socials}>
          <div><a href="https://www.linkedin.com/in/chotbaev-beksultan/"><FaLinkedin /></a></div>
          <div><a href="https://github.com/beksultan2200"><FaGithub /></a></div>
          <div><a href="https://t.me/The_same_developer"><FaTelegram /></a></div>
          <div><a href="https://www.tiktok.com/@the_same_developer?_t=8hWHbwBf5T0&_r=1"><FaTiktok /></a></div>
          <div><a href="https://www.instagram.com/the_same_developer/"><FaSquareInstagram /></a></div>
        </div>
      </section>
      <section id='about' className={scss.about}>
        <div className="container">
          <div className={scss.about__heading}>
            <h2>Обо мне</h2>
            <p>Здесь вы найдете более подробную информацию обо мне, о том, чем я занимаюсь, и о моих текущих навыках, в основном в области программирования и технологий</p>
          </div>
          <div className={scss.about__content}>
            <div className={scss.about__content__main}>
              <h3>Узнай меня получше!</h3>
              <div>
                <p>Я <strong>Frontend веб-разработчик</strong>, создающий интерфейс веб-сайтов и веб-приложений, который приводит к успеху продукта. Ознакомьтесь с некоторыми из моих работ в разделе <strong>"Проекты"</strong>.</p>
                <p>Мне также нравится делиться контентом, связанным с тем, чему я научился за годы <strong>веб-разработки</strong>, чтобы это могло помочь другим людям из сообщества разработчиков. Подписываться на меня в моем Linkedin, где я публикую полезный контент, связанный с веб-разработкой и программированием</p>
                <p>Я открыт для возможностей <strong>трудоустройства</strong>, где я могу вносить свой вклад, учиться и расти. Если у вас есть хорошая возможность, соответствующая моим навыкам и опыту, тогда не стесняйтесь <strong>обращаться</strong> ко мне.</p>
              </div>
              <a href="#contacts">Контакты</a>
            </div>
            <div className={scss.about__content__skills}>
              <h3>My skills</h3>
              <div>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React</div>
                <div>Redux-toolkit</div>
                <div>NextJs</div>
                <div>SASS</div>
                <div>Bootstrap</div>
                <div>Ant Design</div>
                <div>Material UI</div>
                <div>Firebase</div>
                <div>GIT</div>
                <div>Github</div>
                <div>Figma</div>
                <div>Responsive Design</div>
                <div>Terminal</div>
                <div>Postman</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className={scss.projects}>
        <div className='container'>
          <div className={scss.projects__heading}>
            <h3>Мои проекты</h3>
            <p>Здесь вы можете узнать над какими проектами я работал</p>
          </div>
          <div className={scss.projects__content}>
            {projectData.map((el, idx) => (
              <div className={scss.projects__content__card}>
                <div className={scss.projects__content__card__img}>
                  <Image priority src={el.img} alt={el.title} width={1300} height={690} />
                  <span></span>
                </div>
                <div className={scss.projects__content__card__right}>
                  <div className={scss.projects__content__card__right__desc}>
                    <h4>{el.title}</h4>
                    <p>{el.desc}</p>
                  </div>
                  <div className={scss.projects__content__card__right__btns}>
                    <a href={el.code}><FaGithub/>Код</a>
                    <a href={el.link}>Демо</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default page