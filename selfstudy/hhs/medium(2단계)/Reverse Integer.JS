var x;
var myfunction = function(x) {
    
    let count = 0; //x와 num의 자릿수
    let count2 = 0;
    let rev = 0; //리턴해줄 값
    let a, b;
    let num; //x의 부호를 지워준 값
    
    function sqare(a,b)
    {
        let i = 0;
        let res = 1;
       while(i<b)
           {
               res*=a;
               i++;
           }
        return res;
    }
    
    if(x>=0){num  = x;} //x가 양수면 num = x
    else{num = -x;}     //x가 음수면 num = -x
                        //num은 절댓값 x라고 보시면 되요
    
    while(num>=10) /*num가 몇자리 숫자인지를 조사해서 count에 넣어줄 꺼예요.
                    num가 1의 자리 숫자면 count는 0 100의자리 숫자면 count는 2가 됩니다.*/
        {
            num /= 10;
            count++;
        }
    while(count2<=count) //이제 x를 역전시킨 값을 rev에 넣어줍니다.
                         /*x는 num와 자릿 수가 같기 떄문에 그걸 이용해줄 꺼예요.
                         count2가 0부터 1씩 증가해서 count와 값이 같아질 때까지
                         rev에 1자리수는  count+1자리수로 2자리수는 count자리 숫자로
                         ...count자리 숫자는 1자리 숫자로 만들어 줄겁니다.*/
        {
            rev += (x%sqare(10,count2+1)-x%sqare(10,count2))/sqare(10,count2)
            *sqare(10,count-count2);
            count2++;
            /*
             예시 : count2가 0일때
                    1234을 10으로 나눈 나머지 - 123을 1으로 나눈 나머지 = 4-0 = (일의자리 숫자만 남음)
                    20 / 4의 원래 자릿수(1) * 들어가야할 자릿수(1000) = 4000
                    count2가 1일때
                    1234을 100으로 나눈 나머지 - 123을 10으로 나눈 나머지 = 34-4 = 200(십의자리 숫자만 남음)
                    20 / 3의 원래 자릿수(10) * 들어가야할 자릿수(100) = 300
                    count2가 2일때
                    1234을 1000으로 나눈 나머지 - 123을 100으로 나눈 나머지 = 234-34 = 200(백의자리 숫자만 남음)
                    20 / 2의 원래 자릿수(100) * 들어가야할 자릿수(10) = 20
                    count2가 3일때
                    1234을 10000으로 나눈 나머지 - 123을 1000으로 나눈 나머지 = 1234-234 = 200(천의자리 숫자만 남음)
                    20 / 1의 원래 자릿수(1000) * 들어가야할 자릿수(1) = 1
                    따라서 rev = 4321
            */
        }
        
    
    
    if(x<=sqare(2,31)-1 && x>=-sqare(2,31) && rev<=sqare(2,31)-1 && rev>=-sqare(2,31))
    {
        return rev;
    }else{
        return 0;
    }
    //예외처리
    
    

};