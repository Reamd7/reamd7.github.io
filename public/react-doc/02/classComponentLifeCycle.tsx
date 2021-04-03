
import React from "react";
type ComponentTestProps = {
  test: boolean;
  quiet?: boolean;
  name: string;
};
type ComponentTestState = {
  updateString: string;
};
class ComponentTest extends React.Component<
  ComponentTestProps,
  ComponentTestState
> {
  props: ComponentTestProps;
  static defaultProps = {
    test: true,
    quiet: false,
    name: undefined, // 错误的根源
  };
  state = {
    updateString: "hello world",
  };

  constructor(props: ComponentTestProps) {
    super(props);
    this.props = props;
  }
}
function Main() {
  return <ComponentTest />; // 这里不会 ts Error, 但是运行时会有 error ，如果没有处理name的情况而完全相信ts的情况下。
}
