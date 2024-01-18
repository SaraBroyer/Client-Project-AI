import React, { useState } from 'react';
import { Select, MenuItem, Button, TextField, Typography } from '@mui/material';

const ChooseOptions = ({ onSelectOptions }) => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedAtmosphere, setSelectedAtmosphere] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  const handleEventChange = (event) => {
    setSelectedEvent(event);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleAtmosphereChange = (atmosphere) => {
    setSelectedAtmosphere(atmosphere);
  };

  const handleAgeChange = (age) => {
    setSelectedAge(age);
  };

  const handleSelectOptions = () => {
    onSelectOptions({
      event: selectedEvent,
      type: selectedType,
      atmosphere: selectedAtmosphere,
      age: selectedAge,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" style={{ color: '#880E4F' }}>
        בחר אפשרויות
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
        <Select
          style={{ flex: 1, marginRight: '10px' }}
          value={selectedEvent}
          onChange={(e) => handleEventChange(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            בחר אירוע
          </MenuItem>
          <MenuItem value="birthday">יומולדת</MenuItem>
          <MenuItem value="Marriage">חתונה</MenuItem>
          <MenuItem value="engagement">אירוסין</MenuItem>
          <MenuItem value="birth">לידה</MenuItem>
        </Select>
        { selectedEvent=="birthday" && <TextField
          style={{ flex: 1 }}
          type="number"
          label="גיל"
          variant="outlined"
          onChange={(e) => handleAgeChange(e.target.value)}
        />}
        <Select
          style={{ flex: 1, marginRight: '10px' }}
          value={selectedType}
          onChange={(e) => handleTypeChange(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            בחר סוג ברכה
          </MenuItem>
          <MenuItem value="song">שיר</MenuItem>
          <MenuItem value="letter">מכתב</MenuItem>
          <MenuItem value="long">ארוך</MenuItem>
          <MenuItem value="short">קצר</MenuItem>

        </Select>

        <Select
          style={{ flex: 1, marginRight: '10px' }}
          value={selectedAtmosphere}
          onChange={(e) => handleAtmosphereChange(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            בחר אוירה
          </MenuItem>
          <MenuItem value="happy">שמחה</MenuItem>
          <MenuItem value="excited">מרוגשת</MenuItem>
          <MenuItem value="funny">מצחיקה</MenuItem>
        </Select>


      </div>

      <Button
        variant="contained"
        color="primary"
        style={{ width: '50%', backgroundColor: '#880E4F' }}
        onClick={handleSelectOptions}
      >
        כתוב לי ברכה
      </Button>
    </div>
  );
};

export default ChooseOptions;
