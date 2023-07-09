import EmbeddedGif from "../components/WhiskeyGif"

function Profile() {
  return (
    <div className="bg-black text-white h-screen flex justify-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
            <h1>Please enjoy </h1>
            <EmbeddedGif/>
        </div>
      </div>    
    </div>
  )
}

export default Profile
