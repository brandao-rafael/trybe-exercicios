// Exemplo 1
const newUser = (id, name, email) => {
    return {
        id,
        name,
        email,
    };
};

console.log(newUser(54, 'isabella', 'isabella@email.com'));

// Exercicio para fixar
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});

console.log(getPosition(-19.8157, -43.9542));