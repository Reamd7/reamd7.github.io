/**
 * classComponentLifeCycle Components Props
 * @typedef {{}} classComponentLifeCycleProps
 */
/**
 * classComponentLifeCycle Components state
 * @typedef {{
 *  updateString: string
 * }} classComponentLifeCycleState
 */

/**
 * classComponentLifeCycle
 * @type {React.ComponentClass<classComponentLifeCycleProps, classComponentLifeCycleState>}
 */
class classComponentLifeCycle extends React.Component {
  state = {
    updateString: "hello world",
  };
  onClick = () => {
    this.setState((state) => ({
      updateString: "hello world" + Date.now(),
    }));
  };

  /**
   * 挂载阶段: constructor -> static getDerivedStateFromProps -> render -> componentDidMount
   * @param {classComponentLifeCycleProps} props 组件Props
   */
  constructor(props) {
    super(props);
    console.log("classComponentLifeCycle 挂载阶段 : constructor");
  }

  // `getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 `null` 则不更新任何内容。
  // 此方法适用于[罕见的用例](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)，即 state 的值在任何时候都取决于 props。例如，实现 `<Transition>` 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。
  // 派生状态会导致代码冗余，并使组件难以维护。 [确保你已熟悉这些简单的替代方案：](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
  // - 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 [`componentDidUpdate`](https://react.docschina.org/docs/react-component.html#componentdidupdate)。
  // - 如果只想在 **prop 更改时重新计算某些数据**，[请使用 memoization helper 代替](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)。
  // - 如果你想**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替。
  // 此方法无权访问组件实例。如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在`getDerivedStateFromProps()`和其他 class 方法之间重用代码。
  // 请注意，不管原因是什么，都会在**每次**渲染前触发此方法。这与 `UNSAFE_componentWillReceiveProps` 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 `setState` 时。
  /**
   * state 的值在任何时候都取决于 props
   * - 执行副作用，以响应props的更改，请用 componentDidUpdate
   * - props 更改时候重新计算，请用记忆函数
   * - props 时候重置 state，请用受控组件 / 用动态key使得组件修改之后
   * @param {classComponentLifeCycleProps} props
   * @param {classComponentLifeCycleState} state
   */
  static getDerivedStateFromProps(props, state) {
    console.log("classComponentLifeCycle getDerivedStateFromProps");
  }
  render() {
    console.log("classComponentLifeCycle render");
    const state = this.state;
    return (
      <div>
        This is UpdateString
        <div onClick={this.onClick}>{state.updateString}</div>
      </div>
    );
  }
  componentDidMount() {
    console.log("classComponentLifeCycle componentDidMount");
  }

  /**
   * 更新阶段：static getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
   */
  /**
   * 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。
   * @param {classComponentLifeCycleProps} nextProps
   * @param {classComponentLifeCycleState} nextState
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("classComponentLifeCycle shouldComponentUpdate");
    // PureComponent 默认行为
    if (this.props !== nextProps || this.state !== nextState) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 在最近一次渲染输出（提交到 DOM 节点）之前调用
   * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
   * @param {classComponentLifeCycleProps} prevProps
   * @param {classComponentLifeCycleState} prevState
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("classComponentLifeCycle getSnapshotBeforeUpdate");
    return [
      [prevProps, this.props, prevProps === this.props],
      [prevState, this.state, prevState === this.state],
    ];
  }
  /**
   * componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。
   * 当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。
   * （例如，当 props 未发生变化时，则不会执行网络请求）
   * 
   * @param {classComponentLifeCycleProps} prevProps 
   * @param {classComponentLifeCycleState} prevState 
   * @param {*} snapshot （这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("classComponentLifeCycle componentDidUpdate");
    console.log()
  }
}
