import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
 // @ts-ignore
  todos: Todo[]

  // @ts-ignore
  message:string

  constructor(
    private todoService: TodoDataService,
  ) {
  }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('keles').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo('keles',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos();
      }
    )
  }

}
