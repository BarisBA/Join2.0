import { Component, OnInit } from '@angular/core';
import { Task } from 'src/assets/models/task.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task = new Task();

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  addTask() {
    this.firestore
    .collection('tasks')
    .add(this.task.toJson())
    .then((result: any) => {
      console.log('task added', result);
    })
  }

}
