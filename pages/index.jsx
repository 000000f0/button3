import abi from '../utils/BuyMeACoffee.json';
import { ethers } from 'ethers';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ApiCallComponent from './ApiCallComponent';
import BarcodeScannerComponent from './BarcodeScannerComponent';
import QRCodeGenerator from "./QRCodeGenerator";
import Web3 from "web3";
import WalletBalanceComponent from './WalletBalanceComponent';
import SendGweiComponent from './SendGweiComponent';



export default function Home() {
  
  const [qrValue, setQrValue] = useState("");
  const [scannedResult, setScannedResult] = useState("");

  const generateQRCode = () => {
    // Generate the QR code based on the user input
    const qrData = `gwei;${qrValue};0xeebcc0f57f26da6cef510db4b670c9f97f559a4f`;
    qrcodeGenerator({
      value: qrData,
      size: "180x180",
      title: "Title",
      qrAlt: "QR Code Image",
      showQrId: "qr-code",
      color: "f00",
      bgcolor: "000",
    });
  };
  
  const addr_priv = '0x4eaa71ae5d5f71ffe8d000101572c000ebc863ff529905b8a9466681d5dea5fe';
  const addr = '0xeebcc0f57f26da6cef510db4b670c9f97f559a4f';
  const project_id = '7e3a144305ea44daac0f3c763e53ecfc';
  
  // Connect to the Infura client
  const network = `https://goerli.infura.io/v3/${project_id}`;
  const web3 = new Web3(new Web3.providers.HttpProvider(network));

  const handleButtonClick = async () => {
    try {







      // Execute the script from send_tx.js
      const result = await sendRawTransaction();
      console.log("Transaction Result: ", result);


      
    } catch (error) {
      console.error("Error executing transaction:", error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  // Component state
  const [currentAccount, setCurrentAccount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [currentpagenumber, setCurrentPageNumber] = useState(1);

  

  
  const handlePageChange1 = () => {
    setCurrentPageNumber(1);
  };

  const handlePageChange2 = () => {
    setCurrentPageNumber(2);
  };

  const handlePageChange3 = () => {
    setCurrentPageNumber(3);
  };

  
  




















if(currentpagenumber==1){


  return (
    <center>
      <div
        className={`container ${isDarkMode ? 'darkMode' : ''}`}
        style={{
          border: isDarkMode ? '1px solid white' : '1px solid white',
          backgroundColor: isDarkMode ? '#00003d' : '#7594ce',
          color: isDarkMode ? 'white' : 'white',
          margin: 0,
        }}
      >
        {/* Header and navigation */}
        <div
          className="nav-header"
          style={{
            zIndex: '2',
            backgroundColor: isDarkMode ? '#00003d' : '#7594ce',
            borderBottom: isDarkMode ? '1px solid white' : '1px solid white',
          }}
        >
          {/* Logo */}
          <img
            style={{ width: '50px' }}
            src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logol.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logod.png'}
            alt="Logo"
          />







<button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}} onClick={handlePageChange1}>
      send
    </button>



    <button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}} onClick={handlePageChange2}>
      recieve
    </button>


    <button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}}  onClick={handlePageChange3}>
      my_wallet: 0xee...9a4f
    </button>

          
          {/* Dark mode toggle */}
          <div className="toggle-darkmode" style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}>
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Main content */}
        <main className="main" style={{ backgroundColor: isDarkMode ? '#00003d' : '#7594ce' }}>
          <br />
          <br />
          <br />
          <br />

          <div>
              <img
                style={{
                  zIndex: '-1',
                  width: '150px',
                }}
                src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logol.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logod.png'}
                alt="Logo"
              />
            <br />

            <div className="App">
              
      <center>
        <div
          className="barcode-scanner-container"
          style={{
            width: "500px",
            height: "500px",
            border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarcodeScannerComponent
            web3={web3} 

            onUpdate={(result) => {
              // Handle updates from the barcode scanner component here
              console.log("Barcode scanned:", result);
              setScannedResult(result); // Set the scanned result in state
            }}
            onError={(error) => {
              // Handle errors from the barcode scanner component here
              console.error("Barcode scanner error:", error);
              // You can display an error message or take appropriate actions
            }}
          />
        </div>
      </center>
      <br />
      <br />
      <div>
        <p>Scanned Result: {scannedResult}</p>
      </div>
    </div>

    <br /><br />
    

          </div>












{/* 
    <div>
      <h1>Web3 Transaction Example</h1>
      <SendGweiComponent walletAddress={addr} web3={web3} />
    </div> */}

















          <br />
        </main>

        {/* Footer */}
        <footer style={{ marginBottom: '30px', width: '100%', borderTop: `1px solid ${!isDarkMode ? 'white' : 'white'}`, backgroundColor: isDarkMode ? '#00003d' : '#7594ce', color: isDarkMode ? 'white' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Social media icons */}
            {/* Add your social media icons here */}
          </div>
        </footer>
      </div>
    </center>
  );
}

  

















if(currentpagenumber==2){


  return (
    <center>
      <div
        className={`container ${isDarkMode ? 'darkMode' : ''}`}
        style={{
          border: isDarkMode ? '1px solid white' : '1px solid white',
          backgroundColor: isDarkMode ? '#00003d' : '#7594ce',
          color: isDarkMode ? 'white' : 'white',
          margin: 0,
        }}
      >
        {/* Header and navigation */}
        <div
          className="nav-header"
          style={{
            zIndex: '2',
            backgroundColor: isDarkMode ? '#00003d' : '#7594ce',
            borderBottom: isDarkMode ? '1px solid white' : '1px solid white',
          }}
        >
          {/* Logo */}
          <img
            style={{ width: '50px' }}
            src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logol.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logod.png'}
            alt="Logo"
          />







<button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}} onClick={handlePageChange1}>
      send
    </button>



    <button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}} onClick={handlePageChange2}>
      recieve
    </button>


    <button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}}  onClick={handlePageChange3}>
      my_wallet: 0xee...9a4f
    </button>

          
          {/* Dark mode toggle */}
          <div className="toggle-darkmode" style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}>
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        
        {/* Main content */}
        <main className="main" style={{ backgroundColor: isDarkMode ? '#00003d' : '#7594ce' }}>
          <br />
          <br />
          <br />
          <br />

          <div>
              <img
                style={{
                  zIndex: '-1',
                  width: '150px',
                }}
                src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logol.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logod.png'}
                alt="Logo"
              />
            <br />

            <center>






          <div className="App">
      <h1>QR Code Generator</h1>
      <QRCodeGenerator />
    </div>







    </center>

