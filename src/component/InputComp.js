import React from 'react';

export default class InputComp extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            value: '',
            todo: []
        }
    }

    onChangeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    onClickHandler(e) {

        this.setState({
            todo: [...this.state.todo, { title: this.state.value }]
        })
        this.state.value = '';
    }

    render () {
        return (
            <React.Fragment>
            <input type="text" value={this.state.value} onChange={this.onChangeHandler}/> <br />
            <button type="button" onClick={this.onClickHandler} > Click Me </button>
             {this.state.todo.length > 0 && this.state.todo.map((text)=>{
                 return <div>{text.title+','}</div>
             })}
             </React.Fragment>
        )
    }
}
