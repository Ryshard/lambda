export class MediaItemService {
   

    get() {
        return this.mediaItems;
    }

    add(mediaItem){
      console.log( this.mediaItems );
      console.log(mediaItem);
      this.mediaItems.push(mediaItem);
      console.log( this.mediaItems );

       
    }

    delete(mediaItem){
      //  console.log('Deleting object.............');
      //  console.log(mediaItem);
      
        var index:number = this.mediaItems.indexOf(mediaItem);
        //console.log(index);

        if(index >=0 ){
            this.mediaItems.splice(index,1);
        }
 
    }

     mediaItems = [
        {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: "The Small Tall",
            medium: "Movies",
            category: "Comedy",
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: "The Redemption",
            medium: "Movies",
            category: "Action",
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: "Hoopers",
            medium: "Series",
            category: "Drama",
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: "Happy Joe: Cheery Road",
            medium: "Movies",
            category: "Action",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        },
        {
            id: 5,
            name: "The Trooper",
            medium: "Movies",
            category: "Action",
            year: 2019,
            watchedOn: 1457146565384,
            isFavorite: true
        },
       {
            id: 5,
            name: "The Fly",
            medium: "Movies",
            category: "Action",
            year: 2019,
            watchedOn: 1457146565384,
            isFavorite: true
        }
    ];
}