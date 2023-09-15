#include <iostream>
#include <cmath>

using namespace std;

int main(){

    int a = 5, b = 2;

    int soma = a + b;

    cout << "Soma: " << soma << endl;

    int sub = a-b;

    cout << "Subtracao: " << sub << endl;

    int multi = a*b;

    cout << "Multiplicacao: " << multi << endl;

    float divisao = (float)a / (float)b;//divisao de numeros quebrados precisa de float

    cout << "Divisao: " << divisao << endl;

    int restoDaDivisao = a%b;

    cout << "Resto da divisao: " << restoDaDivisao << endl;

    float potencia = pow(a,b); //a é a base e o b vira expoente

    cout << "potencia: " << potencia << endl;

    //Incremento e Decremento
    cout << "a antigo:  " << a << endl;
    //a = a+1;
    //a+=1;
    //a++;
    //a+=3;
    //a = a-1;
    //a-=1;
    //a--;
    //a-=4;
    a*=3;
    cout << "a novo: " << a << endl;



    return 0;
}
