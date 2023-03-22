// try {
//     const result = some_function();

// } catch{
//     console.error('Error:', error.message);

// }
// if (er) throw err;
//-----------------------------------------------

class myError extends Error{

    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

function someFunction(){

    //çalışacak kodlar....



    throw new myError(500,'Birseyler ters gitti');
}

try{
    someFunction();
}catch(error){
    if(error instanceof myError){

        console.error('Hata Oluştu:', error.message, error.statusCode);

    } else{
        console.error('Hata Oluştu:', error.message);
    }
}