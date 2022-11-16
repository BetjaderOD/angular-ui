import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/navigation/navigation.component';
// @ts-ignore
import { AuthComponent } from './personal/service/auth/auth.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {materialModules} from "./types/material-modules";
import {appRouterModule} from "./shared/routers/app-routers.module";
import {AuthModule} from "./modules/auth/auth.module";
import {PersonalModule} from "./modules/personal/personal.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    appRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule,
    PersonalModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
