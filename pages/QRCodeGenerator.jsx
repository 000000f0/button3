import React, { useState } from "react";
import { qrcodeGenerator } from "react-easy-qrcode-generator";

function QRCodeGenerator() {
  const [userAmount, setUserAmount] = useState("");
  const ethereumAddress = "0xeebcc0f57f26da6cef510db4b670c9f97f559a4f"; // Replace with your Ethereum address

  const generateQRCode = () => {
    const qrString = `gwei;${userAmount};${ethereumAddress}`;
    qrcodeGenerator({
      value: qrString,
      size: "180x180",
      title: "Title",
      qrAlt: "QR Code Image",
      showQrId: "qr-code",
      color: "#000080", // Navy color
      bgcolor: "#ffffff", // White background color
    });
  };

  return (
    <div className="QRCodeGenerator">
      <input
        type="number"
        value={userAmount}
        onChange={(e) => setUserAmount(e.target.value)}
        placeholder="Enter Gwei amount"
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      <div id="qr-code"></div>
    </div>
  );
}

export default QRCodeGenerator;
