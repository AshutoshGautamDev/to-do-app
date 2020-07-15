import React, {Component} from 'react';
export class ToDoCreator extends Component
{
constructor(properties)
{
super(properties);
this.state={ newItemText:""}
}

updateNewTextValue=(event)=>{
this.setState({
newItemText:event.target.value});
}

createNewToDo=(event)=>{
this.props.callback(this.state.newItemText);
this.setState({newItemText:""});
}

render=()=>
<div className="my-1">
<input  className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue}/>
<button className="btn btn-primary mt-1" onClick={this.createNewToDo}>Add</button>
</div>

}
