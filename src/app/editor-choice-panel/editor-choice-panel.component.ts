import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { EditorChoiceData } from './edtor-choice-data.model';
import { animations } from '../animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editor-choice-panel',
  templateUrl: './editor-choice-panel.component.html',
  styleUrls: ['./editor-choice-panel.component.css'],
  animations: [animations]
})
export class EditorChoicePanelComponent implements OnInit {
  @Input() editorChoiceDetail: EditorChoiceData;

  constructor(private router: Router) {}

  ngOnInit() {
  }
  onReadClick() {
    this.router.navigate(['article'], {state: {data: this.editorChoiceDetail}});
  }

}
