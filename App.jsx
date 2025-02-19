import './App.css';
import Header from './Components/Header';
import Heroes from './Components/Heroes';
import Card_one from './Components/Card_one';
import Card_two from './Components/Card_two';
import Card_three from './Components/Card_three';
import Fetured_course from './Components/Fetured_course';
import Talk_Expert from './Components/Talk_Expert';
import Master_skills from './Components/Master_skills';
import Master_skill_two from './Components/Master_skill_two';
import Trusted_by from './Components/Trusted_by';
import Mentership_program from './Components/Mentership_program';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Heroes></Heroes>
      <Card_one></Card_one>
      <Card_two></Card_two>
      <Fetured_course></Fetured_course>
      <Card_three></Card_three>
      <Talk_Expert></Talk_Expert>
      <Master_skills></Master_skills>
      <Master_skill_two></Master_skill_two>
      <Trusted_by></Trusted_by>
      <Mentership_program></Mentership_program>
      <Footer></Footer>
    </div>
  );
}

export default App;
