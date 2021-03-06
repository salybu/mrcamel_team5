import React, { Component } from "react";
import styled from "styled-components";
import CheckBoxFilter from "./CheckBoxFilter";
import SortFilter from "./SortFilter";

const Container = styled.div``;

export default class index extends Component {
  render() {
    return (
      <Container>
        <CheckBoxFilter
          brandList={this.props.brandList}
          handleFilter={this.props.handleFilter}
          filterOptions={this.props.filterOptions}
        />
        <SortFilter handleFilter={this.props.handleFilter} />
      </Container>
    );
  }
}
