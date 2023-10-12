import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route y Routes
import { Home } from '../Home';
import NavBar from '../../components/NavBar';
import './App.css';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';

// ... (otros componentes y estilos)

function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes> {/* Utiliza el componente Routes en lugar de useRoutes */}
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          {/* Agrega rutas adicionales según tus necesidades */}
          {/* <Route path="/*" element={<NotFound />} /> */} {/* Puedes agregar una ruta NotFound si es necesario */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;