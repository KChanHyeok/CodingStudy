var mySqrt = function(x) {
    //너무 쉬워서 주석 달필요 없을 듯...
    let num = 0;
    let res = 0;
    while(res<=x){
        num++;
        res = num*num
    }      
    if(x>=0 && x<=2147483647)
    return num-1;
};