
import './App.css';
//Hook
import { useState } from 'react';
//components
import Title from './components/Title';
import Header from './components/Header';
import headerImg from "./img/header-img.png";
import Button from './components/Button';
import Modal from './components/Modal';
import Card from './components/Card';
//icons
import { AiFillHtml5, AiFillPlayCircle } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from 'react-icons/si';
//examples  
import UseStateHookEx from './Examples/UseStateHookEx';
import CategoriesCard from './components/page-components/CategoriesCard';
import MyList from './Examples/MyList';

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
    <>
     <div className="container container-lg">
      {/* {Modal} */}
  {showCourseModal&&<Modal title={"Access denied"} text = {"please login in order to access this content"} cancelevent={handelCancelEvent}/>}
     {/* {Header} */}
     <Header>
      <div className='header-content mb-2'>
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

      </div>
     
     </Header>
     {/* Main */}
     <main>
      {/* Catagories */}
      <section className='categories my-4'>
        <Title text='Top categories' classes={"subtitle text-center"}/>
        <div className='categories-container d-flex'>
          <CategoriesCard 
          title={"Web Development"}
           icon_1={<AiFillHtml5 size = {"4em"} className="fa-brands fa-html5"/>}
           icon_2={<DiCss3Full size = {"4em"} className="icon css3"/>}
           icon_3={<SiJavascript size = {"4em"} className="icon js"/>}
           btnIcon={<AiFillPlayCircle size={"2em"}/>}
           startLearningEvent={handelStartLearningEvent}>
            <span className='fs-lg'>
              Learn how to biuld web apps with :
            </span>
            <ul className='mt-1'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            </CategoriesCard>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
        </div>
      </section>
      
     </main>
     {/* <UseStateHookEx/> */}
     {
      // <MyList style={{height: "100vh"}}/>
     }
    </div>
    </>
   
  );
}

export default App;
