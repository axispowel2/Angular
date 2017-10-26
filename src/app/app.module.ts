import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { GetphotoService } from './services/getphoto.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MostPopularMovie2018Component } from './components/most-popular-movie2018/most-popular-movie2018.component';

const appRoutes: Routes = [
  { path: "", component: UserComponent },
  { path: "about", component: AboutusComponent },
  { path: "movie2018", component: MostPopularMovie2018Component }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    MostPopularMovie2018Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
