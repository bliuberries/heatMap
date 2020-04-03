import React from 'react';
import './panel.css';
const Panel = (props) => {

  return (
    <div className="floating-panel">
      <button >Test Data Set 1</button>
      <button >Test Data Set 2</button>
      <button >Test Data Set 3</button>
      <button >Focus All</button>
      <button >Focus CPU</button>
      <button >Focus MEM</button>
      <button >Focus HDD</button>
    </div>
  )
}

export default Panel;