import React from 'react'

export default class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			input1: 0, 
			input2: 0, 
			result: 0
		}

		this.handleInputChange1 = this.handleInputChange.bind(this, 'input1')
		this.handleInputChange2 = this.handleInputChange.bind(this, 'input2')
		this.handleSumButton = this.handleSumButton.bind(this)
	}

	sum(){
		return this.state.input1 + this.state.input2
	}

	handleInputChange(which, event){
		const val = parseInt(event.target.value, 10)

		this.setState({
			[which]: val
		})
	}

	handleSumButton(event){
		this.setState({
			result: this.sum()
		})
	}

	render(){
		return(
			<div className = "container">
				<div className = "calculator">
					<input value={this.state.input1} onChange={this.handleInputChange1}/>
					<input value={this.state.input2} onChange={this.handleInputChange2}/>
					<button onClick={this.handleSumButton}>Add</button>
					<br />
					the sum is {this.state.result}	
				</div>
			</div>
			)
	}
}