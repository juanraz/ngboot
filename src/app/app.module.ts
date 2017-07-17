import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';

import { ChatService } from './chat.service';
import { MessagesService } from './messages.service';
import { ConstantsService } from './constants.service';
import { WebsocketService } from './websocket.service';


const appRoutes: Routes = [
  { path: 'chat',     component: ChatComponent },
  { path:'login',     component: LoginComponent },
  { path:'sign-up',   component: SignUpComponent },
  { path:'about',     component: AboutComponent },
  { path: '**',       component: PageNotFoundComponent},
  { path: '',         redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    HeaderComponent,
    MessageComponent,
    MessageListComponent,
    MessageItemComponent,
    UserListComponent,
    UserItemComponent,
    SideMenuComponent,
    PageNotFoundComponent,
    SignUpComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    Angular2FontawesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ChatService, MessagesService, ConstantsService,WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
