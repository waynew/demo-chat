import { Component, OnInit, AfterViewChecked, Inject, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { Subscription } from 'rxjs/Subscription';
import * as firebase from 'firebase';

import { IChat } from '../../model/chat';
import { DataService } from '../data.service';
import { NicksService } from '../nicks.service';

// class Chat implements IChat {}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked
{
  chatCollection: AngularFirestoreCollection<IChat>;
  chat$: Observable<IChat[]>;
  model: IChat;
  nickService: NicksService;

  user$: Observable<Object>;
  userObject: Object;

  @Output() changed: EventEmitter<any> = new EventEmitter();

  @ViewChild('chatStream') private container: ElementRef;

  resetModel(){
  	this.model = {} as IChat;
  }

  constructor(
    db: AngularFirestore, 
    data: DataService,
    nickService: NicksService
  ) 
  {
    this.nickService = nickService;
    this.chatCollection = db.collection<IChat>('chat', ref => ref.orderBy("dateCreated"))
    this.chat$ = this.chatCollection.valueChanges();
    this.user$ = data.getUser();

    this.chat$.subscribe(() => {this.scrollToBottom()})

    this.resetModel();
  }

  scrollToBottom(): void {
      try {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
      } catch(err) { 
        console.error(err);
        console.log(this.container);
      }                 
    }

  ngOnInit() {
    this.user$.first().subscribe( (u) => this.userObject = u );
    this.scrollToBottom();
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  onSubmit() {

    if (this.model.text != "" && this.model.text != undefined) {
    	this.model.dateCreated = firebase.firestore.FieldValue.serverTimestamp()
      this.model.from = this.userObject;
      this.chatCollection.add(this.model);
      this.resetModel();
      this.scrollToBottom();
    }
   
  }

  checkText(event) {
    if (this.model.text.indexOf(' ') > 0){
      this.nickService.search.helper.setQuery('').search({
        searchParameters: {'hitsPerPage': 0},
      });
    }
    else if (this.model.text[0] == '@' && this.model.text.length > 3){
      this.nickService.search.helper.setQuery(this.model.text.slice(1, this.model.text.length)).search({
        searchParameters: {'hitsPerPage': 7}
      });
    }
  }

  public tracker(index, item):any {
    return item.$id;
  }

  


}
