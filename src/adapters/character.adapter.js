

export const characterAdapter = (character) => ({
  nombre: character.name,       
  imagen: character.image,      
  estado: character.status,     
  especie: character.species,    
});
