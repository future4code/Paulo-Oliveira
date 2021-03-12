import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentarios: [
			{
				coment: ''
			}
		],

		valorInputComentario: ''
	}

	adicionarComentario = () => {
		const novoComentario = {
			coment: this.state.valorInputComentario
		}

		const novosComentarios = [...this.state.comentarios, novoComentario]

		this.setState({ comentarios: novosComentarios })
	}

	onChangeComentario = (event) => {
		this.setState({
			valorInputComentario: event.target.value
		})
	}

	render() {
		const listaDeComentarios = this.state.comentarios.map((comentario) => {
			return (
				<p key={comentario.coment}>
					{comentario.coment}
				</p>
			)
		})

		return <div><div className={'comment-container'}>
			<input 
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.adicionarComentario}>Enviar</button>
			</div>
			<div className={'add-coment'}>
				{listaDeComentarios}
			</div>
		</div>
	}
}
