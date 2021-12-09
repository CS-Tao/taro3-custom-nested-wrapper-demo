import { Component } from "react";
import { View, Button } from "@tarojs/components";

export default class Demo extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View>
        <View>{this.state.count}</View>
        <Button
          onClick={this.handleClick}
          style={{ backgroundColor: "#3370ff" }}
        >
          {this.props.children}
        </Button>
      </View>
    );
  }
}
