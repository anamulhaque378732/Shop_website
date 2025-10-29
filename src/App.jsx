import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Announcement from './Components/Announcement/Announcement';
import Footer from './Components/Footer/Footer';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import { ProductContext } from './Context/Context';
import Page from './Page/Page';
function App() {

  const [cardData, setCardData] = useState([]);
  return (
    <>
      <Announcement />

      <ProductContext.Provider value={{ cardData, setCardData }}>
        <Page />
        <ToastContainer />
      </ProductContext.Provider>

      <NewsLetter />
      <Footer />

    </>
  )
}

export default App
