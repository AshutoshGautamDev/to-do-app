import React,{Component} from 'react';
import {ToDoBanner} from "./ToDoBanner";
import {ToDoCreator} from "./ToDoCreator";
import {ToDoRow} from "./ToDoRow";
import {VisibilityController} from "./VisibilityControl"

export default class Apo extends Component
{
constructor(properties)
{
super(properties);
this.state={
username:"Ashutosh",
todoItems:[{action:"book",done:false},
{action:"gocery",done:false},
{action:"vegitable",done:false},
{action:"juice",done:false},
{action:"milk",done:false}
],
showCompleted:true
}

}

updateNextTextValue=(event)=>
{
this.setState({newItemText:event.target.value});
}

createNewToDo=(task)=>
{
if(!this.state.todoItems.find(item=>item.action===task))
{
this.setState({
todoItems:[...this.state.todoItems,{action:task,done:false}]
},()=>localStorage.setItem("todos",JSON.stringify(this.state)));
}
}



togleToDo=(todo)=>this.setState({
todoItems:this.state.todoItems.map(item=>item.action===todo.action?{...item,done:!item.done}:item)});



todoTableRows=(doneValue)=>this.state.todoItems.filter(item=>item.done===doneValue).map(
item=><ToDoRow key={item.action} item={item} callback={this.togleToDo}/>);



componentDidCount=()=>{
let data=localStorage.getItem("todos");
this.state=(data!=null?JSON.parse(data):{
username:"Ashutosh",
todoItems:[{action:"book",done:false},
{action:"gocery",done:false},
{action:"vegitable",done:true},
{action:"juice",done:false},
{action:"milk",done:true}
],
showCompleted:true
});
}



render=()=>
<div>
<ToDoBanner name={this.state.username} task={this.state.todoItems} />
<div className="container-fluid">
<ToDoCreator callback={this.createNewToDo}/>
<table  className="table table-striped table-bordered">
<thead>
<tr>
<th>Decription</th><th>Done</th>
</tr>
</thead>
<tbody>
{this.todoTableRows(false)}
</tbody>
</table>
<div className="bg-secondary text-white text-center p-2">
<VisibilityController description="Completed Tasks" isChecked={this.state.showCompleted} callback={(checked)=>this.setState({showCompleted:checked})}/>
</div>
{ this.state.showCompleted &&
<table className="table table-striped table-bordered">
<thead>
<tr><th>Description</th><th>Done</th></tr>
</thead>
<tbody>{ this.todoTableRows(true) }</tbody>
</table>
}
</div>
</div>
}
