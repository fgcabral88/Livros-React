import Api from './Api';
 
export async function listaCategoria() {
    const categorias = await Api.get("categoria")
    return categorias.data;
}