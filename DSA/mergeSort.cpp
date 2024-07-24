// #include<iostream>
// using namespace std;

// void mergeArray(char *arr1 ,char *arr2){

//     for(int i=0;arr1[i]!='\0';i++){
//         for(int j=0; arr2[j] != '\0'; j++,i++)
// 	{
// 		arr1[i]=arr2[j];
       
// 	}
	 
//     arr1[i]='/0';
//     cout<<"Concatenated String:\n";
// 	cout<<arr1<<endl;
	
//     }
   
// }

// int main(){
//     char arr1[]="Aakriti";
//     char arr2[]="Khanna";

    
//     mergeArray(arr1,arr2);

// }


// #include<iostream>
// #include<string.h>
// using namespace std;
// int length( char arr1){
//     int count =0;

// }

// int main()
// {

// 	char arr1[100]="Journal", arr2[100]="Dev";
// 	// cout<<"String 1:\n";
//     // cout<<x<<endl;
//     // cout<<"String 2:\n";
//     // cout<<y<<endl;
// 	int i;
// 	for(i=0; x[i] != '\0'; i++);//pointing to the index of the last character of x
	
// 	for(int j=0; y[j] != '\0'; i++,j++)
// 	{
// 		arr1[i]=arr2[j];
// 	}
	
	
// 	x[p]='\0';
//     // cout<<"Concatenated String:\n";
// 	cout<<x<<endl;
	
// 	return 0;
// }

#include<iostream>
using namespace std;
int  lenght(char *a ){
    int count=0;
    
    for(int i=0 ;a[i]!='\0';i++){
        count++;

    }
    return count;
}
void append(char *a,char *b ,int l){
    // int i=0;
    int i=lenght(a);
    // for ( i=0;a[i]!='\0';i++);
    int j;

    for(j=0 ;b[j]!='\0';j++){
        a[i]=b[j];
        i++;
    } 
    l=i;
}
int main(){
    char a[]="vaibhav";
    char b[]="goyal";
    int l=0;
    append(a,b,l);

    for(int i=0;a[i]!='\0';i++){
        cout<<a[i]<<" ";
    } 
return 0;
}