import './App.css';
import qrCode from './designFiles/images/image-qr-code.png';

function App() {
  return (
    <div className="App">
      <div className='qrWrapper'>
        <img className='qrcode' src={qrCode}></img>
        <div className='info'>
          <h1 className='title'>Improve your front-end skills by building projects</h1>
          <p className='text'>Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
