import {Directive, HostBinding, HostListener, Input } from 'angular2/core';

@Directive({
    selector: '[mwFavorite]',
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favourite-hovering') hovering = false;

    @HostListener('mouseenter')
    onHoverIn(){
        this.hovering = true;
    }

    @HostListener('mouseleave')
    onHoverOut(){
        this.hovering = false;
    }

    @Input()
    set mwFavorite(value){
        this.isFavorite = value;
    }
 
}