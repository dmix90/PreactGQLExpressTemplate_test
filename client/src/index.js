import { Component } from 'preact';
import { Router } from 'preact-router';
import Home from './routes/home/home';
import './style/theme';
import { Provider } from 'preact-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';

const Hello = ({ children, ...props }) => (<h2>Hello</h2>)

const Test = ({ children, ...props }) => (
    <h2>{props.test}</h2>
)

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Provider store={createStoreWithMiddleware(rootReducer)}>
                    <Router onChange={e => { this.currentUrl = e.url }}>
                        <Home path="/" />
                        <Hello path="/test" />
                        <Test path="/testo" test="YO" />
                    </Router>
                </Provider>
            </div>
        )
    }
}

// import { Component } from 'preact';
// import style from './style';

// export class Test extends Component {
//     render() {
//         return (
//             <div class={style.container}>Test</div>
//         )
//     }
// }