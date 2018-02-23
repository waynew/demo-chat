import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { IChat } from '../../model/chat';

// class Chat implements IChat {}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit 
{
  chatCollection: AngularFirestoreCollection<IChat>;
  chats: Observable<IChat[]>;
  model: IChat;

  resetModel(){
  	this.model = {} as IChat;
  }

  constructor(db: AngularFirestore) {
    this.chatCollection = db.collection<IChat>('chat')
    this.chats = this.chatCollection.valueChanges();

    this.resetModel();
  }

  onSubmit() {
  	this.model.dateCreated = firebase.firestore.FieldValue.serverTimestamp()
  	this.chatCollection.add(this.model);
  	this.resetModel();
  }

  ngOnInit() {
  }

}
