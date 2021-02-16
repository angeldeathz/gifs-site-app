import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { GifListComponent } from './gif-list/gif-list.component';
import { GifSearchComponent } from './gif-search/gif-search.component';

@NgModule({
    declarations: [
        GifListComponent,
        GifSearchComponent
    ],
    imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        GifListComponent,
        GifSearchComponent
    ]
})
export class ContentModule {
}
