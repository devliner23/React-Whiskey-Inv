import Background from '../assets/background.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center h-screen mx-auto bg-cover bg-fixed'
        >
            <div className="flex flex-col justify-center items-center">
                <div className="text-white text-4xl bg-black">
                    Welcome to the Whiskey Inventory
                </div>
                <div className="flex justify-center">
                    <div className='flex'>
                        <Link  to="/dashboard" className='m-2 pb-2 w-[350px] bg-black text-white flex flex-col justify-between items-center p-4'>
                            <i className='fa-solid fa-gauge fa-3x'></i>
                            <a href='/dashboard' className='text-center'>
                            Explore the Dashboard, add a new car, update an old car, or delete one entirely.
                            </a>
                        </Link>
                        <Link to="/profile" className='m-2 pb-2 bg-black text-white flex flex-col justify-between items-center p-4'>
                            <i className="fa-solid fa-id-card fa-3x"></i>
                            <a href='/profile' className='text-center'>
                            Take a look at our profile page
                            </a>
                        </Link>
                        <div className='m-2 pb-2 bg-black text-white flex flex-col justify-between items-center p-4'>
                            <i className="fa-solid fa-right-to-bracket fa-3x"></i>
                            <a href='#' className='text-center'>
                            Log in using your Google or Github account.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Home
