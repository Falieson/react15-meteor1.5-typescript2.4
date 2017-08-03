// FIXME: export default from './TasksModule'  <-- all of these should work
// export {default as Header} from './TasksHeaderComponent'
// export {default as Item} from './TasksItemComponent'
// export {default as List} from './TasksListComponent'

import Header from './TasksHeaderComponent'
import Item from './TasksItemComponent'
import List from './TasksListComponent'
import TasksModule from './TasksModule'

export interface ITask {
  _id?: string,
  archived?: boolean,
  completed?: boolean,
  createdAt?: Date,
  createdBy: string,
  listId: string,
  name: string,
  updatedAt?: Date,
}

export class TaskItem {
  // NOTE: public's below were private but received this error
  // Argument of type 'TaskItem' is not assignable to parameter of type 'ITask'.
  // Property '_id' is private in type 'TaskItem' but not in type 'ITask'.'
  public _id?: string // tslint:disable-line:variable-name
  public archived?: boolean
  public completed?: boolean
  public createdAt?: Date
  public createdBy: string
  public listId: string
  public name: string
  public updatedAt?: Date

  constructor({
    name = 'Task Name',
    listId = 'List ID',
    createdBy = 'Author Name',
  })  {
    const today: Date = new Date()

    this._id = `${Math.floor((Math.random() * 100) + 1)}${Math.floor((Math.random() * 100) + 1)}`
    this.listId = listId
    this.name = name
    this.completed = false
    this.archived = false
    this.createdBy = createdBy
    this.createdAt = today
    this.updatedAt = today
  }
}

export {
  Header,
  Item,
  List,
}
export default TasksModule
