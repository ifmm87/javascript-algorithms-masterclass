// this is not a good solution, cause indexOf iterates over inside de for loop
// O ()n^2)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
