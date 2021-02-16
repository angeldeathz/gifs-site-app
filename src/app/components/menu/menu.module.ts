import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { HistorialComponent } from './historial/historial.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { ContentModule } from '../content/content.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HistorialComponent,
        SidenavComponent
    ],
    imports: [
        MaterialModule,
        ContentModule
    ],
    exports: [
        SidenavComponent
    ]
})
export class MenuModule { }
