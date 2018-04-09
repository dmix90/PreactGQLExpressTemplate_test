import { Component } from 'preact';
import style from './style';
import { connect } from 'preact-redux';
import { testList, getOneFromList } from '../../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {
    componentWillMount() {
        this.props.testList();
        this.props.getOneFromList();
    }
    renderList = data => (data ? data.map(({ id, name }) => <li key={id}>{id} - {name}</li>) : null)
    render({ data }, state) {
        console.log(data);
        return (
            <div class={style.container}>
                <h1>Hello Homepage!</h1>
                <ul>{this.renderList(data.test)}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.test
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getList: () => {
//             dispatch(testList())
//         },
//         getOne: () => {
//             dispatch(getOneFromList())
//         }
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ testList, getOneFromList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);