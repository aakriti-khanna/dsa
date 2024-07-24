 #include<iostream>
 using namespace std;
 void reverseArray(int arr[] ,int n){
    int start=0;
    int end=n-1;
   while(start<end){
    
     int temp=arr[start];
     arr[start]=arr[end];
     arr[end]=temp;
     start++;
     end--;

   }

 }
 void print(int arr[],int n){
    for(int i=0;i<n;i++){
       cout<<arr[i]<<endl;
    }
    
 }
 int main(){
       
    int n;
    cout<<"enter n";
    cin>>n;
    
    int arr[n];
    n=sizeof(arr)/sizeof(int);
    cout<<"enter array"<<endl;
     for(int i=0;i<n;i++){ 
        cin>>arr[i];
    }
    reverseArray(arr,n);
    print(arr,n);

 }
