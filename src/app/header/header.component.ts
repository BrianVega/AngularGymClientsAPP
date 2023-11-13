import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navBarItems? : MegaMenuItem[] 
  constructor() { }

  ngOnInit(): void {
    this.navBarItems = [
      {
        label : 'Próximos a pagar',
        icon : 'pi pi-fw pi-wallet', 
      },{
        label : 'Socios',
        icon : 'pi pi-fw pi-users',
        items : [[
          {
            items: [{
              label:'Visualizar socio', 
              icon : 'pi pi-fw pi-user', 
              url : '#'}],
          },
          {
            items:[{
            label : 'Registrar socio',
            icon : 'pi pi-fw pi-user-plus',
            url : '#'
          }]
          },
          {
            items:[{
            label : 'Editar socio',
            icon : 'pi pi-fw pi-user-edit',
            url : '#'
          }]
          },
          {
            items:[{
            label : 'Eliminar socio',
            icon : 'pi pi-fw pi-user-minus',
            url : '#'  
          }]
        }
          
        ] 
      ]
      }

    ]
  }

}