</div>












          <br />
        </main>

        {/* Footer */}
        <footer style={{ marginBottom: '30px', width: '100%', borderTop: `1px solid ${!isDarkMode ? 'white' : 'white'}`, backgroundColor: isDarkMode ? '#00003d' : '#7594ce', color: isDarkMode ? 'white' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Social media icons */}
            {/* Add your social media icons here */}
          </div>
        </footer>
        </div>

        </center>

  );

}
















if(currentpagenumber==3){


  return (
    <center>
      <div
        className={`container ${isDarkMode ? 'darkMode' : ''}`}
        style={{
          border: isDarkMode ? '1px solid white' : '1px solid white',
          backgroundColor: isDarkMode ? '#00003d' : '#7594ce',
          color: isDarkMode ? 'white' : 'white',
          margin: 0,
        }}
      >
        {/* Header and navigation */}
        <div
          className="nav-header"
          style={{
            zIndex: '2',
            backgroundColor: isDarkMode ? '#00003d' : '#7594ce',
            borderBottom: isDarkMode ? '1px solid white' : '1px solid white',
          }}
        >
          {/* Logo */}
          <img
            style={{ width: '50px' }}
            src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logol.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logod.png'}
            alt="Logo"
          />







<button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}} onClick={handlePageChange1}>
      send
    </button>



    <button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}} onClick={handlePageChange2}>
      recieve
    </button>


    <button style={{
  


  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",



}}  onClick={handlePageChange3}>
      my_wallet: 0xee...9a4f
    </button>

          
          {/* Dark mode toggle */}
          <div className="toggle-darkmode" style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}>
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        
        {/* Main content */}
        <main className="main" style={{ backgroundColor: isDarkMode ? '#00003d' : '#7594ce' }}>
          <br />
          <br />
          <br />
          <br />

          <div>
              <img
                style={{
                  zIndex: '-1',
                  width: '150px',
                }}
                src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logol.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logod.png'}
                alt="Logo"
              />
            <br />

            <center>






          <div className="App">
          <WalletBalanceComponent walletAddress={addr} web3={web3} />

    </div>







    </center>

</div>












          <br />
        </main>

        {/* Footer */}
        <footer style={{ marginBottom: '30px', width: '100%', borderTop: `1px solid ${!isDarkMode ? 'white' : 'white'}`, backgroundColor: isDarkMode ? '#00003d' : '#7594ce', color: isDarkMode ? 'white' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Social media icons */}
            {/* Add your social media icons here */}
          </div>
        </footer>
        </div>

        </center>

  );

}










}
