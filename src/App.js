
import './App.css';
//Hook
import { useState } from 'react';
//components
import Title from './components/Title';
import Header from './components/Header';
import headerImg from "./img/header-img.png";
import Button from './components/Button';
import Modal from './components/Modal';
//icons
import { AiFillAlert  } from "react-icons/ai";
//examples  
import UseStateHookEx from './Examples/UseStateHookEx';

function App() {
  
  const [showCourseModal,setShowCourseModal] = useState(false);
  function handelStartLearningEvent() 
  {
    setShowCourseModal(true);
  }
  function handelCancelEvent() 
  {
    setShowCourseModal(false);
  }

  return (
    <div className="App">
  {showCourseModal&&<Modal title={"Access denied"} text = {"please login in order to access this content"} cancelevent={handelCancelEvent}/>}
     <Header>
      <Title text='Learn to code by watching others' classes={'header-title fs-xxl mb-3'}/>
      <p class="header-text mb-3">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
          <div className='header-btn'>
            <Button classes={"btn-primary text-light"} text="try it free 30 days" type={"button"} onClick={handelStartLearningEvent}/>
            <Button className={"btn-secondary"} text="Learn more" type={"button"} onClick={()=>window.alert("this button clicked")}/>

          </div>
          <img src={headerImg} alt="header-img" className="header-img"/>
     </Header>
     {/* <UseStateHookEx/> */}
    </div>
  );
}

export default App;
