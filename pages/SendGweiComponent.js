import React, { useState } from 'react';
import Web3 from 'web3';

const SendGweiComponent = ({ walletAddress, web3, amount }) => {
  const [transactionHash, setTransactionHash] = useState('');
  const [error, setError] = useState(null);

  const handleSendGweiClick = async () => {
    try {
      if (web3 && walletAddress) {
        // Hardcoded private key for demonstration purposes only
        const addr_priv = '0x4eaa71ae5d5f71ffe8d000101572c000ebc863ff529905b8a9466681d5dea5fe';

        // Specify the sender's Ethereum address (from address)
        const fromAddress = '0xeebcc0f57f26da6cef510db4b670c9f97f559a4f'; // Replace with the actual sender's address

        // Create a new transaction
        const transactionParameters = {
          from: fromAddress,
          to: walletAddress, // Sending to own address for demonstration
          value: web3.utils.toWei(amount.toString(), 'gwei'), // Convert the specified amount to Wei
          gas: 21000, // Standard gas limit for sending Ether
          gasPrice: web3.utils.toWei('10', 'gwei'), // Set gas price to 10 Gwei in Wei
        };

        // Sign the transaction with the private key
        const transaction = await web3.eth.accounts.signTransaction(transactionParameters, addr_priv);
        
        console.log('Transaction Signed:', transaction);

        // Send the signed transaction to the Ethereum network
        const receipt = await web3.eth.sendSignedTransaction(transaction.rawTransaction);

        console.log('Transaction Sent:', receipt);

        // Transaction was successful, you can access the receipt for details
        setTransactionHash(receipt.transactionHash);
        setError(null);
      } else {
        setError('Web3 or wallet address not available');
      }
    } catch (error) {
      console.error('Error sending Gwei:', error);
      setError('Error sending Gwei');
    }
  };

  console.log('Render SendGweiComponent');

  return (
    <div>
      <h2>Send {amount} Gwei</h2>
      <br /><br /><br /><br />
      <p>Address: {walletAddress}</p>
      <br /><br /><br /><br />
      <button onClick={handleSendGweiClick}>Send {amount} Gwei</button>
      <br /><br /><br /><br />
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SendGweiComponent;
