import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const App = () =>{
	const data = [
		{name: 'J.S', salary: '100', increase: true, id: 1},
		{name: 'L.P', salary: '1000', increase: false, id: 2},
		{name: 'S.P', salary: '10000', increase: true, id: 3},
	];

	return(
		<div className='app'>
			<AppInfo/>
			<div className='search-panel'>
				<SearchPanel/>
				<AppFilter/>
			</div>
			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	)
}

export default App;
