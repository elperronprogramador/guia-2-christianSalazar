import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AsideComponent],
  imports: [CommonModule, SidebarModule, ButtonModule],
  exports: [AsideComponent],
})
export class SharedModule {}
