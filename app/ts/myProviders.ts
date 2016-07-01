import { OpaqueToken } from 'angular2/core';

export var MOVIE_CAT_LIST = new OpaqueToken('cats');

export var cats = [
        'Action',
        'Science',
        'Comedy',
        'Drama',
        'Horror',
        'Romance'
]