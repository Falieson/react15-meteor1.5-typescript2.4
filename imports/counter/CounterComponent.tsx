import * as React from 'react'

class CounterModule extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        Counter Module Placeholder
      </div>
    )
  }
}

export default CounterModule

// =================
// https://charleslbryant.gitbooks.io/hello-react-and-typescript/content/TypeScriptAndReact.html
// interface IMyComponentProps {
//     someDefaultValue: string
// }
//
// interface IMyComponentState {
//     someValue: string
// }
//
// export default class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
//     constructor(props: IMyComponentProps) {
//         super(props);
//         this.state = { someValue: this.props.someDefaultValue };
//     }

//     public render() {
//         return (
//             <div>
//                 Value set as {this.state.someValue}
//             </div>
//         );
//     }
// }
