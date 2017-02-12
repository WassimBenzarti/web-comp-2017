import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment;
  constructor() { }

  ngOnInit() {
  }

}
