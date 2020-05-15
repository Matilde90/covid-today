import React from 'react';

// scroll uses children to render its children
const Scroll = (props) => {
  console.log(props)
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '100vh' }}>
      {props.children}
    </div>
  )
};

export default Scroll;