import Layer1 from "./components/Layer1";
import Layer2 from "./components/Layer2";
import Layer3 from "./components/Layer3";

function App() {

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#292f3d]">
        <div className="div-block">
          <Layer1 />
          <Layer2 />
          <Layer3 />
        </div>
      </div>
    </>
  )
}

export default App
