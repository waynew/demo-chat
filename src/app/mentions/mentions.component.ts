import { Component, OnInit, Input } from '@angular/core';
import { NicksService } from '../nicks.service';


@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {
  @Input() partial_nick: String;
  state: { hits: {}[]} = { hits: []};

  constructor(public nickService: NicksService) { }

  hasPartialNick(){
    if (typeof this.partial_nick !== 'undefined'){
      if (this.partial_nick.indexOf(' ') > 0){
        return false;
      }
      return this.partial_nick[0] == '@' && this.partial_nick.length > 3;
    }
  }

  ngOnInit() {
    var mentions = this;
		this.nickService.search.addWidget({
			render: function(opts) {
        console.log(opts.results.hits);
        mentions.state.hits = opts.results.hits;
			}
		});
    this.nickService.search.start();
  }
}
