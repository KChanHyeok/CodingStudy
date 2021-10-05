/* 문제풀 때 팁 :
   모든 문제는 if문이나 while(또는 for)문으로 풀리니까
   둘 줄 뭘써야 되는지 선택해가면서 풀면 되는데
   if문은 읽었을 때 직관적으로 무슨 뜻인지 이해가 잘되는 데
   while문은 내용을 이해하기가 힘듦
   그니까 어떻게 풀어야할지 막막한 부분은
   반복문을 어떻게 사용할지 고민해봅시다.
*/

var nums = [];
var target;
var twoSum = function(nums, target) {
    var res = []; //리턴값
    var sum =0; // nums의 두 원소의 합을 저장
    var isnum =true; 
    var n = 0, i =0, x=0;
    while(x<nums.length)
        {
            if(nums[x]<=-100000000 || nums[x]>=100000000)
            //조건 2 : nums의 모든 원소는 -10^9보다 크거나 같고 10^9보다 작음
            //조건은 작업할 때 맨 마지막에 작성하는 게 오류 찾기 좋음
                isnum = false;
            x++;
        }
    //조건 2 만족하는 지 찾는부분
    //조건 2는 다른 조건들과 달리 nums의 모든 원소를 전부 조사해야 하기 때문에 먼저 조사함
    while(n<nums.length)
        {
            i=n;
            while(i<nums.length)
            {
                i++;
                sum=nums[n]+nums[i]; 
                if(sum==target)break;
            }if(sum==target)break;
            // n보다 크거나 같은 값 i에 nums의 원소를 일일히 넣어보는 작업을 하는 코드
            n++;
        }res = [n,i];
        // n에 nums의 원소를 일일히 넣어보는 작업을 하는 코드
        /* 예를들어 [1,2,3,4]에서 숫자를 두개씩 더하는 작업을 한다면
        1+2 => 1+3 => 1+4 => 2+3(n값 증가) => 2+4 => 3+4(n값 증가) 순으로 동작함*/
    if(nums.length>=2 && nums.length<=1000 && target>=-100000000 && target<=100000000 && isnum)
       //조건 1 : nums배열의 길이는는 -10^4보다 크거나 같고 10^4보다 작음
       //조건 3 : target은 -10^9보다 크거나 같고 10^9보다 작음
        {
            return res;
        }else{
            return 0;
        }
    //조건 1,3을 조사 후 리턴
    //조건 1,3은 조건 2와 달리 res(리턴해줄 값이 들어있는 변수)에 값이 들어있어야 하기 때문에 나중에 조사함
};