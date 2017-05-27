import React, { Component } from 'react';

import Station from './nearby_stations/station';
import PageItem from './page_item';

class Paginate extends Component {
  constructor(props) {
    super(props);
    this.pageDown = this.pageDown.bind(this);
    this.pageUp = this.pageUp.bind(this);
    this.state = {page: this.props.page };
  }

  pageDown() {
    let { page } = this.state;
    page -= 1;
    const newPage = page < 0 ? 0 : page;

    this.setState({page: newPage});
  }

  pageUp() {
    const { page } = this.state;
    this.setState({page: page + 1});
  }

  render() {
    const page = this.state.page;
    const { size } = this.props;
    const stations = this.props.children.slice(page * size, (page*size) + size);

    return(
      <div>
        <PageItem
          currentPage={page}
          total={this.props.children.size}
          pageUp={this.pageUp}
          pageDown={this.pageDown}
        />
        {
          stations.map((station) => {
            return(
              <Station key={station.get("BusStopCode")}
              stationCode={station.get("BusStopCode")}
              description={station.get("Description")}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Paginate;