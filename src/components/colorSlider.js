import React from 'react';
import { HuePicker } from 'react-color';

function ColorSlider({ background, onChange }) {
  return (
    <HuePicker
      color={background}
      onChangeComplete={onChange}
    />
  );
}

export default ColorSlider;