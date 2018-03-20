import { Injectable, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import instantsearch from 'instantsearch.js/es';

@Injectable()
export class NicksService implements OnInit {
  search = instantsearch({
    apiKey: '8a4b15ad01cd143aef0a0583bcae9a4a',
    appId: 'NF028XNY4U',
    indexName: 'sketchdeck_chat_users',
    searchParameters: {'hitsPerPage': 7},
  });

  @Output() results: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(){
    var svc = this;
    this.search.addWidget({
      render: function(opts) {
        svc.results.emit(opts.results.hits);
      }
    });
    this.search.start();
    this.search.searchParameters.hitsPerPage = 7;
  }
}
