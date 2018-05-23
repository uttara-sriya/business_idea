import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { TechComponent } from './tech/tech.component';
import { HttpModule } from '@angular/http';
import { GameComponent } from './game/game.component';
import { AiComponent } from './ai/ai.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BookComponent } from './book/book.component';
import { DevComponent } from './dev/dev.component';
import { IotComponent } from './iot/iot.component';
import { TouchbarComponent } from './touchbar/touchbar.component';
import { VrComponent } from './vr/vr.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const appRoutes: Routes = [
  { 
    path: 'tech', //localhost/app
    component: TechComponent
  },
  { 
    path: 'game', //localhost/app
    component: GameComponent
  },
  { 
    path: 'ai', //localhost/app
    component: AiComponent
  },
  { 
    path: 'analytics', //localhost/app
    component: AnalyticsComponent
  },
  { 
    path: 'book', //localhost/app
    component: BookComponent
  },
  { 
    path: 'dev', //localhost/app
    component: DevComponent
  },
  { 
    path: 'iot', //localhost/app
    component: IotComponent
  },
  { 
    path: 'touchbar', //localhost/app
    component: TouchbarComponent
  },
  { 
    path: 'vr', //localhost/app
    component: VrComponent
  },
  { 
    path: '', //localhost/app
    component: IdeasComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    TechComponent,
    GameComponent,
    AiComponent,
    AnalyticsComponent,
    BookComponent,
    DevComponent,
    IotComponent,
    TouchbarComponent,
    VrComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
