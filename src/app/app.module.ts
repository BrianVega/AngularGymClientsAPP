import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MegaMenuModule } from 'primeng/megamenu';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientsNextToPayComponent } from './clients-next-to-pay/clients-next-to-pay.component';
import { ClientPaymentUpdateComponent } from './clients-next-to-pay/client-payment-update/client-payment-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientDetailComponent,
    ClientsNextToPayComponent,
    ClientPaymentUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
