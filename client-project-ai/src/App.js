import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ChooseOptions from './components/ChooseOptions/ChooseOptions';
import WriteBlessing from './components/WriteBlessing/WriteBlessing';
import axios from 'axios';
const App = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [blessing, setBlessing] = useState([]);
  const [showWriteBlessing, setShowWriteBlessing] = useState(false);
  const [index, setIndex] = useState(0);


  const handleSelectOptions = async (options) => {
    // Handle the selected options
    setSelectedOptions(options);

    try {
      // Make API request to the server
      const response = await axios.post('http://localhost:3001/generate-blessing', {
        selectedOptions
      });
      setBlessing(response.data.blessing);
    } catch (error) {
      console.error(error);
    }

    // Show the WriteBlessing component
    setShowWriteBlessing(true);
  };

  const handleNewBlessing = () => {
    if (index < 3) {
      index++;
    }
    else {
      // Reset state for a new request
      setSelectedOptions({});
      setBlessing('');
      setShowWriteBlessing(false);
    }
  };

  return (
    <Container style={{ marginTop: '20px', textAlign: 'center', direction: 'rtl' }}>
      <Typography variant="h3" gutterBottom>
        ברוכים הבאים למחולל הברכות
      </Typography>

      {!showWriteBlessing ? (
        <ChooseOptions onSelectOptions={handleSelectOptions} />
      ) : (
        <WriteBlessing
          selectedOptions={selectedOptions}
          blessing={blessing[index]}
          onNewBlessing={handleNewBlessing}
        />
      )}
    </Container>
  );
}

export default App;
