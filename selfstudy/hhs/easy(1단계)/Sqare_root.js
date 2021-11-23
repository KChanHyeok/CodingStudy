var myfunction = function(x) {
    let num = 0;
    let res = 0;
    while(res<=x){
        num++;
        res = num*num
    }      
    if(x>=0 && x<=2147483647)
    return num-1;
};