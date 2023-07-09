import Background from '../assets/background.jpg'

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
                    <div className="flex">
                        <div className="m-2 bg-white">

                            <a href="#">Path 1</a>
                        </div>
                        <div className="m-2 bg-white">
                            <a href="#">Path 2</a>
                        </div>
                        <div className="m-2 bg-white">
                            <a href="#">Path 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Home
