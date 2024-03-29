import json


def is_odd(number):
    return number % 2 != 0


def divide(a_number, other_number):
    "Retorna a divisão de a_number por other_number"
    return a_number / other_number


# def retrieve_pokemons_by_type(type, reader):
#     # lê o conteudo de reader e o transforma de json
#     # para dicionário
#     pokemons = json.load(reader)["results"]
#     # filtra somente os pokemons do tipo escolhido
#     pokemons_by_type = [pokemon for pokemon in pokemons if type in pokemon["type"]]
#     return pokemons_by_type


def retrieve_pokemons_by_type(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemons_by_type = [pokemon for pokemon in pokemons if type in pokemon["type"]]
        return pokemons_by_type
