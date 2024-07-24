#include <iostream>
using namespace std;


void mergeSort(int arr[],int brr[] ,int m ,int n){
 int k = m + n - 1;
 int i = m - 1, j = n - 1;
    while (i >= 0 && j >= 0) 
    {
        if (arr[i] > brr[j])
        {
            arr[k--] = arr[i--];
        }
        else
        {
            arr[k--] = brr[j--];
        }
    }
    while (j >= 0)
    {
        arr[k--] = brr[j--];
    }
}

void print( int arr[] ,int m,int n ){
   for (int i = 0; i<m+n; i++)
    {
        cout <<arr[i]<< ",";
        
    }

}
int main()
{
    int n;
    cout << "enter n";
    cin >> n;
    int m;
    cout << "enter m";
    cin >> m;
    
    int arr[n], brr[m];
    n = sizeof(arr) / sizeof(int);
    m = sizeof(brr) / sizeof(int);
 cout << "enter arr" << endl;
    for (int i = 0; i < m; i++)
    {
       
        cin >> arr[i];
    }
   
   
    cout << "enter brr" << endl;
    for (int j = 0; j < n; j++)
    {
        
        cin >> brr[j]; 
    }
   mergeSort(arr,brr,m,n);
   print(arr,m,n);

 
}
