import { Component } from 'react';
import './item-status-filter.css';

export class ItemStatusFilter extends Component {
  render() {
    const { itsDone, itsAll, itsActive } = this.props;
    return (
      <div className="btn-group">
        <button type="button"
          className="btn btn-info" onClick={itsAll}>All</button>
        <button type="button"
          className="btn btn-outline-secondary" onClick={itsActive}>Active</button>
        <button type="button"
          className="btn btn-outline-secondary" onClick={itsDone}>Done</button>
      </div>
    );
  }
}

