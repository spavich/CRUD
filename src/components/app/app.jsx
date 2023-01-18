import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state ={
			data: [
				{name: 'J.S', salary: '100', increase: true, id: 1, rise: false},
				{name: 'L.P', salary: '1000', increase: false, id: 2, rise: false},
				{name: 'S.P', salary: '10000', increase: true, id: 3, rise: true},
			]
		};
		this.maxId = 4;
	}

	deleteItem = (id) =>{
		this.setState(state => ({
			data: state.data.filter(item => item.id !== id)
		}))
	};
	addItem = (name, salary) =>{
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}
		this.setState(({data}) =>{
			const newArr = [...data, newItem];
			return{
				data: newArr
			}
		});
	};

	onToggleProp = (id, prop) =>{
		this.setState(({data}) =>({
			data: data.map(item => (item.id === id) ? {...item, [prop]: !item[prop]} : item)
		}))
	};

	render(){
		const {data} = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;

		return(
			<div className='app'>
				<AppInfo
						employees={employees}
						increased={increased}/>
				<div className='search-panel'>
					<SearchPanel/>
					<AppFilter/>
				</div>
				<EmployeesList 
						data={data} 
						onDelete={this.deleteItem} 
						onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		)
	}
}

export default App;
