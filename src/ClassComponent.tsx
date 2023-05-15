import { Component } from "react";
import "./App.css";

interface ICounterState {
  count: number;
}

class App extends Component<{}, ICounterState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<ICounterState>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate", nextProps, nextState, nextContext);
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<ICounterState>
  ) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<ICounterState>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        <h2>React Lifecycle function demo</h2>
        <div className="card">
          <button
            onClick={() =>
              this.setState((state) => {
                return { ...state, count: state.count + 1 };
              })
            }
          >
            count is {this.state.count}
          </button>
        </div>
      </>
    );
  }
}

export default App;
