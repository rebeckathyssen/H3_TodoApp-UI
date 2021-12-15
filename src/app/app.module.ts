import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Modules/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { TopthreeComponent } from "./Modules/ColumnOne/topthree/topthree.component";
import { TodoComponent } from "./Modules/ColumnOne/todo/todo.component";
import { NotesComponent } from "./Modules/ColumnOne/notes/notes.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WaterComponent } from "./Modules/ColumnTwo/water/water.component";
import { ActivitiesComponent } from "./Modules/ColumnTwo/activities/activities.component";
import { CatsComponent } from "./Modules/ColumnTwo/cats/cats.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopthreeComponent,
    TodoComponent,
    NotesComponent,
    WaterComponent,
    ActivitiesComponent,
    CatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
