import { Component, OnInit, OnDestroy } from '@angular/core';
import { EditorChoiceData } from '../editor-choice-panel/edtor-choice-data.model';
import { animations } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [animations]
})

export class ArticleComponent {

  articleData: EditorChoiceData;
  articleParas: any = [];

  constructor(private router: Router) {
    // Data passed from navigate from history
    this.articleData = history.state.data;
    if (this.articleData) {
      this.prepareDataToShow();
    } else {
      this.router.navigate(['/']);
    }

  }


  prepareDataToShow() {
    const paras = this.articleData.article.split('|');
    for (const para of paras) {
        this.articleParas.push(para.replace(/<br\/>/gi, '\n'));
      }
  }

  onBackToTop() {
    try {
     window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
     } catch (e) {
      window.scrollTo(0, 0);
      }
  }

}
