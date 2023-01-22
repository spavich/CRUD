import './app-filter.css';

const AppFilter = ({filter, onFilterSelect}) =>{
	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'rise', label: 'На повышение'},
		{name: 'moreThen1000', label: 'З/П больше 1000$'}
	];

	const buttons = buttonsData.map(({name, label}) =>{
		const clazz = (filter === name) ? "btn-light" : "btn-outline-light";
		return(
			<button 
				className={`btn ${clazz}`}
				key={name}
				type="button"
				onClick={() => onFilterSelect(name)}>
					{label}
			</button>
		)
	});

	return(
		<div className='btn-group'>
			{buttons}
		</div>
	)
}

export default AppFilter;