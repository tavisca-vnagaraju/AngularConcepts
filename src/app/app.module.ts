import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ngfModule } from "angular-file"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';
import { ContentTableComponent } from './content-table/content-table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiblingOneComponent } from './sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './sibling-two/sibling-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropDirective } from './drag-drop.directive';
import { DragAndDropPart2Component } from './drag-and-drop-part2/drag-and-drop-part2.component';
import { SibblingThreeComponent } from './sibbling-three/sibbling-three.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationTabComponent,
    ContentTableComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    SiblingOneComponent,
    SiblingTwoComponent,
    DragAndDropComponent,
    DragDropDirective,
    DragAndDropPart2Component,
    SibblingThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ngfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
