import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import { MediaItemService } from './media-item.service';
import { provide } from 'angular2/core';

var lookupListss = {
    mediums: ['Movies', 'Series'],
    cats : [
        'Action',
        'Science',
        'Comedy',
        'Drama',
        'Horror',
        'Romance'
        ]
}

bootstrap(AppComponent, [ // Array of providers
    MediaItemService,
    provide('LOOKUP_LISTS', { useValue: lookupListss })
]);
