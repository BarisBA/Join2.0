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

  tasks = [];
  inProgress = [];
  awaitingFeedback = [];
  done = [];

  task = new Task();

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('tasks')
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.tasks = changes;
      });
      this.firestore
      .collection('inProgress')
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.inProgress = changes;
      });
      this.firestore
      .collection('awaitingFeedback')
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.awaitingFeedback = changes;
      });
      this.firestore
      .collection('done')
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.done = changes;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
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
  }
}