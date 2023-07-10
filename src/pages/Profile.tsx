import EmbeddedGif from "../components/WhiskeyGif"

function Profile() {
  return (
    <div className="bg-black text-white h-screen flex justify-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center pt-4">
            <h1 className="text-4xl">Please enjoy the Whiskey Inventory</h1>
            <h3>Created by Eric Devlin</h3>
            <EmbeddedGif/>
        </div>
      </div>    
    </div>
  )
}

export default Profile
