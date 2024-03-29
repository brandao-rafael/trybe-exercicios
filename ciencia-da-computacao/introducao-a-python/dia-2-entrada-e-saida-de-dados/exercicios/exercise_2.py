# Jogo da palavra embaralhada. Desenvolva um jogo em
# que a pessoa usuária tenha que adivinhar uma palavra
# que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra. Ao final,
# a palavra deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando
# o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".


# exercice 3
# Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random

MAX_ATTEMPTS = 3


def draw_secret_word():
    with open("words.txt", "r") as wordsFile:
        words = wordsFile.read().split("\n")
        secret_word = random.choice(words)
        scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
        return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for _attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    secret_word, scrambled_word = draw_secret_word()
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)
