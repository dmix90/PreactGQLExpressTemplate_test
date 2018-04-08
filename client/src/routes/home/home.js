import { h, Component } from 'preact';
import style from './style';

export class Home extends Component {
    render() {
        return (
            <div class={style.container}>
                <h1>Hello Homepage!</h1>
            </div>
        )
    }
}