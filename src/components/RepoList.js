import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Header } from 'semantic-ui-react'
import Moment from 'moment'


export default class RepoList extends Component {
  state = {
    column: null,
    data: this.props.repos,
    direction: null,
    user: this.props.user
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, user, direction } = this.state

    return (
    <div>
     <Header as='h2' content={user} subheader='click to sort' />
    
      <Table sortable celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>
              Repo
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'createdAt' ? direction : null} onClick={this.handleSort('createAt')}>
              Date Created
            </Table.HeaderCell>
            <Table.HeaderCell >
              Url
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ createdAt, url, name }) => (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{Moment(createdAt).format('MM/DD/YYYY')}</Table.Cell>
              <Table.Cell><a href={url}>{url}</a></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
    )
  }
}
