import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AuthGuard } from './guards/Auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { PotsComponent } from './pages/pots/pots.component';
import { RecurringBillsComponent } from './pages/recurring-bills/recurring-bills.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { GuestGuard } from './guards/Guest.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [GuestGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'budgets', component: BudgetsComponent },
      { path: 'pots', component: PotsComponent },
      { path: 'recurring-bills', component: RecurringBillsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
