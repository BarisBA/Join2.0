import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/assets/models/task.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  todo = [];
  inProgress = [];
  awaitingFeedback = [];
  done = [];

  task = new Task();

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('tasks', ref => ref.where('list', '==', 'todo'))
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.todo = changes;
      });
      this.firestore
      .collection('tasks', ref => ref.where('list', '==', 'inProgress'))
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.inProgress = changes;
      });
      this.firestore
      .collection('tasks', ref => ref.where('list', '==', 'awaitingFeedback'))
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.awaitingFeedback = changes;
      });
      this.firestore
      .collection('tasks', ref => ref.where('list', '==', 'done'))
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.done = changes;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } 
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    // firestore.collection('tasks').doc(task.id).update((tasks.list: 'done'))
  }
}