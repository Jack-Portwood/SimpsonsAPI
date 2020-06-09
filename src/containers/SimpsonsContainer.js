import React from 'react';



class SimpsonsContainer extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
          character: [],
          loading: true,
        };
        this.handClick = this.handleClick.bind(this);
    }
    
        componentDidMount() {
        const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
    
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({character: data[0], loading: false}))
        .catch(err => console.error)
    };
        





        

        secondFetch = () => {
            const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
            fetch(url)
             .then((res) => res.json())
             .then((data) =>
               this.setState({ character: data[0], loading: false })
             )
             .catch((err) => console.error);

        }



        handleClick = () => {
         this.secondFetch()
     }
         
    
    render() { 

        
        
        return (
          <div>
            {this.state.loading || !this.state.character ? (
              <div> Why YOU Little....</div>
            ) : (
              <div>
                <div style={CharacterName}>{this.state.character.character}</div>
                <img style={Image} alt="Character" src={this.state.character.image} />
                <div style={quote}> {this.state.character.quote}</div>
                <button style={button} type='button' onClick= {this.handleClick}>Click to reload!</button>
                
              </div>
            )}
          </div>
        );
    }
}

const CharacterName = {
  color: "Red",
  textAlign: "center"
};

const quote = {
  color: "Red",
  textAlign: "center"

};

const button = {


}

const Image = {
  flexGrow:1,
  justifyContent: "center",
  alignItems: "center",
  height: 500,
  width: null
};



export default SimpsonsContainer;