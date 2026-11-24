const ventas = require("./datos");

//función para calcular el valor total por registro. 

function valorVenta(venta){

    return venta.cantidad*venta.precio;
    
}

//devuelve el valor y dentro del parentesis el valor o la variable a afectar
console.log(`Valor total individual: ${valorVenta(ventas[4])}`);


function totalVendido(ventas){

    let total = 0;

    for (const venta of ventas){
        total =total + valorVenta(venta);
    }
        return total;
}
console.log(`Valor total vendido general: ${totalVendido(ventas)}`)



function unidadesVendidas(ventas){

    let total = 0;

    for( const venta of ventas ){
        
       total = total + venta.cantidad;
    }
    return total

}

console.log(`Unidades vendidas (cantidad): ${unidadesVendidas(ventas)}`)


//function ventaMayor (ventas){
//
//    let Mayor =0;
//    let precioMayor=0;
//
//        for (let j=0; j<ventas.length; j++){
//
//          //  console.log(`COMPARADOR#: j:${j},  Ultimo indice: (ventas)[${ventas.length-1}]`)
//
//           // console.log(`Comparando Ventas[${j}]: ${ventas[j].precio} | Ventas[${j+1}]: ${ventas[j + 1].precio}`)
//          
//          if (ventas[j].precio > (ventas[j+1].precio ?? ventas[ventas.length].precio)){
//                   if (ventas[j].precio > precioMayor){
//                        Mayor = j; 
//                        precioMayor = ventas[j].precio;
//                     //   console.log(`Asi quedo guardado: (Mayor: ${Mayor}) & (precioMayor: ${precioMayor})`)
//                   }else{
//                      //  console.log(`No se modifico (Mayor: ${Mayor}) & (precioMayor: ${precioMayor})`)
//                   }          
//                    
//           } else{
//
//                    if (ventas[j+1].precio > precioMayor){
//                        Mayor = j+1; 
//                        precioMayor = ventas[j+1].precio;
//                  //      console.log(`Asi quedo guardado: (Mayor: ${Mayor}) & (precioMayor: ${precioMayor})`)
//                   }else{
//                     //   console.log(`No se modifico (Mayor: ${Mayor}) & (precioMayor: ${precioMayor})`)
//                   }         
//           }
//        }
//  return precioMayor
//    }
//    console.log(ventaMayor(ventas));


function ventaMayor (ventas){
        if (ventas.length === 0 ) return null;

        let mayor = ventas[0];
        for (const v of ventas){
            if (valorVenta(v) > valorVenta(mayor)){
                mayor =v;
            }
        }
        return mayor;
}
console.table(ventaMayor(ventas))


function sumaCantidad (ventas){
    
    let Promedio = 0;
    let total =0;

    for (const t of ventas){
  
        total = total + t.cantidad;

    }
    return total

}

function ticketPromedio(ventas){

    let Temp_prom = 0;

    for (const p of ventas){
      
      if(p.cantidad > 0){
        Temp_prom = (p.cantidad/sumaCantidad(ventas))*100;
        console.log(`Su promedio es: ${Temp_prom} %`)
      }else{
        console.log(`No hubo ventas`)
      }
    }
}


console.log(sumaCantidad(ventas))

console.log(ticketPromedio(ventas))



function ventasporCiudad(ventas, ciudad){

    for (const b of ventas){

        let sumador =0;

        const eciudad = prompt("Digite la Ciudad a revisar");
        console.log(eciudad)

       // if (b.ciudad.toLowerCase() ==  ){
//
       // }
         console.log(b.ciudad)
         console.log(b.precio)

    }
   
    return sumador
}

console.log(ventasporCiudad(ventas))