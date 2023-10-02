import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AbcModule } from './abc/abc.module';
//import { AbcComponent } from './abc/abc.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    AbcModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
