function pal(str){
    for (var x = 0; x<(str.length-1)/2; x++){
        if(str[x] !== str[str.length-x-1]){
            return false;
        }
        return true;
    }
    
}