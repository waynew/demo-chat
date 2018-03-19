
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ChatComponent } from './chat/chat.component';
import { DataService } from './data.service';
import { MentionsComponent } from './mentions/mentions.component';
import { NicksService } from './nicks.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [DataService, NicksService],
  declarations: [ AppComponent, ChatComponent, MentionsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}