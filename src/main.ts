import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgModule} from "@angular/core";
@NgModule({
  declarations: [
    // ваш компонент
  ],
  imports: [
    // другие модули
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [/* ваш компонент */]
})
export class AppModule { }
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
