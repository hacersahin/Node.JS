var events= require ('events')
var eventEmitter = new events.EventEmitter();

eventEmitter.on('Selam', function(sayi, sayi2){
    console.log(sayi + " Hacer" + sayi2)
});

eventEmitter.emit('Selam', "Selam", ", nasılsın?")
