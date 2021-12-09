# CustomWrapper 嵌套使用后失效 Demo

**页面结构**

```jsx
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
```

**问题描述**

- 点击第一个 Button(Demo1)，会触发 CustomWrapper 的 setData，符合预期
- 点击第二个 Button(Demo2)，会触发 Page 的 setData，不符预期

**演示**

![taro3-nested-custom-wrapper-demo.gif](https://github.com/CS-Tao/github-content/raw/master/contents/github/others/taro3-nested-custom-wrapper-demo.gif)
