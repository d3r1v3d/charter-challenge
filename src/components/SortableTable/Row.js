import PropTypes from 'prop-types';
import React from 'react';

import { find, isUndefined, map } from "lodash";

require("./style.css");

class SortableTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { columns, data } = this.props;

    return (
      <div className="table-row">
        {map(data, (d, k) => {
          const col = find(columns, {prop: k});
          if (isUndefined(col)) return null;
          if (col.render) {
            return (<div key={k} className="table-item">
              {col.render(data)}
            </div>
            )
          } else {
            return (
              <div key={k} style={this.props.color ? {color: this.props.color} : {}} className="table-item">{d}</div>
            )
          }
        })}
      </div>
    );
  }
}

SortableTableRow.propTypes = {
  data: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  color: PropTypes.string
};

export default SortableTableRow;
