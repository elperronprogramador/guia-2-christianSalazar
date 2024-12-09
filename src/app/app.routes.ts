import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './shared/componets/footer/footer.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
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
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'agregar',
    component: AgregarProductoComponent,
  },
  {
    path: 'delete',
    component: EliminarProductoComponent,
  }
];
