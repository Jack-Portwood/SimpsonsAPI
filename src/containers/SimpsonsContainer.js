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
        const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
    
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({character: data[0], loading: false}))
        .catch(err => console.error)
    };
        //    const url = 'https://restcountries.eu/rest/v2/all';

//     fetch(url)
//       .then(res => res.json())
//       .then(countries => this.setState({ countries: countries }))
//       .catch(err => console.error);
//   }





        

        secondFetch = () => {
            const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
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