import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbookComponent } from './listbook/listbook.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './service/users.service';
import { BookserviceService } from './service/bookservice.service';
import { ShowbuybookComponent } from './showbuybook/showbuybook.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AllusersComponent } from './allusers/allusers.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    LoginComponent,
    RegisterComponent,
    ShowbuybookComponent,
    AddbookComponent,
    AddauthorComponent,
    AllusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, BookserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
