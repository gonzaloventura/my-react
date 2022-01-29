import logo from './logo.svg';
import './App.css';
import ButtonPrimary from './Components/Button';
import Navbar from './Components/navbar';
import Mainsection from './Components/mainSection';

function App() {
  return (
    <div>
      <Navbar />
      
      <Mainsection 
      title = "Bievenidos!"
      description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
    </div>
  );
}

export default App;
