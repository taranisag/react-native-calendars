import React from 'react';
import {CalendarList} from 'react-native-calendars';

const testIDs = require('../testIDs');

const CalendarsList = () => {
  const markedDates = {
    '2021-05-11': {
      color: 'rgba(37, 110, 70, 0.1)',
      textColor: 'green'
    },
    '2021-05-12': {
      color: 'rgba(37, 110, 70, 0.1)',
      textColor: 'green'
    },
    '2021-05-01': {
      color: 'rgba(37, 110, 70, 0.1)',
      textColor: 'green'
    },
    '2021-05-02': {
      color: 'rgba(37, 110, 70, 0.1)',
      textColor: 'green'
    },
    '2021-05-19': {
      color: 'rgba(37, 110, 70, 0.1)',
      textColor: 'green'
    },
    '2021-05-20': {
      color: 'green',
      startingDay: true
    },
    '2021-05-21': {
      color: 'green',
      middleDay: true
    },
    '2021-05-22': {
      color: 'green',
      middleDay: true
    },
    '2021-05-23': {
      color: 'green',
      endingDay: true
    },
    '2021-05-24': {
      color: 'rgba(37, 110, 70, 0.1)',
      textColor: 'green'
    },
    '2021-05-25': {
      color: 'rgba(37, 110, 70, 0.1)',
      textColor: 'green'
    }
  };

  return (
    <CalendarList
      testID={testIDs.calendarList.CONTAINER}
      pastScrollRange={1}
      futureScrollRange={0}
      theme={theme}
      markingType="period"
      markedDates={markedDates}
      disabledByDefault
    />
  );
};

const theme = {
  'stylesheet.day.period': {
    base: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    }
  }
};

export default CalendarsList;
