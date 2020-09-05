import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './navegation/navegation.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemNotFoundComponent } from './item-not-found/item-not-found.component';
import { HomeComponent } from './home/home.component';
import { AddquantityComponent } from './updating/addquantity/addquantity.component';
import { WithdrawalquantityComponent } from './updating/withdrawalquantity/withdrawalquantity.component';
import { DeleteitemComponent } from './updating/deleteitem/deleteitem.component';
import { ViewitemComponent } from './viewitem/viewitem.component';
const appRoutes: Routes = [
  {
    path: 'Items',
    component: ItemsComponent
  },
  {
    path: 'viewitem',
    component: ViewitemComponent
  },
  {
    path: 'Add-Item',
    component: AddItemComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'updating/addquantity',
    component: AddquantityComponent
  },
  {
    path: 'updating/withdrawalquantity',
    component: WithdrawalquantityComponent
  },
  {
    path: 'updating/deleteitem',
    component: DeleteitemComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: '',
    component: ItemsComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    ItemsComponent,
    AddItemComponent,
    ItemNotFoundComponent,
    HomeComponent,
    AddquantityComponent,
    WithdrawalquantityComponent,
    DeleteitemComponent,
    ViewitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
