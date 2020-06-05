import React from 'react';

export default class InputComp extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            textArr: [],
            value: ''
        }
    }

    onChangeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    onClickHandler(e) {
        let textArr = [...this.state.value];
        this.setState({
            textArr
        })
    }

    render () {
        return (
            <React.Fragment>
            <input type="text" value={this.state.value} onChange={this.onChangeHandler}/> <br />
            <button type="button" onClick={this.onClickHandler} > Click Me </button>
             <div> {this.state.textArr.join(',')}</div>
             </React.Fragment>
        )
    }
}
