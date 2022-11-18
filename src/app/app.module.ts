import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// @ts-ignore
import { AuthComponent } from './personal/service/auth/auth.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {materialModules} from "./types/material-modules";
import {appRouterModule} from "./shared/routers/app-routers.module";
import {AuthModule} from "./modules/auth/auth.module";
import {PersonalModule} from "./modules/personal/personal.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";


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
    HttpClientModule,
    AuthModule,
    PersonalModule,MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ...materialModules,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
