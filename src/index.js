import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'regenerator-runtime/runtime';

import App from './components/App';

const render = Component => ReactDOM.render(
    <AppContainer>
        <Component/>
    </AppContainer>,
    document.querySelector('#root')
);

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(<h1>Hello</h1>);
    })
}