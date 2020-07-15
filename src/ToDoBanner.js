import React ,{Component} from 'react';

export class ToDoBanner extends Component
{

render=()=>
<div>
<h4 className="bg-primary text-white text-center p-2">
{this.props.name}'s to Do List
({this.props.task.filter(t=> !t.done).length} items to do)
</h4>
</div>
}
