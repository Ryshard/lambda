import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {CatListPipe} from './category-list.pipe';
import { MediaItemService } from './media-item.service';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: 'media-list',
    directives: [MediaItemComponent, ROUTER_DIRECTIVES],
    templateUrl: 'app/templates/media-list.component.html',
    styleUrls: ['app/css/media-list.component.css'],
    pipes : [CatListPipe],
})

export class MediaItemListComponent {
    medium = '';
    mediaItems = [];
    constructor( private mediaService:MediaItemService,
        private routeParams:RouteParams
    ){ }     

    ngOnInit(){
        this.medium = this.routeParams.get('medium');
        this.getMediaItems(this.medium);
        //  this.mediaItems = this.mediaService.getStatic();
    }

    onMediaItemDeleted(mediaItem) {
        this.mediaService.delete(mediaItem)
        .subscribe(() => {
                this.getMediaItems(this.medium);
            });
        
        // this.mediaService.delete(mediaItem);
    }
    
        getMediaItems(medium) {
        this.medium = medium;
        this.mediaService.get(medium)
            .subscribe(mediaItems => {
                this.mediaItems = mediaItems;
            });
    }

    title:string = 'Movies List';
    
}