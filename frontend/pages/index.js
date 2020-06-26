import React from 'react'
import RestaurantList from '../component/RestaurantList'
import { Button, Alert, Row, Col, InputGroup, InputGroupAddon, Input} from 'reactstrap'
import Layout from '../component/Layout'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }
  onChange(e) {
    this.setState({query: e.target.value.toLowerCase()});
  }
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col>
            <div className="search">
              <InputGroup>
                <InputGroupAddon addonType="append">Search</InputGroupAddon>
                <Input onChange={this.onChange.bind(this)} />
              </InputGroup>
            </div>
            <RestaurantList search={this.state.query} />
          </Col>
        </Row>
        <style jsx>
          {`
            .search {
              margin: 20px;
              width: 500px;
            }
          `}
        </style>
      </div>
    )
  }
}
export default Index;