import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <View style={styles.block}>
      <Text style={styles.datdText}>
        {year}년 {month}월 {day}일
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  datdText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
