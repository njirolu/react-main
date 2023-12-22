import './App.css';
import {useEffect, useRef, useState} from "react";
import { loadMicroApp } from 'qiankun';

function App() {

  const containerRef = useRef();
  let microApp = null;

  useEffect(() => {
    return () => {
      microApp.unmount();
    }
  }, []);

  const loadMicrofrontend = () => {
    microApp = loadMicroApp({
      name: 'primecash',
      entry: '//localhost:8787',
      container: containerRef.current,
    });
  }


  const [currentView, setCurrentView] = useState('MAIN')
  return (
    <div className="App">
      <ul style={{ height: '400px', background: "rebeccapurple" }}>
        <li onClick={() => {
          setCurrentView("MAIN")
          if(microApp !== null) {
            microApp.unmount();
          }
        }}>Main Menu</li>
        <li onClick={() => {
          setCurrentView("SUB_MENU_ANGULAR")
          loadMicrofrontend()
        }}>Angular Sub Menu
        </li>
      </ul>

      <p>HALAMAN REACT SEBAGAI GATE UI MICROFRONTEND</p>

      {currentView === 'MAIN' ? (
        <p>Halo Halaman Utama</p>
      ) : (
        <p>ANGULAR</p>
      )}
      <div ref={containerRef}>
      </div>
    </div>
  );
}

export default App;
