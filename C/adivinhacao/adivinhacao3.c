#include <stdio.h>

#define NUMERO_DE_TENTATIVAS 5

int main(){
    
    //imprime o cabeçalho
    printf("**************************************\n");
    printf("Bem vindo ao nosso jogo de avivinhação\n");
    printf("**************************************\n");

    int numerosecreto = 42;

    int chute;

    for(int i = 1; i <=NUMERO_DE_TENTATIVAS; i++){
        printf("tentativa %d de %d\n", i,NUMERO_DE_TENTATIVAS);
        printf("Digite um valor: ");
        scanf("%d", &chute);
        printf("seu chute foi %d\n", chute);

        if (chute < 0) {
            printf("VocÊ não pode chutar numeros negativos\n");
            i--;//apenas para que não conte como tentativa
            continue;//diferente do break; ele não para o loop e sim reinicia o lopp sem carregar o bloco de cógigo abaixo
        }

        int acertou = (chute == numerosecreto);
        int maior = chute > acertou;

        if (acertou) {
            printf("parabens! você acertou!\n");
            printf("Jogue de novo, você é um bom jogador\n");

            break;
        }
        else if (maior){
            printf("seu chute foi maior que o numero\n");
        } else {
            printf("seu chute foi menor que o numero secreto\n");
        }
    }
    printf("Fim de Jogo!");
}
