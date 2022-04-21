import * as React from 'react';
import { Component } from 'react';
import { ChildHook } from './ChildHook';

interface States{
  count: number
}
export default class ParentComponent extends Component<{}, States> {

  constructor(props: {}){
    super(props);
    this.state={
      count: 0
    }
  }
  override componentDidMount = () => this.setState({count: 0})

  getUpdatesFromChild = (count: number) =>{
    this.setState({count})
  }

  override render() {
    const  {count} = this.state;

    return (
      <div>
        <h2>
          ParentComponent receives count updates from ChildHook function
          on click
        </h2>
        <p> Count: {count}</p>
        <ChildHook
          name={count%2===0 ? 'Even number': 'Odd'}
          getUpdatesFromChild={this.getUpdatesFromChild}/>
      </div>
    );
  }
}
