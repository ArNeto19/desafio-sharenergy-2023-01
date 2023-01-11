export function isCPFValid(cpf: string) {
  if (typeof cpf !== "string") return false;

  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;

  return true;
}
