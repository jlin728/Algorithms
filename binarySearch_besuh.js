function bnarySearch(arr, i){
    var idx = 0;
    var x = arr.length;
    while(idx < x-1){
        if(arr[0] === i){
          return 0;
        }
        idx = Math.trunc((x-idx)/2 +idx)
        if(arr[idx] === i){
            return idx;
        }
        if(arr[idx]>i){
            x =idx;
            idx=0;
        }
    }return false;
}

var a = [-10,-2,3,4,5,6,7,8]
bnarySearch(a,-10)