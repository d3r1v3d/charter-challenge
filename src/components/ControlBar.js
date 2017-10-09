import PropTypes from 'prop-types';
import React from 'react';

require("./styles.css")

const ControlBar = (props) => (
        <div className="control-bar" style={props.color ? {backgroundColor: props.color, color: "white"} : {color: "black"}}>
          <div className="control-bar-item">
            <b>User</b>
            <div className="user-name control-bar-item-value">
              <a className="user-link" target="_blank" href={`http://github.com/${props.user}`}>
                {props.user.toUpperCase()}
              </a>
            </div>
          </div>
          <div className="control-bar-item">
            <b>Filter by Name</b>
            <input className="control-bar-filter control-bar-item-value" onChange={(v) => {props.updateFilter(v.target.value)}}/>
          </div>
          <div className="control-bar-item">
            <b>Change Colors!</b>
            <input type="color" className="control-bar-filter control-bar-item-value" onChange={(v) => {props.updateColor(v.target.value)}}/>
          </div>
        </div>
    );

ControlBar.propTypes = {
  updateFilter: PropTypes.func,
  updateColor: PropTypes.func,
  user: PropTypes.string,
  color: PropTypes.string
};

export default ControlBar;
