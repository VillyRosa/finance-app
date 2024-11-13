import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BannerComponent } from './components/banner/banner.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { PotsComponent } from './pages/pots/pots.component';
import { RecurringBillsComponent } from './pages/recurring-bills/recurring-bills.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuComponent as SideBarMenuComponent } from './components/side-bar/menu/menu.component';
import { IconComponent } from './components/icon/icon.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { OverviewCardComponent } from './pages/overview/overview-card/overview-card.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/table/pagination/pagination.component';
import { SelectComponent } from './components/select/select.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MoneyDisplayComponent } from './components/money-display/money-display.component';
import { PotComponent } from './pages/pots/pot/pot.component';
import { BollComponent } from './components/boll/boll.component';
import { RecurringBillsSummaryComponent } from './pages/recurring-bills/recurring-bills-summary/recurring-bills-summary.component';
import { RecurringBillsTotalCardComponent } from './pages/recurring-bills/recurring-bills-total-card/recurring-bills-total-card.component';
import { BudgetsSummaryComponent } from './pages/budgets/budgets-summary/budgets-summary.component';
import { BudgetsCardComponent } from './pages/budgets/budgets-card/budgets-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    NotFoundComponent,
    InputComponent,
    ButtonComponent,
    SignUpComponent,
    BannerComponent,
    TransactionsComponent,
    BudgetsComponent,
    PotsComponent,
    RecurringBillsComponent,
    SideBarComponent,
    SideBarMenuComponent,
    IconComponent,
    MainLayoutComponent,
    OverviewCardComponent,
    AuthLayoutComponent,
    TableComponent,
    PaginationComponent,
    SelectComponent,
    AvatarComponent,
    MoneyDisplayComponent,
    PotComponent,
    BollComponent,
    RecurringBillsSummaryComponent,
    RecurringBillsTotalCardComponent,
    BudgetsSummaryComponent,
    BudgetsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
