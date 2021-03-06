import {Component, enableProdMode, Input, Output, EventEmitter} from 'angular2/core';
import {FavoriteDirective} from './favorite.directive';

@Component({
    selector: 'my-media-item',
    templateUrl: 'app/templates/media-item.component.html',
    styleUrls: ['app/css/media-item.component.css'],
    directives: [FavoriteDirective]
})
export class MediaItemComponent {
    @Input(
        'Movie'
        )
    mediaItem;

    @Output('deleted') delete = new EventEmitter();

    isWatched():boolean{
        return true;
    }

    onDelete() {
        this.delete.emit(this.mediaItem);
        
    }




}
