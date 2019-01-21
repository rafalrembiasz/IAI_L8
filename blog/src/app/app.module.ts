import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {RouterModule, Routes} from '@angular/router';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent
  }

];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    MapComponent,
    QuizComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogComponent,
    BlogItemDetailComponent,
    FilterPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
