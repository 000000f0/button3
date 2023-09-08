import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const WalletBalanceComponent = ({ walletAddress, web3 }) => {
  const [balance, setBalance] = useState('Loading...');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchBalance = async () => {
      if (web3 && walletAddress) {
        try {
          // Fetch the wallet balance
          const weiBalance = await web3.eth.getBalance(walletAddress);

          // Convert wei to ether
          const etherBalance = web3.utils.fromWei(weiBalance, 'ether');

          setBalance(etherBalance + ' ETH');
        } catch (error) {
          console.error('Error fetching wallet balance:', error);
          setBalance('Error');
        }
      }
    };

    const fetchTransactionHistory = async () => {
      if (web3 && walletAddress) {
        try {
          // Fetch the transaction history
          const response = await fetch(`https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${walletAddress}`);
          const data = await response.json();

          if (data.status === '1') {
            // Successful response
            setTransactions(data.result);
          } else {
            console.error('Error fetching transaction history:', data.message);
          }
        } catch (error) {
          console.error('Error fetching transaction history:', error);
        }
      }
    };

    fetchBalance();
    fetchTransactionHistory();
  }, [walletAddress, web3]);

  return (
    <div>
      <h2>Wallet Balance</h2>
      <p>Address: {walletAddress}</p>
      <p>Balance: {balance}</p>

      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Block Number</th>
            <th>From</th>
            <th>To</th>
            <th>Value (ETH)</th>
          </tr>
        </thead>
        <tbody>
        {transactions.map((transaction, index) => (
  <tr key={index}>
    <td>{transaction.blockNumber}</td>
    <td>{transaction.from}</td>
    <td>{transaction.to}</td>
    <td>{web3.utils.fromWei(transaction.value, 'ether')} ETH</td>
    <td>
      <a
        href={`https://goerli.etherscan.io/tx/${transaction.hash}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View in Goerli Etherscan
      </a>
    </td>
  </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletBalanceComponent;
