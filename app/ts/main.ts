import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import { MediaItemService } from './media-item.service';
import { provide } from 'angular2/core';
import { MOVIE_CAT_LIST, cats } from './myProviders';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import {MockXHRBackend} from './mock-xhr-backend';
import { ROUTER_PROVIDERS } from 'angular2/router';

var lookupListss = {
    mediums: ['Movies', 'Series'],
}

bootstrap(AppComponent, [ // Array of providers
    MediaItemService,
    provide('LOOKUP_LISTS', { useValue: lookupListss }),
    provide(MOVIE_CAT_LIST, { useValue: cats }),
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: MockXHRBackend }),
    ROUTER_PROVIDERS
]);
