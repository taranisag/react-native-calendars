import React from 'react';
import {CalendarList} from 'react-native-calendars';
import testIDs from '../testIDs';
const initialDate = '2021-05-05';
const CalendarListScreen = () => {
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
      selected: true
    },
    '2021-05-22': {
      color: 'green',
      selected: true
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
      current={initialDate}
      markedDates={markedDates}
      pastScrollRange={0}
      futureScrollRange={0}
      markingType="period"
      disabledByDefault
      theme={theme}
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
    },
    fillers: {
      position: 'absolute',
      height: 40,
      flexDirection: 'row',
      left: 0,
      right: 0
    },
    leftFiller: {
      height: 40,
      flex: 1
    },
    rightFiller: {
      height: 40,
      flex: 1
    }
  },
  stylesheet: {
    calendar: {
      header: {
        dayHeader: {
          fontWeight: '600',
          color: '#48BFE3'
        }
      }
    }
  },
  'stylesheet.day.basic': {
    today: {
      borderColor: '#48BFE3',
      borderWidth: 0.8
    },
    todayText: {
      color: '#5390D9',
      fontWeight: '800'
    }
  }
};
export default CalendarListScreen;
