function hashCode(s) {
  let hash = 0;
  if (s.length === 0) return hash;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convertir a un número entero de 32 bits
  }
  return Math.abs(hash);
}

export function calculateRating(text) {
  const hashValue = hashCode(text);
  const result = hashValue % 3; // Obtiene el módulo 3 para mapear a uno de los tres valores de calificación

  switch (result) {
    case 0:
      return 4;
    case 1:
      return 4.5;
    case 2:
      return 5;
    default:
      return 4; // Este caso no debería ocurrir, pero se incluye por precaución
  }
}
