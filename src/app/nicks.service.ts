import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import instantsearch from 'instantsearch.js/es';

@Injectable()
export class NicksService {
  search = instantsearch({
    apiKey: '8a4b15ad01cd143aef0a0583bcae9a4a',
    appId: 'NF028XNY4U',
    indexName: 'sketchdeck_chat_users',
    searchParameters: {'hitsPerPage': 7},
  });

  constructor() { }

}
