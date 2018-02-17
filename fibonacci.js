    function fibonacci(num) {
        var arr = [];
        var fibseq;
        for(var y=0; y<=num; y++){
            if(y=0) {
                arr[y]=0;
            }
            else if(y=1) {
                arr[y]=1;
            }
            else {
                arr[y] = arry[y-1] + arr[y-2];
            }
            fibseq = arr[y];
        }
        return fibseq;
    }
fibonacci()