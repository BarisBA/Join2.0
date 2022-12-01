import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  tasks = ['Tasks in Board','Tasks in  Progress','Awaiting Feedback']
  todos = ['To-do', 'Done']

  constructor() { }

  ngOnInit(): void {
  }

}
