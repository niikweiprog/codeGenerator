function numberGenerator(){
    let z = 40
    let pinCode = ''
    let pin = ''
    let pinlenght = Number(document.querySelector('#code-lenght').value)
    let status = ''
    do{
        pin = Math.random()
        if(pin < 1/z){
            pin = 'q'
        }else if(pin > 1/z && pin < 2/z){
            pin = 'w'
        }else if(pin > 2/z && pin < 3/z){
            pin = 'e'
        }else if(pin > 3/z && pin < 4/z){
            pin = 'r'
        }else if(pin > 4/z && pin < 5/z){
            pin = 't'
        }else if(pin > 5/z && pin < 6/z){
            pin = 'y'
        }else if(pin> 6/z && pin < 7/z){
            pin = 'u'
        }else if(pin > 7/z && pin < 8/z){
            pin = '1'
        }else if(pin > 8/z && pin < 9/z){
            pin = '#'
        }else if(pin > 9/z && pin < 10/z){
            pin = '2'
        }else if(pin > 10/z && pin < 11/z){
            pin = 'i'
        }else if(pin > 11/z && pin < 12/z){
            pin = 'o'
        }else if(pin > 12/z && pin < 13/z){
            pin = 'p'
        }else if(pin> 13/z && pin < 14/z){
            pin = '3'
        }else if(pin > 14/z && pin < 15/z){
            pin = 'a'
        }else if(pin > 15/z && pin < 16/z){
            pin = 's'
        }else if(pin > 16/z && pin < 17/z){
            pin = 'd'
        }else if(pin> 17/z && pin < 18/z){
            pin = 'e'
        }else if(pin > 18/z && pin < 19/z){
            pin = 'f'
        }else if(pin > 19/z && pin < 20/z){
            pin = 'g'
        }else if(pin> 20/z && pin < 21/z){
            pin = '4'
        }else if(pin> 21/z && pin < 21/z){
            pin = 'h'
        }else if(pin > 22/z && pin < 23/z){
            pin = 'j'
        }else if(pin> 23/z && pin < 24/z){
            pin = '5'
        }else if(pin> 24/z && pin < 25/z){
            pin = '$'
        }else if(pin > 25/z && pin < 26/z){
            pin = 'k'
        }else if(pin > 26/z && pin < 27/z){
            pin = '0'
        }else if(pin > 27/z && pin< 28/z){
            pin = '6'
        }else if(pin > 28/z && pin < 29/z){
            pin = 'l'
        }else if(pin > 29/z && pin <30/z){
            pin = '@'
        }else if(pin > 30/z && pin <31/z){
            pin = 'm'
        }else if(pin > 31/z && pin < 32/z){
            pin = 'z'
        }else if(pin > 32/z && pin < 33/z){
            pin = '7'
        }else if(pin > 33/z && pin < 34/z){
            pin = 'x'
        }else if(pin > 34/z && pin < 35/z){
            pin = 'c'
        }else if(pin > 35/z && pin < 36/z){
            pin = '9'
        }else if(pin > 36/z && pin < 37/z){
            pin = 'v'
        }else if(pin > 37/z && pin < 38/z){
            pin = 'b'
        }else if(pin > 38/z && pin < 39/z){
            pin = 'n'
        }else{
            pin = '%'
        }
        
        status = Math.random()
        if(status > 0.5){
            pin = pin.toUpperCase();
        }else{
            pin = pin
        }


        pinlenght = pinlenght - 1;

        pinCode += pin
        
    }while(pinlenght > 0)
    
    document.querySelector('#output').value = pinCode;
}

function pinGenerator(){
    let codelenght = Number(document.querySelector('#code-lenght').value)
    let element = ''
    const z = 10;
    let pin = ''
    let pincode = ''

    do{
        element = Math.random()
        if(element < 1/z){
           pin = '0' 
        }else if(element > 1/z && element < 2/z){
            pin = '1'
        }else if(element > 2/z && element < 3/z){
            pin = '2'
        }else if(element > 3/z && element < 4/z ){
            pin = '3'
        }else if(element > 4/z && element < 5/z){
            pin = '4'
        }else if(element > 5/z && element < 6/z){
            pin = '5'
        }else if(element > 6/z && element < 7/z){
            pin = '6'
        }else if(element > 7/z && element < 8/z){
            pin = '7'
        }else if(element > 8/z && element < 9/z){
            pin = '8'
        }else{
            pin = '9'
        }

        codelenght -= 1;
        pincode += pin;

    }while(codelenght > 0)

    document.querySelector('#output').value = pincode;
}


function copy(){
    document.querySelector('#output').select();
    document.execCommand("copy");

}


document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#code-lenght').value = 4;

    document.querySelector('#gen').onclick = function(){
        const pintype = document.querySelector('#code-type').value;

        if(pintype == 'Password'){
            numberGenerator();
        }else{
            pinGenerator();
        }
    }

    document.querySelector('#copy').onclick = function(){
        copy();
    }
})