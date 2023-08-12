#include <iostream>

using namespace std;

int main() {
    int inteiro = 5;
    cout << inteiro << endl;

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

    return 0;
}