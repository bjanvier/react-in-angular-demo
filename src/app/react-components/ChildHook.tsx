import * as React from 'react';
interface Props{
  name: string;
  getUpdatesFromChild: Function
}

export function ChildHook(props: Props) {

  const [count, setCount] = React.useState(0);

  return (
      <div>
        <h2>
          React ChildHook function receives a name value from parent component App:
        </h2>
        <h3>Value count type: {props.name}</h3>

        <button
          onClick={() => {
            setCount(count+1)
            props.getUpdatesFromChild(count)
          }}>
          Increment++
        </button>
        <button
          onClick={() => {
            setCount(count-1)
            props.getUpdatesFromChild(count)
          }}>
          Decrement--
        </button>
      </div>
    );
}
