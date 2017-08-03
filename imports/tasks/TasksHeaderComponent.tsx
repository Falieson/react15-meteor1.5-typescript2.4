/* Tasks Header | React Meteor Example
(c) 2017 Florian Mettetal <florianmettetal.developer@gmail.com>

Output: TaskListName, TotalTasks, InputTasks

Inputs: Name, TotalTasks
*/

import * as React from 'react'
import {ITask, TaskItem} from './'

interface IProps {
  listName: string,
  totalTasks: number,
  actionNewTaskSubmit: (newTaskRecord: ITask, callback: () => void) => void,
}

interface IState {
  newTaskTitle: string
}

const styles = {
  container: {paddingBottom: '10px'},
  h2: {marginBottom: '10px'},
  subheader: {display: 'inline-flex'},
}

class TasksHeader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      newTaskTitle: '',
    };
  }

  public renderTaskHeader() {
    return (
      <div>
        <h2 style={styles.h2}>
          {this.props.listName} ({this.props.totalTasks})
        </h2>
      </div>
    )
  }

  public handleNewTaskName = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({newTaskTitle: e.currentTarget.value})
  }

  public handleTaskSubmit = () => {
    // NOTE: Using the TaskItem factory should really be done in the Smart/Container Component
    //  this will be fixed in redux branch
    const TaskRecord = new TaskItem({
      createdBy: 'Demo User',
      listId: 'list_0',
      name: this.state.newTaskTitle,
    })

    const resetTaskTitle = () => this.setState({newTaskTitle: ''})
    this.props.actionNewTaskSubmit(TaskRecord, resetTaskTitle)
  }

  public renderTaskInput(): React.ReactElement<{}> {
    return (
      <div>
        <input
          placeholder='New Task Name'
          name='app-tasks-inputTaskName'
          type='text'
          onChange={this.handleNewTaskName}
          value={this.state.newTaskTitle}
        />
      </div>
    )
  }

  public renderTaskSubmit(): React.ReactElement<{}> {
    return (
      <div>
        <input
          type='submit'
          onClick={this.handleTaskSubmit}
        />
      </div>
    )
  }

  public render() {
    return (
      <div style={styles.container}>
        {this.renderTaskHeader()}
        <div style={styles.subheader}>
          {this.renderTaskInput()}
          {this.renderTaskSubmit()}
        </div>
      </div>
    )
  }
}

export default TasksHeader
