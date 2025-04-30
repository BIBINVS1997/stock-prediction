
import './assets/css/style.css'
import Header from './components/Header'

import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
import AuthProvider from './AuthProvider';
import Dashbord from './components/dashbord/Dashbord';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
function App() {

  return (
    <>
     <AuthProvider>
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
          <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
          <Route path='/dashbord' element={<PrivateRoute><Dashbord/></PrivateRoute>}/>
        </Routes>
          {/* <RouterProvider router={route}/> */}
        <Footer/> 
      </BrowserRouter>   
     </AuthProvider>
    </>
  )
}

export default App
