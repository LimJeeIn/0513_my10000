import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);

  function modalClose() {
    setModal(false);
  }
  function modalOpen() {
    setModal(true);
  }
  return (
    <div id='app'>
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      {modal && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
