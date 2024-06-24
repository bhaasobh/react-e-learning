
import './App.css';
import Title from './components/Title';
import Header from './components/Header';
import headerImg from "./img/header-img.png";
import Button from './components/Button';
import { AiFillAlert  } from "react-icons/ai";
function App() {
  return (
    <div className="App">
    
     <Header>
      <Title text='Learn to code by watching others' classes={'header-title fs-xxl mb-3'}/>
      <p class="header-text mb-3">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
          <div className='header-btn'>
            <Button classes={"btn-primary text-light"} text="try it free 30 days" type={"button"} icon={<AiFillAlert />}/>
            <Button className={"btn-secondary"} text="Learn more" type={"button"} onClick={()=>window.alert("this button clicked")}/>

          </div>
          <img src={headerImg} alt="header-img" className="header-img"/>
     </Header>
    </div>
  );
}

export default App;
