import React, { useState, useRef, useCallback, useEffect } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import Webcam from "react-webcam";
import SendGweiComponent from './SendGweiComponent';
import Web3 from 'web3';

const BarcodeScannerComponent = ({ onUpdate, onError, width = "100%", height = "100%", facingMode = "environment", delay = 500, videoConstraints }) => {
  const webcamRef = useRef(null);
  const [scannedValue, setScannedValue] = useState(null);
  const [error, setError] = useState(null);
  const web3 = new Web3(new Web3.providers.HttpProvider(`https://goerli.infura.io/v3/7e3a144305ea44daac0f3c763e53ecfc`));
  const [scannedValueNumberAmount, setScannedValueNumberAmount] = useState(0);

  const capture = useCallback(async () => {
    const codeReader = new BrowserMultiFormatReader();
    const imageSrc = webcamRef?.current?.getScreenshot();

    if (imageSrc && !scannedValue) {
      try {
        const result = await codeReader.decodeFromImage(undefined, imageSrc);
        const barcodeValue = result.getText();
        setScannedValue(barcodeValue);
        onUpdate(barcodeValue, result);

        // Extract Ethereum address and amount from the scanned barcode
        const parts = barcodeValue.split(";");
        if (parts.length === 3) {
          setScannedValueNumberAmount(parseFloat(parts[1]));
        }
      } catch (err) {
        console.error("Barcode scan error:", err);
        onError(err);
      }
    }
  }, [onUpdate, onError, scannedValue]);

  const handleScanAgainClick = () => {
    setScannedValue(null);
    setScannedValueNumberAmount(0);
  };

  useEffect(() => {
    const interval = setInterval(capture, delay);
    return () => {
      clearInterval(interval);
    };
  }, [capture, delay]);

  // Extract Ethereum address from the scanned barcode
  const scannedAddress = scannedValue ? scannedValue.split(";")[2] : "";

  return (
    <div>
      <Webcam
        width={width}
        height={height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints || { facingMode }}
        audio={false}
        onUserMediaError={onError}
      />
      <br /><br /><br /><br />
      {scannedValue && (
        <div>
          <p>Scanned Barcode: {scannedValue}</p>
          <button onClick={handleScanAgainClick}>Scan Again</button>
        </div>
      )}
      {error && <p>Error: {error}</p>}
<br /><br /><br /><br />
      <div>
        <h1>Your Application</h1>
        <SendGweiComponent walletAddress={scannedAddress} web3={web3} amount={scannedValueNumberAmount} />
        {/* Render other components or content here */}
      </div>
    </div>
  );
};

export default BarcodeScannerComponent;
