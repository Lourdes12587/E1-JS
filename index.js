const Pizzas=[{
    id: '1',
    nombre: 'Muzarella',
    ingredientes:['muzarella','salsa','aceitunas','tomate'],
    precio: 750
}, 
{
    id: '2',
    nombre: 'Especial',
    ingredientes:['muzarella','salsa','jamon','tomate'],
    precio: 800
},
{
    id: '3',
    nombre: 'De Anana',
    ingredientes:['muzarella','salsa','jamon','anana'],
    precio: 850
},
{
    id: '4',
    nombre: 'De Palmito',
    ingredientes:['muzarella','salsa','jamon','palmito'],
    precio: 900
},
{
    id: '5',
    nombre: 'De Carne',
    ingredientes:['muzarella','salsa','carne'],
    precio: 1000
},
{
    id: '6',
    nombre: 'De rucula con Jamon Crudo',
    ingredientes:['muzarella','salsa','Rucula','JamonCrudo'],
    precio: 900
}] 

//1)

Pizzas.forEach((especialidad) => {
    if (especialidad.id % 2 !== 0 ) {
        console.log(`La pizza ${especialidad.nombre} tiene un Id impar`)
    }
});

//2)

const PizzasMenorValor = Pizzas.some((especialidad)=> especialidad.precio <=600)

console.log(PizzasMenorValor)

//3)

Pizzas.forEach((especialidad)=>{
    console.log (`La pizza ${especialidad.nombre} tiene un precio de ${especialidad.precio}`)

})

//4)

Pizzas.forEach((pizzas) => {
    console.log ('La pizza' + " "+ pizzas.nombre + ' tiene:')

    pizzas.ingredientes.forEach ((ingrediente) =>{
    console.log (`* ${ingrediente}`)
    })  
})