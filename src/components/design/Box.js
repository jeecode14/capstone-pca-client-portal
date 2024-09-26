import React from 'react';

export default function Box(props) {
  console.log(props.name);
  console.log(props.age);
  return <div>Box</div>;
}
