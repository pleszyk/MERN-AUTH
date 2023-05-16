import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

function SecurePage() {

  const { userInfo } = useSelector((state) => state.auth)
  const [logoutApiCall] = useLogoutMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        navigate('/updateUser')
      } catch (err) {
        console.log(err)
      }
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='text-xl p-10'>Secure Page</div>
        <div className='text-lg p-5'>Welcome {userInfo.name}</div>
        <button
          onClick={logoutHandler}
          className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded'
        >
          Logout
        </button>
        <div className='p-10'>
        <button
          onClick={submitHandler}
          className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded'
        >
          Update Profile
        </button>
        </div>
      </div>
    </>
  );
}
export default SecurePage;
