var events= require ('events')
var yayici = new events.EventEmitter();

yayici.on('miyav', function(sayi, sayi2){
    console.log(sayi + "  tane kedi gördüm sanki!" + sayi2+" tanesi hamileydi.")
});

yayici.emit('miyav',2,1)
