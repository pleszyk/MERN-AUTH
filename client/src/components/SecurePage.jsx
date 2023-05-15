import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

function SecurePage() {

  const { userInfo } = useSelector((state) => state.auth)
  const [logoutApiCall] = useLogoutMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='text-xl p-10'>Secure Page</div>
        <div className='text-lg p-0'>Welcome {userInfo.name}</div>
        <button
          onClick={submitHandler}
          className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded'
        >
          Logout
        </button>
      </div>
    </>
  );
}
export default SecurePage;
