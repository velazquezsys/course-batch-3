 exports.addTested = (value) => {
    var result = value + " tested";
    return result;
};

 exports.isArray = (array) => {
     return array instanceof Array;
 };

 exports.isNumericArray = (array) => {
    if(exports.isArray(array)){
        if(array.length > 0){
            for(const element of array){
                if(isNaN(element)){
                    return false;
                }
            }
            return true;
        }
    }
    return false;
 };