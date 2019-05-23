import React, { Component } from "react";

class EventListItem extends Component {
  state = {};
  render() {
    return (
      <a href="#" className="list-group-item list-group-item-action active">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </a>
    );
  }
}

export default EventListItem;
