import './style/theme';
import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Home } from './routes/home/home';

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Router onChange={e => { this.currentUrl = e.url }}>
                    <Home path="/" />
                </Router>
            </div>
        )
    }
}
