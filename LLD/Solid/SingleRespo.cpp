#include <iostream>
#include <vector>
#include <memory>

class Bird
{

public:
   virtual void display() const =0;
    virtual ~Bird()=default;
};

class flyable{
    public:
    virtual void fly() const=0;
    virtual ~flyable()=default;

};

class Sparrow : public Bird ,public flyable{
    public:
    void display() const override{
       std::cout<<"I am Sparrow "<<std:: endl;
    }
    void fly() const override{
       std::cout<<"I can Fly "<<std:: endl;
    }

};
class Ostrich :public Bird{
      public:
    void display() const override{
        std::cout<<"I am Ostrich"<<std:: endl;
    }

};

void makeBirdFly(const flyable& bird){
    bird.fly();
}

int main(){
    Sparrow sparrow;
    Ostrich ostrich;

    sparrow.display();
    ostrich.display();
    makeBirdFly(sparrow);
// makeBirdFly(ostrich);
// makeBirdFly(ostrich);
// makeBirdFly(ostrich);
}
