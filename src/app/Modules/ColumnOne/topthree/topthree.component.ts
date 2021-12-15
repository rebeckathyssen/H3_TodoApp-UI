import { Component, OnInit, Input } from "@angular/core";
import { Todoitem } from "../../../Shared/Models/todoitem.model";
import { TodoService } from "../../../Shared/Services/todo.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as $ from "jquery";

@Component({
  selector: "app-topthree",
  templateUrl: "./topthree.component.html",
  styleUrls: ["./topthree.component.css"],
})
export class TopthreeComponent implements OnInit {
  TodoitemListBase: Todoitem[];
  TodoitemListEmpty: Todoitem[];
  todoitem: Todoitem;
  @Input() TodoList: Todoitem[];
  registerForm: FormGroup;

  constructor(
    public todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.todoService.List().subscribe((x) => {
      (this.TodoitemListBase = x), console.log(x);
    });

    this.todoitem = new Todoitem();

    this.registerForm = this.formBuilder.group({
      name: [""],
    });
  }

  createTodoItem() {
    this.todoitem = this.registerForm.value;
    this.todoService.createTodoItem(this.todoitem).subscribe((x) => {
      (this.todoitem = x), console.log(x);
    });
    window.location.reload();
  }

  updateTodoItem(todoitem: Todoitem) {
    todoitem.isComplete = true;
    this.todoService.updateTodoItem(todoitem).subscribe((x) => {
      (todoitem = x), console.log(x);
    });
  }
}
