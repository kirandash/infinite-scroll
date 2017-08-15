import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { ImageService } from './image.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { ImagesListComponent } from './images-list/images-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesListComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
