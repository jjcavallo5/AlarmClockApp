import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

//! No AM/PM Calculation

const nowDate = () => {
  const d = new Date();
  let s = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
  let m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  let h = d.getHours() % 12;
  return {s, m, h};
};

const Clock = props => {
  const [clock, setClock] = useState(nowDate());

  useEffect(() => {
    let clockInterval = setInterval(() => {
      const {s, m, h} = nowDate();
      setClock({s, m, h});
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <Text style={props.style}>
      {clock.h}:{clock.m}
    </Text>
  );
};

export default Clock;
