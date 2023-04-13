import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/chatting.scss';
import { Link, useLocation } from 'react-router-dom';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import InputText from '../components/InputText';
import Chatbubble from '../components/Chatbubble';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { authService, db } from '../fbase';

function Chatting() {
  const location = useLocation();
  const {name, hours, minutes, message, profileURL, photoURL, comment} = location.state;
  const [chat, setChat] = useState([]);

  // 프로필 사진 
  if (profileURL != undefined)
  var proflieImg = {
    backgroundImage : `url(${profileURL})`,
    backgroundPosition : `center center`
  }
  useEffect(() => { // 데이터 읽기
    const q = query(collection(db, "chat"), orderBy("date"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        doc.data().talker === name && // 데이터 상 토커랑, state의 이름이 일치한 경우에만 채팅 내역이 나옴. 
        newArray.push({...doc.data(), id:doc.id})
      })
      setChat(newArray);
  });
  },[])

  return (
    <>
    <Header left_icon={faAngleLeft} center={name} bg={"off black"} />
    <main className='chatting'>
    <span className='date_info'>Tursday, March 23, 2023</span>
    <div className='chat_box my'>
      <div className='chat_wrap'>
        <p className='chat'><span>Hello!</span></p>
        <span className='chat_time'>
          <span>{hours}</span>:<span>{minutes}</span>
      </span>
      </div>
      <div className='chat_wrap'>
        <p className='chat'><span>말풍선을 누르면 메시지 수정, 삭제가 가능합니다.</span></p>
        <span className='chat_time'>
          <span>{hours}</span>:<span>{minutes}</span>
      </span>
      </div>
      <div className='chat_wrap'>
        <p className='chat'><span>firebase 문서에 채팅 대상자의 이름값을 저장하여 구분을 할 수 있게 하였습니다.</span></p>
        <span className='chat_time'>
          <span>{hours}</span>:<span>{minutes}</span>
      </span>
      </div>
    </div>
    <div className='chat_box other'>
      <div className='other_info'>
        <Link to={'/Profile'} state={{name, profileURL, photoURL, comment}}><span className='profile_img empty' style={proflieImg}></span></Link>
        <span className='profile_name'>{name}</span>
      </div>
      <div className='chat_wrap'>
        <span className='chat'>answer</span>
      </div>
      <div className='chat_wrap'>
        <span className='chat'>Quas voluptates earum autem esse ex, eum modi, ipsa nostrum necessitatibus odit quisquam eaque.</span>
      </div>
      <span className='chat'></span>
      <div className='chat_wrap'>
        <span className='chat'>{message}</span>
        <span className='chat_time'><span>15</span>:<span>33</span></span>
      </div>
    </div>
    <div className='chat_box my'>
      {chat.map(chat => ( // 새로운 대화 업로드
        <Chatbubble 
        key = {chat.id}
        chat = {chat}
        talker = {chat.talker}
        isOwner = {chat.owner === authService.currentUser.uid}
        attachmentURL
        hours = {hours}
        minutes = {minutes}
      /> 
      ))}
    </div>
  </main>
  <InputText name={name}/>
    </>
  )
}

export default Chatting