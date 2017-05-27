import React, { Component } from 'react';

class PageItem extends Component {
  constructor(props){
    super(props);
    this.isNextDisabled = this.isNextDisabled.bind(this);
    this.isPreviousDisabled = this.isPreviousDisabled.bind(this);
  }

  isPreviousDisabled() {
    const { currentPage } = this.props;

    if (currentPage === 0) return true;
  }

  isNextDisabled() {
    const { currentPage } = this.props;
    const { total } = this.props;

    if (currentPage === total) return true;
  }

  render() {
    return(
      <ul className="pagination">
        <li className="page-item page-prev">
          <a href="#" onClick={()=>{this.props.pageDown()}} disabled={this.isPreviousDisabled()}>
            <p className="page-item-subtitle">Previous</p>
          </a>
        </li>
        <li className="page-item page-next">
          <a href="#" onClick={()=>{this.props.pageUp()}} disabled={this.isNextDisabled()}>
            <p className="page-item-subtitle">Next</p>
          </a>
        </li>
      </ul>
    );
  }
}

export default PageItem;