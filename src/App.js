/*eslint-disable*/ //터미널상에 뜨는 warning을 안뜨게 해줌

import React, {useState} from'react';
import logo from './logo.svg';
import './App.css';

function App() {

  /*
  let post = '예시입니다';
  function ex_func(){
    return '예시 함수'
  }
  */
  
  let subtitle = "예제";

  let [글제목, 글제목변경] = useState(["State를 사용한 변수 저장입니다.","State를 사용한 변수 저장입니다.","State를 사용한 변수 저장입니다."]);
  let [추천수, 추천함수] = useState([0,0,0]);

  function 글제목바꾸기(){
    var arr=[...글제목];
    arr[0]='첫번째 제목만 변경';
    글제목변경(arr);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style = {{color:'blue', fontSize :'20px'}}>develope myself</div>
      </div>
      <button onClick={글제목바꾸기}>첫번째 제목 변경</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ () => { 추천함수([추천수[0] + 1,추천수[1],추천수[2]]) } }>👍</span>
        {추천수[0]} </h3>
        <p>10월 3일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]}<span onClick={ () => { 추천함수([추천수[0],추천수[1]+1,추천수[2]]) } }>👍</span>
        {추천수[1]}</h3>
        <p>10월 4일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]}<span onClick={ () => { 추천함수([추천수[0],추천수[1], 추천수[2]+1]) } }>👍</span>
        {추천수[2]}</h3>
        <p>10월 5일 발행</p>
        <hr/>
      </div>
      <Modal>
      </Modal>
    </div>
  );
}


//component. 여러개의 HTML태그들을 하나로 묶어준다.
function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
