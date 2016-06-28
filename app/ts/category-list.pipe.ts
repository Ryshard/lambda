import {Pipe} from 'angular2/core';

@Pipe({
    name: 'catList'
})
export class CatListPipe{
    transform(mediaItems):string{
        var categories = [];
       
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
        });
        var cats:string;
        cats = '';
        cats += '<ul>';
        categories.forEach(cat =>{
            cats += '<li>' + cat + '</li>';

        } );
        cats += '</ul>';

        return cats;
       // return categories.join(', ');
    }
}