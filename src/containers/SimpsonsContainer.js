import React from 'react';



class SimpsonsContainer extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
            loading: true,
            character: null,

          
        }
        this.handClick = this.handleClick.bind(this);
    }
    
        async componentDidMount() {
        const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'

        const response = await fetch(url);
        const data = await response.json();
        this.setState({character: data[0], loading: false})

        };

        handleClick = () => {
            this.setState({character:null});
        }
       //Button works but does not return new character hits loading.
    
    
    render() { 

        
        
        return (
          <div>
            {this.state.loading || !this.state.character ? (
              <div> Why YOU Little....</div>
            ) : (
              <div>
                <div>{this.state.character.character}</div>
                <img alt="Character" src={this.state.character.image} />
                <div>{this.state.character.quote}</div>
                <button type='button' onClick= {this.handleClick}>Click to reload!</button>
                
              </div>
            )}
          </div>
        );
    }
}




export default SimpsonsContainer;