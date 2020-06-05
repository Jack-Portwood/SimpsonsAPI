import React from 'react';



class SimpsonsContainer extends React.Component {
        state = {
            loading: true,
            character: null,

          
        };


    async componentDidMount() {
        const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({character: data[0], loading: false})
            
        }
    

    render() { 

        
        
        return (
          <div>
            {this.state.loading || !this.state.character ? (
              <div> loading....</div>
            ) : (
              <div>
                <div>{this.state.character.character}</div>
                <img src= {this.state.character.image}/>
                <div>{this.state.character.quote}</div>
              </div>
            )}
          </div>
        );
    }
}




export default SimpsonsContainer;