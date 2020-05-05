import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { listarLivros, deleteLivro } from '../../../services/Livro';

class LivroListagem extends React.Component {

  state = {
   livros: []
  }
  
  componentDidMount() {
    this.listarLivros();
  }

  async listarLivros() {
    const resultado = await listarLivros();
    this.setState({
      livros: resultado
    });
  }
  
  async deletarPorId(id){
    await deleteLivro(id);
    this.listarLivros();  
  }  

  render() {
    return(
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Id:</TableCell>
              <TableCell>Nome:</TableCell>
              <TableCell>Código:</TableCell>
              <TableCell>Páginas:</TableCell>
              <TableCell>Preço:</TableCell>
              <TableCell>Categorias:</TableCell>
              <TableCell>Editar:</TableCell>
              <TableCell>Deletar:</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
                {this.state.livros.map(livro => (
                    <TableRow key={livro.id}>
                        <TableCell>{livro.id}</TableCell>
                        <TableCell>{livro.nome}</TableCell>
                        <TableCell>{livro.codigo}</TableCell>
                        <TableCell>{livro.paginas}</TableCell>
                        <TableCell>{livro.preco}</TableCell>
                        <TableCell>{livro.categoria.nome}</TableCell>
                        <TableCell>
                          <Link to={`/form/${livro.id}`}>
                            <Button>
                              <EditIcon/>
                            </Button>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Button onClick={() => this.deletarPorId(livro.id)}>
                            <DeleteIcon/>
                          </Button>
                        </TableCell>
                    </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default LivroListagem;