const persona = {
    nombre: "Juan",
    apellido: "Diaz",
    edad: 25,
    dni_cedula: "567833012",
}

console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

persona.correo = "micorreo@gmail.com";
console,log(persona);
persona.correo = "juandiAz707@gmail.com";
console,log(persona);