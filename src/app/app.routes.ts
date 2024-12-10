import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './shared/componets/footer/footer.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { ConsultarProductoComponent } from './components/consultar-producto/consultar-producto.component';
import { StarthomeComponent } from './components/starthome/starthome.component';
 

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
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
    path: 'add',
    component: AgregarProductoComponent,
  },
  {
    path: 'delete',
    component: EliminarProductoComponent,
  },
  {
    path: 'search',
    component: ConsultarProductoComponent,
  },
  
  {
    path: 'inicio',
    component: StarthomeComponent,
  }
];
 