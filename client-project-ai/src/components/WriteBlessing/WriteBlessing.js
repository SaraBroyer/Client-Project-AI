import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
const WriteBlessing = ({ selectedOptions, blessing, onNewBlessing }) => {

  const OptionsTranslation = {
    event: 'ארוע',
    age: 'גיל',
    type: 'סגנון',
    atmosphere: 'אוירה',
    birthday: 'יומולדת',
    Marriage: 'חתונה',
    engagement: 'אירוסין',
    birth: 'לידה',
    song: 'שיר',
    letter: 'מכתב',
    long: 'ארוך',
    short: 'קצר',
    happy: 'שמחה',
    excited: 'מרוגשת',
    funny: 'מצחיקה',
  };


  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" style={{ color: '#880E4F' }}>
          אפשרויות שנבחרו
        </Typography>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
          {Object.entries(selectedOptions).map(([key, value]) => (
            key !== 'age' ?
              <Typography key={key} style={{ marginRight: '10px' }}>
                {`${OptionsTranslation[key]}: ${OptionsTranslation[value]}`}
              </Typography> : selectedOptions.age?
              <Typography key={key} style={{ marginRight: '10px' }}>
                {`${OptionsTranslation[key]}: ${value}`}
              </Typography>:<></>

          ))}
        </div>

        <Typography variant="h4" style={{ color: '#880E4F' }}>
          ברכה
        </Typography>
        <Typography variant="body1">{blessing}</Typography>

        <Button
          variant="contained"
          color="primary"
          style={{ width: '30%', backgroundColor: '#880E4F' }}
          onClick={onNewBlessing}
        >
          אני רוצה משהו שונה
        </Button>
      </div>
    </Paper>
  );
};

export default WriteBlessing;
