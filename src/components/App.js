import React from 'react'

import styled from 'styled-components'

const Test=styled.div`
  width: 1rem; 
  height: calc(108rem/375);
  background: #f00;
`;
const App=()=>{
  return(
    <div>
      <Test>111</Test>
    </div>
  )
};

export default App
