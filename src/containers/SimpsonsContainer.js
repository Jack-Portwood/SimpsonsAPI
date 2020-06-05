import React from 'react';

class SimpsonsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          character: []
        };
    

        
    }

    componentDidMount(){
        const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
;

        fetch(url)
        .then(res => res.json())
        .then((character)=>{
            this.setState({character: character})
        .catch(err=> console.error);
        })

}
    render() { 

        return(
        <div>
        <h1>The Simpson Quote Generator ! </h1>
        <h2>thank fuck for that</h2>
        </div>

        );
    }
}


export default SimpsonsContainer;