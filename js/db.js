// console.log('Database');

// db.collection('recipes').onSnapshot((snapshot) => {
//     snapshot.docChanges().forEach(change =>{
//         if(change.type === 'added'){
//             // Añade la receta al DOM
//             console.log('Añadido');
//             console.log(change.doc.data(), change.doc.id);
//         } else if (change.type === 'removed'){
//             // Borra la receta del DOM
//             console.log('Eliminado');
//             console.log(change.doc.data(), change.doc.id);
//         } else {
//             console.log('Acción de BD desconocida');
//         }
//     })
// })