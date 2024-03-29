class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string
    
    def contains(self, item):
        return self.set[item]
    
    def union(self, conjunto):
        novo_conjunto = Conjunto()

        for i in range(1001):
            if self.set[i] or conjunto.set[i]:
                novo_conjunto.add(i)
        return novo_conjunto
    
    def intersection(self, conjunto):
        novo_conjunto = Conjunto()
        for i in range(1001):
            if self.set[i] and conjunto.set[i]:
                novo_conjunto.add(i)
        return novo_conjunto
    
    def difference(self, conjunto):
        novo_conjunto = Conjunto()
        for i in range(1001):
            if self.set[i] and not conjunto.set[i] or not self.set[i] and conjunto.set[i]:
                novo_conjunto.add(i)

        return novo_conjunto
    
    def issubset(self, conjunto):
        for i in range(1001):
            if self.set[i] and not conjunto.set[i]:
                return False

        return True
    
    def issuperset(self, conjunto):
        for i in range(1001):
            if conjunto.set[i] and not self.set[i]:
                return False
        return True


if __name__ == "__main__":
    conjunto = Conjunto()
    numbers = [0, 10, 100, 1000]
    for number in numbers:
        conjunto.add(number)

    conjunto_b = Conjunto()
    numbers_b = [10, 20, 30, 100]
    for number in numbers_b:
        conjunto_b.add(number)

    conjunto_c = conjunto.union(conjunto_b)

    conjunto_d = conjunto.intersection(conjunto_b)

    conjunto_e = conjunto.difference(conjunto_b)

    print(conjunto_e)

    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]
    
    for elem in estudantes:
        conj_estudantes.add(elem)
    
    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
    print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
    print("Quem já entregou pelo menos uma lista:", conj_lista1.union(conj_lista2))
    print("Quem não entregou nenhuma:", conj_estudantes.difference(conj_lista1.union(conj_lista2)))
    
