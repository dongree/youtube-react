import React, { Component } from 'react';

class SearchBox extends Component {
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onUpdate(name);
    this.props.isOnHandle(false);
  };

  render() {
    return (
      <div className="searchBox">
        <i className="fab fa-youtube youtube-logo"></i>
        <span className="youtube-name">Youtube</span>
        <form className="search-form" onSubmit={this.onSubmit}>
          <input ref={this.inputRef} type="text" className="search-input" />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
