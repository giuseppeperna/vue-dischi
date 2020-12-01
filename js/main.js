/**
 @file Stampare a schermo gli album, le cui informazioni sono contenute in una API esterna.

 @author Giuseppe Perna <giuseppeperna.cg@gmail.com>
 */

// Init Vue object
const musicApp = new Vue({
    el: '#musicApp',
    data: {
        albums:[],
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(result => {
            this.albums = result.data.response;
        })
    },
})
