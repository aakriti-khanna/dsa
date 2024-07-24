#include <iostream>
using namespace std;

int replacenum(int n)
{

    int rev = 0;
    // int rem = 0;
    while (n != 0)
    {
       int rem = n % 10;
        if (rem % 10 == 0)
        {
            rem = 5;
        }
        rev = rev * 10 + rem;
        n = n / 10;
    }
    n = rev;
    rev = 0;
    while (n != 0)
    {
       int  rem = n % 10;
        rev = rev * 10 + rem;
        n = n / 10;
    }
    cout<<"replace num"<<rev<<endl;

}

int main()
{   int n;
    cin>>n;
    replacenum(n);
   
}