import { Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './shared/componets/footer/footer.component';
import { HeaderComponent } from './shared/componets/header/header.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'aside',
    component: AsideComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
];
