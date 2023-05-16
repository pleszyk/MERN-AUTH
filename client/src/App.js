import Login from './components/Login';
import Register from './components/Register';
import SecurePage from './components/SecurePage';
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='' element={<PrivateRoute />}>
            <Route path='/securePage' element={<SecurePage />} />
            <Route path='/updateUser' element={<UpdateUser />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
