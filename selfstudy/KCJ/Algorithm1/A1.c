#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int nums[10000] = {2,7,11,15};
int target = 0;

int twosum(int target, int *nums){
	bool con = false;
	
	for(int i=0; i<sizeof(nums)/sizeof(int); i++){
		if(-1000000000 <= nums[i] && nums[i] <= 1000000000 ){
			con = true;
		}
	}
	
	if(con && -1000000000<= target && target <= 1000000000){
		for(int i=0; i<sizeof(nums)/sizeof(int); i++){
			for(int j=sizeof(nums)/sizeof(int)-1; j>=0; j--){
					if(target == nums[i] + nums[j]){
						int hap[] = {i, j}; 
						return *hap;
				}
				if(i == j){
					break;
				}
			}
		}
	}
}

int main(void){
	printf("%d", twosum(9, *nums));
	return 0;
}
