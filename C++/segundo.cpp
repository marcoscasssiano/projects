#include <iostream>

using namespace std;

int main() {
    int inteiro = 5;
    cout << inteiro << endl;//quebra de linha

    float real;
    real = 5.2;
    cout << real << endl;

    double real2;
    real2 = 5.2e99;
    cout << real2 << endl;

    bool booleano;
    booleano = true;
    cout << booleano << endl;

    char letra;
    letra = 'a';//só cabe 1 letra
    cout << letra << endl;

    string palavra;
    palavra = "bola";
    cout << palavra << endl;


    int idade;
    cout << "qual sua idade?" << endl;
    cin >> idade;
    cout << "Idade: " << idade << endl;

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