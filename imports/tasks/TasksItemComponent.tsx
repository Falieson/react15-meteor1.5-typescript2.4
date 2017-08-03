import * as React from 'react'
import {ITask} from './'

interface IProps {
  task: ITask,
}

class TasksItem extends React.Component<IProps, {}> {
  public render() {
    const {name} = this.props.task
    return (
      <li>
        {name}
      </li>
    )
  }
}

export default TasksItem
