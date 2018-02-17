function parenValid(str){
    var open = 0;
    var closed = 0;
    for (var i = 0; i<=str.length; i++){
        if(str[i] === "("){
            open++;
        }
        if(str[i] ===")"){
            closed++;
        }
        if (closed > open){
            print "False";
        }
    }
    if (closed === open){
        print "True";
    }
}
