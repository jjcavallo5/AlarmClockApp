import React, {useState} from 'react';
import {Text} from 'react-native';

const nowDate = () => {
  const d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  return {s, m, h};
};

const Clock = props => {
  const [clock, setClock] = useState(nowDate());

  setInterval(() => {
    const {s, m, h} = nowDate();
    setClock({s, m, h});
  }, 1000);

  return (
    <Text style={props.style}>
      {clock.h}:{clock.m}
    </Text>
  );
};

export default Clock;
