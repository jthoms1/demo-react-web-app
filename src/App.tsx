import React, { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState<string | null>(null);

  async function takePic() {
    // Take a picture or video, or load from the library
    const picture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
    });
    setPhoto(picture.webPath || null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Take a picture with native controls.</p>
        <button onClick={() => takePic()}>Learn React</button>
      </header>
      {photo ? <img src={photo} alt="photo" /> : null}
    </div>
  );
}

export default App;
