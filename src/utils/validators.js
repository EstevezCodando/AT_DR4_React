export const validateForm = (formData) => {
  let hasError = false;
  const errors = {};

  // Validação de nome (obrigatório, apenas letras, pelo menos 4 caracteres)
  if (!formData.nome.trim()) {
    errors.nome = "Nome é obrigatório.";
    hasError = true;
  } else if (!/^[a-zA-Z\s]+$/.test(formData.nome)) {
    errors.nome = "O nome deve conter apenas letras.";
    hasError = true;
  } else if (formData.nome.length < 4) {
    errors.nome = "O nome deve conter pelo menos 4 letras.";
    hasError = true;
  }

  // Validação de email (obrigatório, deve conter @, pelo menos 5 caracteres)
  if (!formData.email.trim()) {
    errors.email = "Email é obrigatório.";
    hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email inválido. Deve conter '@' e um domínio válido.";
    hasError = true;
  } else if (formData.email.length < 5) {
    errors.email = "O email deve conter pelo menos 5 caracteres.";
    hasError = true;
  }

  // Validação de telefone (obrigatório, deve ser numérico, pelo menos 8 dígitos)
  if (!formData.telefone.trim()) {
    errors.telefone = "Telefone é obrigatório.";
    hasError = true;
  } else if (!/^\d+$/.test(formData.telefone)) {
    errors.telefone = "O telefone deve conter apenas números.";
    hasError = true;
  } else if (formData.telefone.length < 8) {
    errors.telefone = "O telefone deve ter pelo menos 8 dígitos.";
    hasError = true;
  }

  return { errors, isValid: !hasError };
};
