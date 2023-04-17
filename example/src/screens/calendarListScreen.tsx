import React, {useState, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View, TextStyle} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';
import testIDs from '../testIDs';

const RANGE = 24;
const initialDate = '2021-05-05';
const nextWeekDate = '2022-07-14';
const nextMonthDate = '2022-08-05';

interface Props {
  horizontalView?: boolean;
}

const CalendarListScreen = (props: Props) => {
  const {horizontalView} = props;
  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#5E60CE',
        selectedTextColor: 'white'
      }
    };
  }, [selected]);
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
      textColor: 'green',
    },
    '2021-05-20': {
      color: 'green',
      startingDay: true
    },
    '2021-05-21': {
      color: 'green',
      selected: true,
    },
    '2021-05-22': {
      color: 'green',
      selected: true,
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
    },
  };

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day.dateString);
  }, []);

  return (
    <CalendarList
      testID={testIDs.calendarList.CONTAINER}
      current={initialDate}
      onDayPress={onDayPress}
      markedDates={markedDates}
      pastScrollRange={12}
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
      right: 0,
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

function renderCustomHeader(date: any) {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');
  const textStyle: TextStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#5E60CE',
    paddingRight: 5
  };

  return (
    <View style={styles.header}>
      <Text style={[styles.month, textStyle]}>{`${month}`}</Text>
      <Text style={[styles.year, textStyle]}>{year}</Text>
    </View>
  );
}

export default CalendarListScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  month: {
    marginLeft: 5
  },
  year: {
    marginRight: 5
  }
});
