import React from 'react';
import {SketchPicker} from 'react-color';


const ShadePicker = ({color, onChange}) => {
  return(
    <>
    <SketchPicker
      disableAlpha={true}
      presetColors={[]}
      color={color}
      onChangeComplete={onChange}
      />
    </>
  );
};

export default ShadePicker;

