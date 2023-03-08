import { Route, Routes } from "react-router-dom";
import './App.css';
import Body from "./components/Body";
import Help from "./components/Help";
import Header from './components/Header';

// Routing the different pages
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/help" element={<Help/>}/>
        <Route exact path="/game" element={<Body/>}/>
      </Routes>
    </div>
  );
}

export default App;

// I did a bit of research on this task
// https://github.com/simonjsuh/Reactjs-Hangman-Game-Source-Code/blob/master/src/components/Hangman.js
// https://www.youtube.com/watch?v=82-Gnw-rBiQ&t=27s&ab_channel=SimonSuh
// I got an understanding in what to do with tht research I've done
