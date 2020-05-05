import Api from './Api';

// Listar livro:
export async function listarLivros() {
  const res = await Api.get("livro");
  return res.data;
}

// Listar livro por Id:
export async function listarLivroPorId(id) {
  const res = await Api.get(`livro/${id}`);
  return res.data;
}

// Salvar livro:
export async function salvarLivro(id, livro) {
  if(id !== undefined) {
    const res = await Api.put(`livro/${id}`, livro);
    return res.data;
  }
  else {
    const res = await Api.post('livro', livro);
    return res.data;
  }
}

// Delete livro:
export async function deleteLivro(id) {
  const res = await Api.delete(`livro/${id}`);
  return res.data;
  
}