/**
 @file Stampare a schermo gli album, le cui informazioni sono contenute in una API esterna.
 Bonus: filtrare la visualizzazione degli album in base al genere.

 @author Giuseppe Perna <giuseppeperna.cg@gmail.com>
 */

// Init Vue object
const musicApp = new Vue({
    el: '#musicApp',
    data: {
        albums:[],
        selectedGenre:""
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(result => {
            this.albums = result.data.response;
        })
    },
    computed: { //Filter album by genre
        filterAlbum() {
            return this.albums.filter(albums => {
              return albums.genre.toLowerCase().includes(this.selectedGenre.toLowerCase());
            })
          },
    }
})
