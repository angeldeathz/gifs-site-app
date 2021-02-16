import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { HistorialComponent } from './historial/historial.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../../shared/modules/material.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HistorialComponent,
        SidenavComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        SidenavComponent
    ]
})
export class MenuModule { }
