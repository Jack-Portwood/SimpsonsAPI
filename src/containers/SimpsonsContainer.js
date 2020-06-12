import React from 'react';



class SimpsonsContainer extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
          character: [],
          loading: true,
        };
        this.handClick = this.handleClick.bind(this);
        
    };
    
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

    };

        handleClick = () => {
         this.secondFetch()
     };

             
    
    render() { 
    
        return (
          <div className="container">
            {this.state.loading || !this.state.character ? (
              <h5> Why YOU Little....</h5>
            ) : (
              <div>
                <img alt="Header" className="title" src="https://fontmeme.com/permalink/200612/648dd5356b617ee05828d11de5e46fb7.png" alt="simpsons-font" border="0"/>
                <img alt="Character" className="image" src={this.state.character.image} />
                <h2 className="quote"> "{this.state.character.quote}"</h2>
                <h3 className="name">"{this.state.character.character}." </h3>
                <button type="button" onClick={this.handleClick} className="button">
                  Click to reload!</button>
                <h4>API by Jason Luboff</h4>
              </div>
            )}
          </div>
        );
        
    }
    
}








export default SimpsonsContainer;