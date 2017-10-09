import PropTypes from 'prop-types';
import React from 'react';
import { filter } from "lodash";

import SortableTable from './SortableTable';
import NoResults from "./NoResults";
import ControlBar from "./ControlBar";
require("./styles.css")

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      filter: "",
      color: null
    }
  }
  componentDidMount() {
    this.formatReposForTable();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.repos.length !== this.props.repos.length) {
      this.formatReposForTable();
    }
  }
  filterList = () => {
    const l = this.state.repos;
    const currentFilter = this.state.filter;
    return filter(l, (i) => {
      const reg = new RegExp(currentFilter, ["i"]);
      return reg.test(i.name)
    });
  }
  formatReposForTable = () => {
    const repos = this.props.repos;
    const user = this.props.user;

    const formatted = repos.map(r => {
      return {
        name: r.name,
        link: `http://www.github.com/${user}/${r.name}`,
        description: r.description
      }
    });
    this.setState({repos: formatted});
  }
  renderDescription = (item) => {
    return (
      <div className="description-item">
        {item.description}
      </div>
    )
  }
  renderLink = (item) => {
    return (
      <a target="_blank" href={item.link}>{item.link}</a>
    )
  }
  repoTableHeaders = () => {
    return [
      {label: "Name", prop: "name"},
      {label: "Link", prop: "link", render: this.renderLink},
      {label: "Description", prop: "description", render: this.renderDescription}
    ]
  }
  updateColor = (color) => {
    this.setState({color});
  }
  updateFilter = (filter) => {
    this.setState({filter});
  }
  render() {
    const { user } = this.props;
    const repos = this.filterList();

    return (
      <div>
        <ControlBar updateFilter={this.updateFilter}
                    updateColor={this.updateColor}
                    color={this.state.color}
                    user={user}/>
        {repos.length
            ? <SortableTable
                    width={1000}
                    height={450}
                    color={this.state.color}
                    data={repos}
                    columns={this.repoTableHeaders()}/>
            : <NoResults />}
      </div>
    );
  }
}

RepoList.propTypes = {
  user: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
};

export default RepoList;
