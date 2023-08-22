#include <stdio.h>

int main(){
    
    //imprime o cabeçalho
    printf("**************************************\n");
    printf("Bem vindo ao nosso jogo de avivinhação\n");
    printf("**************************************\n");

    int numerosecreto = 42;

    int chute;

    printf("Digite um valor: ");
    scanf("%d", &chute);
    printf("seu chute foi %d\n", chute);

    int acertou = (chute == numerosecreto);

    if (acertou) {
        printf("parabens! você acertou!\n");
        printf("Jogue de novo, você é um bom jogador\n");
    }
    else {

        int maior = chute > numerosecreto;
        if (maior){
            printf("seu chute foi maior que o numero\n");
        } else {
            printf("seu chute foi menor que o numero secreto\n");
        }
    }
}
