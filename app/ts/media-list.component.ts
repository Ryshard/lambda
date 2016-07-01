import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {CatListPipe} from './category-list.pipe';
import { MediaItemService } from './media-item.service';

@Component({
    selector: 'media-list',
    directives: [MediaItemComponent],
    templateUrl: 'app/templates/media-list.component.html',
    styleUrls: ['app/css/media-list.component.css'],
    pipes : [CatListPipe],
})

export class MediaItemListComponent {
    mediaItems;
    constructor (private mediaService:MediaItemService){
       
    }     

    ngOnInit(){
        this.mediaService.get().subscribe(
            mediaItems=>{
             //   console.log('mmi');
             //   console.log(mediaItems);
                this.mediaItems = mediaItems;
            }
        );


        //  this.mediaItems = this.mediaService.get();
    }

    onMediaItemDeleted(mediaItem) {
         this.mediaService.delete(mediaItem);
    }
    
    title:string = 'Movies List';
    
}