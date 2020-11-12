import { Component } from 'react';

export class ButtonPanel extends Component {

    render() {
        return (<div>
            <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => this.props.addItem('HELLO WORLD')}
            >Add the Task</button>
        </div>
        );
    }
}