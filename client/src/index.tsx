import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { getElection } from './services/election.service';
import { getResult } from './services/result.service';

async function start() {
    const election = await getElection();
    const result = getResult(election);
    ReactDOM.render(<App election={election} result={result}/>, document.getElementById('root'));
}

start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
