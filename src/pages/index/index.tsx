import { Component } from "react";
import { View, CustomWrapper } from "@tarojs/components";
import Demo from "../../components/Demo";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <CustomWrapper>
          <Demo>Only One Custom Wrapper</Demo>
        </CustomWrapper>
        <CustomWrapper>
          <CustomWrapper>
            <Demo>Nested Custom Wrapper</Demo>
          </CustomWrapper>
        </CustomWrapper>
      </View>
    );
  }
}
