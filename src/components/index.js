import PropTypes from 'prop-types';
import React from 'react';
import { assign, sortBy } from "lodash";

import Row from "./Row";
import HeaderRow from "./Headers";
import { ascending, descending } from "./constants";

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        direction: ascending,
        type: null
      },
      data: props.data || []
    }
  }

  componentDidMount() {
      const firstCol = this.props.columns[0];
      if (!firstCol) return;
      this.setState({sort: {
        direction: ascending,
        type: firstCol.prop
      }})
  }
  componentDidUpdate(prevProps, prevState) {
    const prevSort = prevState.sort;
    const sort = this.state.sort;
    const dataChange = this.props.data.length !== prevProps.data.length;
    const sortChange = prevSort.direction !== sort.direction || prevSort.type !== sort.type;
    if ( sortChange || dataChange ) {
      this.sortData();
    }

  }

  changeSort = (type) => {
    const currentSort = this.state.sort;

    let direction = ascending;
    if (currentSort.type === type) {
      direction = currentSort.direction === ascending ? descending : direction;
    }
    this.setState({sort: {type, direction}});
  }

  sortData = () => {
    const sort = this.state.sort;
    let data = sortBy(this.props.data, sort.type);
    if (sort.direction === descending ) {
      data.reverse();
    }
    this.setState({data});
  }
  getStyling = () => {
    const styles = {};
    if (this.props.width) {
      styles.width = this.props.width;
    }
    if (this.props.height) {
      styles.height = this.props.height;
    }

    return styles;
  }

  render() {
    const { columns } = this.props;
    const { sort, data } = this.state;
    const styling = this.getStyling();

    return (
      <div className="table" style={styling}>
          <HeaderRow sort={sort} changeSort={(type) => this.changeSort(type)} columns={columns}/>
          <div className="table-body" style={styling}>
            {data && data.map((item, index) => (
              <Row color={this.props.color} key={index} data={item} columns={columns}/>
            ))}
          </div>

      </div>
    );
  }
}

SortableTable.propTypes = {
  color: PropTypes.string,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  width: PropTypes.number
};

export default SortableTable;
