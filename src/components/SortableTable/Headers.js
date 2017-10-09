import PropTypes from 'prop-types';
import React from 'react';

import { find, isUndefined, map } from "lodash";
import { ascending } from "./constants";

require("./style.css");

class SortableTableHeaderRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { columns } = this.props;

    return (
      <div className="table-row">
        {map(columns, (d, k) => {
            return (
              <div key={k} onClick={() => {this.props.changeSort(d.prop)}} className="table-item table-header">
                {d.label.toUpperCase()}
                {this.props.sort && this.props.sort.type === d.prop && (this.props.sort.direction === ascending ? "\u2191" : "\u2193")}
              </div>
            );
        })}
      </div>
    );
  }
}

SortableTableHeaderRow.propTypes = {
  columns: PropTypes.array.isRequired,
  changeSort: PropTypes.func,
  sort: PropTypes.object
};

export default SortableTableHeaderRow;
