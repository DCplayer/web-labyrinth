import React from 'react'; 
import ReactDom from 'react-dom'; 
import axios from 'axios'; 
import "./board.css";


class Labirynth extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			width: 10, 
			height: 10, 
			direction: 'abajo', 
			onWin: false, 
			maze: [[]], 
			allowance: [],
			cuento: "0", 
			x: 0,
			y: 0
		}

	}

	generate_maze(){
		let url = 'http://34.210.35.174:3001?w=' + this.state.width + '&h=' + this.state.height + "&type=json"
		return url; 
	}


	 componentDidMount() {
	  this.setState({ isLoading: true })
	  const api = this.generate_maze()
	  axios.get(api)
	    .then(result => this.setState({
				maze: result.data
			}))
	    .catch(error => this.setState({
		    error,
		    isLoading: false,
	     }))
	}

	render(){
		console.log(this.state.maze); 
		const maze = this.state.maze; 
		let was = false; 
		let wasSpace = false; 
		return(
			<div class = "maze">{
				maze.map((line) =>{
					return line.map((pick) =>{
						console.log(pick);
						if(pick == "+" || pick == "|"){
							return(
								<div class="pared">{pick}</div>
								)
						}
						else if(pick == "-"){
								return(
									<div class="pared">{pick}</div>
									)
						}
						else if(pick == "p"){
							return(
								<div class="piso">{pick}</div>
								)
						}
						else if(pick == "g"){
							return(
								<div class="final">{pick}</div>
								)
						}
						if(pick == " "){
							return(
							<div class="piso">{pick}</div>
							)	
						}

					})
				})
			}</div>
		)
	}
}

ReactDom.render(
	<Labirynth />,
	document.getElementById('root')
)