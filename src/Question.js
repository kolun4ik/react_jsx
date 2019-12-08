import React from 'react';

const Question = props => {
  return (
    <div className="ui divided items">
      <div className="item">
        <div className="image">
          <p>Vote    Questions</p>
        </div>
        <div className="content">
          <a className="header" fref="#">{props.header}</a>
          <div className="description">
            <p>{props.description}</p>
          </div>
          <div className="extra">
            <div className="ui label">Java</div>
            <div className="ui label">Python</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;