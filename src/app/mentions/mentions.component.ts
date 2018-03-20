import { Component, OnInit, Input } from '@angular/core';
import { NicksService } from '../nicks.service';
import { connectHits } from 'instantsearch.js/es/connectors';


@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {
  @Input() current_text: String;
  state: { hits: {}[]} = { hits: []};

  constructor(public nickService: NicksService) { }

  hasPartialNick(){
    if (typeof this.current_text !== 'undefined'){
      if (this.current_text.indexOf(' ') > 0){
        return false;
      }
      return this.current_text[0] == '@' && this.current_text.length > 3;
    }
  }

  ngOnInit() {
    const widget = connectHits(this.updateState);
    this.nickService.search.addWidget(widget());
    this.nickService.search.start();
  }

  updateState = (state, isFirstRendering) => {
    if (isFirstRendering){
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }
    else {
      this.state = state;
    }
  }
}
