// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

// Set Up Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

// Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Modules
import { MaterialModule } from './material-module';

// Main App Component
import { AppComponent } from './app.component';

// Task Components
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';

// Layout Components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';

// Auth Components
import { SigninComponent } from './auth/signin/signin.component';

// App Routing Module

// Not Found Page
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    PageNotFoundComponent,
    TaskFormComponent,
    TaskListComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
