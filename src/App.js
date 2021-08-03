
import './App.css';
import { navBar } from './components/header/navBar'

function App() {
  return (
    <div className="App">
      <header>
      <navBar>
       <ul>
       <li className="marca"><a href=""><img srs="./logo_tienda.png"></img>Bq </a></li>
         <li className="item1"><a href=""> Consolas</a></li>
         <li className="item2"><a href=""> Video juegos</a></li>
         <li className="item3"><a href=""> Accesorios</a></li>
         
       </ul>
     </navBar>
     </header>
     
    </div>
  );
}

export default App;
