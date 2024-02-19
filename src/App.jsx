import React, {useState} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import './App.css';
import ShadePicker from './components/ShadePicker';
import SwatchesBottomPicker from './components/SwatchesBottomPicker';

function App(props) {
  const [colorPicker, setColorPicker] = useState(props.baseColorState);

  const handleColorChange = (event) => {
    setColorPicker(event.rgb);
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(`rgb (${colorPicker.r}, ${colorPicker.g}, ${colorPicker.b})`
  );
  };


  return(
    <>
    <div className='root'>
    <Col>
    <Row sm={12}>
      <ShadePicker color={colorPicker} onChange={handleColorChange} />
    </Row>
      <Row sm={12}>
        <SwatchesBottomPicker
          color={colorPicker}
          onChange={handleColorChange}
          />
      </Row>
      <Row sm={12}>
       <Button onClick={copyClipboard}>
         {'Copy Clipboard'}
       </Button>
      </Row>
    </Col>
    </div>
    </>
  )

  
  
}

export default App;