import { useEffect, useState } from "react";
import React from "react";

const URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((dogImgData) => setImage(dogImgData.message))
      .catch((Error) => console.log(Error));
  }, []);

  const img = () => {
    if (!image) return <p>Loading...</p>;

    return (
      <div>
        <img src={image} alt="A Random Dog" />
      </div>
    );
  };

  return <div>{img()}</div>;
}

export default App;
