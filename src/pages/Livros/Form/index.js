import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { listarLivroPorId, salvarLivro } from '../../../services/Livro';
import { listaCategoria } from '../../../services/Categoria';

import './styles.css';

class LivroForm extends React.Component {

  state = {
    livro: {
      id: 0,
      nome: '',
      paginas: 0,
      codigo: 0,
      preco: 0,
      categoria: {
        id: 0,
        nome: ''
      }
    },
    categorias: []
  }

  id = 0;

  async componentDidMount() {

    this.id = this.props.match.params.id;
    if(this.id !== undefined) {
      const livros = await listarLivroPorId(this.id);
      this.setState({ livro: livros });
    }
    
    const categorias = await listaCategoria();
    this.setState({ categorias: categorias });
    

  }

  async handleSubmit(event) {
    event.preventDefault();
    await salvarLivro(this.id, this.state.livro);
  }

  render() {
    return(
      <div className="root">
        <form onSubmit={event => { this.handleSubmit(event)}}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField label="Codigo" value={this.state.livro.codigo}/>
            </Grid>
            <Grid item xs={9}>
              <TextField label="Nome" value={this.state.livro.nome}/>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Paginas" value={this.state.livro.paginas}/>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Preço" value={this.state.livro.preco}/>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <InputLabel id="categoria">Categoria</InputLabel>
                <Select 
                  labelId="categoria" 
                  value={this.state.livro.categoria.id} 
                  onChange={event => {
                    let novoLivro = this.state.livro;
                    novoLivro.categoria = this.state.categorias.find(x => x.id === event.target.value);
                    this.setState({livro: novoLivro})
                  }}
                >
                  <MenuItem value={0} disabled>
                    Selecione...
                  </MenuItem>
                  {this.state.categorias.map(categoria => (
                    <MenuItem value={categoria.id} key={categoria.id}>{categoria.nome}</MenuItem>
                  ))}
                </Select>
                
              </FormControl>
            </Grid>
          </Grid>
          <div className="btn-container">
            <Button color="primary" type="submit">Salvar</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default LivroForm;