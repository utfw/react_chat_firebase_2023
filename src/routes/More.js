import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faGear, faGraduationCap, faHouseChimney, faInfoCircle, faPaintBrush, faPencil, faTv, faUtensils, faVideo, faWonSign } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faComment as faCommentR, faUser as faUserR, faHandPeace} from '@fortawesome/free-regular-svg-icons';
import '../styles/more.scss';
import Header from '../components/Header';
import Tab from '../components/Tab';
import { useLocation } from 'react-router-dom';
import LogOut from '../components/LogOut';
import { authService } from '../fbase';

function More() {
  return (
    <>
    <Header center={'More'} num={1} right={faGear} />
    <main className='more'>
    <section className='user_info'>
      <h2 className='blind'>사용자 정보</h2>
      <span className='profile_img empty'></span>
      <span className='profile_info'>
        <span className='profile_name'>{authService.currentUser.displayName}</span>
        <span className='profile_email'>{authService.currentUser.email}</span>
      </span>
      <span className='chat_img'><a href='#'><i><FontAwesomeIcon icon={faCommentR} /></i></a></span>
    </section>

    <section className='user_menu'>
      <h2 className='blind'>사용자 메뉴</h2>
      <ul>
        <li><a href='#'><i><FontAwesomeIcon icon={faSmile} /></i></a></li>
        <li><a href='#'><i><FontAwesomeIcon icon={faPaintBrush} /></i></a></li>
        <li><a href='#'><i><FontAwesomeIcon icon={faHandPeace} /></i></a></li>
        <li><a href='#'><i><FontAwesomeIcon icon={faUserR} /></i></a></li>
      </ul>
    </section>
    <section className='plus_friends'>
      <header>
        <h2>PLUS FRIENDS</h2>
        <span><FontAwesomeIcon icon={faInfoCircle} /> Learn More</span>
      </header>
      <ul className='plus_list'>
        <li><a href='#'><FontAwesomeIcon icon={faUtensils} />Order</a></li>
        <li><a href='#'><FontAwesomeIcon icon={faHouseChimney} />Store</a></li>
        <li><a href='#'><FontAwesomeIcon icon={faTv} />Tv Channel/Radio</a></li>
        <li><a href='#'><FontAwesomeIcon icon={faPencil} />Creation</a></li>
        <li><a href='#'><FontAwesomeIcon icon={faGraduationCap} />Education</a></li>
        <li><a href='#'><FontAwesomeIcon icon={faBuildingColumns} />Politics/Society</a></li>
        <li><a href='#'><FontAwesomeIcon icon={faWonSign} />Finance</a></li>
        <li><a href='#'><FontAwesomeIcon icon={faVideo} />Movies/Music</a></li>
      </ul>
    </section>
    <section className='more_app'>
      <h2 className='blind'>앱 더보기</h2>
      <ul>
      <li>
        <a href='#'>
        <div>
          <span className='app_icon'></span>Kakao Story
        </div>
        <div className='app__catch'>
          <p>그대로의 일상 이야기,<br />카카오스토리</p>
        </div>
        </a>
      </li>
      <li>
        <a href='#'>
        <div>
          <span className='app_icon'></span>Path
          </div>
        </a>
      </li>
      <li>
        <a href='#'>
          <div>
            <span className='app_icon'></span>Kakao friends
          </div>
        </a>
      </li>
      </ul>
    </section>
    <LogOut />
  </main>
  <Tab more={`on`} />
  </>
  )
}

export default More