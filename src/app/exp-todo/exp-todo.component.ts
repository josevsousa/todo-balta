import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isObservable } from 'rxjs';
import { iTodo } from '../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './exp-todo.component.html',
  styleUrls: ['./exp-todo.component.css']
})
export class TodoComponent {

  public todos: iTodo[] = [];
  
  //FORM
  public formulario: FormGroup;

  constructor( private formBuilder: FormBuilder ){
    this.formulario = this.formBuilder.group({
      tarefa: [ null, [Validators.required, Validators.minLength(3)] ]
    });

    // load no localStorage
    this.load();
  }


  load(){
   const data = localStorage.getItem('todos');
   if(data){
    this.todos = JSON.parse(data);
   }else{
    this.todos = [];
   }
  //  this.todos = (JSON.parse(String(data)));
  }

  add(){
    //const tarefa = this.formulario.value; // => { tarefa: 'xxx' }
    const tarefa = this.formulario.controls['tarefa'].value; 
    const id = this.todos.length + 1;
    this.todos.push( { id: id, tarefa: tarefa, done: false });
    this.salvar();
    this.formulario.reset();
  }

  remove(todo: iTodo){
    //pegando o index do item da lista
    const index = this.todos.indexOf(todo);

    //se achar o index na lista 
    if(index !== -1){
      // remove intem da lista ( index, qtd de itens a ser removido )
      this.todos.splice(index, 1);
      this.salvar();
    }
  }

  salvar(){
    const dados = JSON.stringify(this.todos);
    console.log(dados);
    localStorage.setItem('todos', dados);
  }


  markAsDone(todo: iTodo){
    todo.done = true;
    this.salvar();

  }

  markAsUnDone(todo: iTodo){
    todo.done = false;
    this.salvar();
  }
}
