import React, { Component } from 'react';

export class ButtonPanel extends Component {
    state = {
        label: '',
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        this.props.addItem(this.state.label);
        e.preventDefault();
    }
    render() {
        return (<form>
            <input type="textarea" onChange={this.onLabelChange}>
            </input>
            <button type="submit"
                className="btn btn-secondary"
                onClick={this.onSubmit}>

                Add new task
                </button>
        </form>
        );
    }
}