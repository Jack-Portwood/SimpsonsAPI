import React from 'react';



class SimpsonsContainer extends React.Component {
        state = {
            loading: true,
            character: null,

          
        }

    
    
    

    async componentDidMount() {
        const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'

        const response = await fetch(url);
        const data = await response.json();
        this.setState({character: data[0], loading: false})
        };

       refreshPage() {
           window.location.reload(true);
       }
           
       //Currently working on getting the page it update either using setState or refreshing the page
    

    render() { 

        
        
        return (
          <div>
            {this.state.loading || !this.state.character ? (
              <div> loading....</div>
            ) : (
              <div>
                <div>{this.state.character.character}</div>
                <img alt="Character" src={this.state.character.image} />
                <div>{this.state.character.quote}</div>
                <button type='button' onClick = {refreshPage}>Click to reload!</button>
                
              </div>
            )}
          </div>
        );
    }
}




export default SimpsonsContainer;