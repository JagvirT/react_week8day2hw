import React, { Component } from "react";

export default class Superhero extends Component {
    constructor() {
        super();
    
        this.state = {
          'superhero1' : {
            'first_name': "Bruce",
            'last_name': 'Wayne',
            'character': "Batman",
            'ability': 'throwing bat stars'
          },
          'favcity':{
            'city': 'Oakland',
            'team1': 'Raiders',
            'team2': "A's"
          }
        };
    }

    render() {
      const stylep = {
        color: 'blue', 
        fontFamily: 'Papyrus',
        padding: '10px'
      };
      return (
        <div>
          <p style={stylep}>Jag's favorite super hero is {this.state.superhero1.character} whose real name is {this.state.superhero1.first_name} {this.state.superhero1.last_name}. He is the best character because even though he has no superpowers he is able to defeat the villians using cunning and
          adaptable skills he has aquired over time. One of his most cunning moves that takes his opponents off guard is when he is {this.state.superhero1.ability}. </p>
          <p style={stylep}> Jag's favorite city is {this.state.favcity.city}. He was born near the area and spent a lot of his time playing sports
          and going to the {this.state.favcity.team1} and {this.state.favcity.team2} games with his family. So many memories were made 
          going to these sporting event that it holds a speical place in his heart.</p>
        </div>
      )
    }    
}