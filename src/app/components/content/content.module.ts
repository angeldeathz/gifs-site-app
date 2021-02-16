import { NgModule } from "@angular/core";
import { GifListComponent } from './gif-list/gif-list.component';
import { GifSearchComponent } from './gif-search/gif-search.component';

@NgModule({
    declarations: [
        GifListComponent,
        GifSearchComponent
    ],
    imports: [
    ],
    exports: [
        GifListComponent,
        GifSearchComponent
    ]
})
export class ContentModule {
}
