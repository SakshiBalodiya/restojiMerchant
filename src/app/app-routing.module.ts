import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'sales-report',
    loadChildren: () => import('./sales-report/sales-report.module').then( m => m.SalesReportPageModule)
  },
  {
    path: 'cashier-report',
    loadChildren: () => import('./cashier-report/cashier-report.module').then( m => m.CashierReportPageModule)
  },
  {
    path: 'gst-report',
    loadChildren: () => import('./gst-report/gst-report.module').then( m => m.GstReportPageModule)
  },
  {
    path: 'refund-report',
    loadChildren: () => import('./refund-report/refund-report.module').then( m => m.RefundReportPageModule)
  },
  {
    path: 'media-report',
    loadChildren: () => import('./media-report/media-report.module').then( m => m.MediaReportPageModule)
  },
  {
    path: 'billtype-report',
    loadChildren: () => import('./billtype-report/billtype-report.module').then( m => m.BilltypeReportPageModule)
  },
  {
    path: 'order-view',
    loadChildren: () => import('./order-view/order-view.module').then( m => m.OrderViewPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'managemenu',
    loadChildren: () => import('./managemenu/managemenu.module').then( m => m.ManagemenuPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
