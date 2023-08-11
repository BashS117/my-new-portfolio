import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import NavBar from '../../components/NavBar'
import './App.css'

const AppSections=()=>{
  let routes=useRoutes([
    {path: '/', element:<Home/>},


    // {path:'/*',element: <NotFound/>},
  ])
  return routes;

}

function App() {

  return (
    <div className=''>
      
      <BrowserRouter>
      <NavBar/>

      <AppSections/>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
