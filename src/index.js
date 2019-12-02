import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App city="bj"/>, document.getElementById('root'));

    class FlavorForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: 'wh'};
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        render() {
            return (
                    <div>
                        <label>choose favorite city：
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="wh">武汉</option>
                                <option value="hz">杭州</option>
                                <option value="sh">上海</option>
                                <option value="wx">无锡</option>
                                <option value="nj">南京</option>
                                <option value="sz">苏州</option>
                                <option value="km">昆明</option>
                                <option value="dali">大理</option>
                            </select>
                        </label>
                        <div>chosen: {this.state.value}</div>
                        <div>
                        	<App city={this.state.value}/>
                        </div>
                    </div>
            )
        }
    }
    ReactDOM.render(<FlavorForm/>,document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
