import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={PageA} />
				<Route exact path='/pageb' component={PageB} />
				<Route exact path='/pagec' component={PageC} />
			</Switch>
		</Router>
	);
}

export default App;
