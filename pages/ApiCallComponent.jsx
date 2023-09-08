import React, { useState } from 'react';
import axios from 'axios';

function ApiCallComponent() {
  const [clientMessage, setClientMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setClientMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const lambdaEndpoint = 'https://xsvv3p3cbkqtmljxahna3ony540oyoom.lambda-url.eu-west-1.on.aws/'; // Replace with your Lambda endpoint URL
      const lambdaResponse = await axios.post(
        lambdaEndpoint,
        { clientmessage: clientMessage }
      );

      setResponse(lambdaResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Client Message:
          <input type="text" value={clientMessage} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiCallComponent;
