#include <stdio.h>
#include <string.h>

int main(){
    char palavrasecreta[20];
    
    sprintf(palavrasecreta, "MELANCIA");

    int acertou = 0;
    int enforcou = 1;

    do{
        char chute;
        scanf("c", &chute);

    } while (!acertou && !enforcou);
    {
        /* code */
    }
    
}