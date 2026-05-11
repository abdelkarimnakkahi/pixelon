import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./index.css";
import ImageLayout from "./components/imageLayout/ImageLayout";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        images={images}
        setImages={setImages}
      />
      <ImageLayout images={images} setImages={setImages} />
      <Footer />
    </>
  );
}

export default App;
