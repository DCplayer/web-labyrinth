import React from 'react'; 
import ReactDom from 'react-dom'; 

class Labirynth extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			width: 10, 
			height: 10
		}
	}
}

ReactDom.render(<Labirynth/ >, document.getElementById("root")); 