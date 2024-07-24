#include <iostream>
using namespace std;

int removeDups(int arr[], int n)
{
    if (n == 0 || n == 1)
        return n;
    int temp[n];
    int j = 0; // use to iterate the unique elements which is stored on temp array
    // j is used to keep track of the index in the temp array where unique elements are stored.
    // It starts from 0 and gets incremented whenever a unique element is encountered.
    for (int i = 0; i < n - 1; i++)
    {
        if (arr[i] != arr[i + 1])
        {
           
            temp[j++] = arr[i];
           
        }   
       temp[j++]=arr[n-1] ;// last element store krwane ke liye
    }
 

    for(int i=0; i<j    ; i++){
            arr[i]=temp[i];
        
            return j;

    }
}

int main(){
     int arr[] = {1, 2, 2, 3, 4,  
                 4, 4, 5, 5}; 
    int n = sizeof(arr) / sizeof(arr[0]); 
  
    // RemoveDuplicates() returns  
    // new size of array. 
    n = removeDups(arr, n); 
  
    // Print updated array 
    for (int i = 0; i < n; i++) 
        cout << arr[i] << " "; 
  
    return 0; 
}