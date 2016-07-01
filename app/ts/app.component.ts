import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-list.component';
import {FormComponent} from './form.component';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@RouteConfig([
    //{ path: '', component: , name: ''}
    { path: '/:medium', component: MediaItemListComponent, name: 'List'},
    { path: '/add',   component: FormComponent, name: 'AddMediaItem'  }
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: [`app/css/app.component.css`]
})
export class AppComponent {
        onMediaDeletedItem(){
            console.log('Item Deleted');
        }

/*
        firstMediaItem = {
        id: 1,
        name: "Firebug 2",
        medium: "Series",
        type: "Science Fiction",
        year: 2010,
        watchedOn: null,
        isFavorite: false
    };
    */
}

