import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { TreeSelectModule } from 'primeng/treeselect';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    TooltipModule,
    TreeSelectModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  classProperty: { [klass: string]: any };

  constructor() {
    this.classProperty = { 'some-class': true };
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
}
