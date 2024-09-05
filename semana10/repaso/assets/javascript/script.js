const celular  = {
    ingreso: "21/05/23",
    marca: "Samsung",
    modelo: "Galaxy 10pro",
    capacidad: "4GB",
    años: 3,
    de_segunda: true,
    caracteristicas: ["Garantia dos años", "Buena calidad", "Funda de regalo"],
    Interesados: [
        {
            nombre: "Javier Rodrigez",
            ubicacion: "San Miguel av23 calle54"
        },
        {
            nombre: "Liliana Espinoza",
            ubicacion: "Miraflores calle21 departamento 566"
        }
    ]

}


console.log(celular)
console.log(celular.marca)
console.log(celular.Interesados[1])
celular.años = 5
console.log(celular.años)

celular.Interesados[1].cancelado = "si"
console.log(celular.Interesados)
celular.color = "Azul"
console.log(celular)