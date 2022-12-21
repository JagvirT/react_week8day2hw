import React, { Component } from "react";

export default class JagInfo extends Component{
    constructor(){
        super();

        this.state = {
            'info':[
                {
                'name1': 'Jag',
                'name': "A's" 
                },
                {
                'id': 1,
                'name': 'raiders'
                },
                {
                'id': 2,
                'name': 'warriors'
                }
        ]
        }
    }

    render() {
      const stylemain = {
        color: 'purple',
        fontFamily: 'Rockwell',
        textAlign: 'center',
        marginBottom: '40px'
      }
        return (
          <div className="JagInfo">
            {this.state['info'].map((info) => {
              return (
                <div key={info['id']}> 
                  <h1 style= {stylemain}>{info['name1']}</h1>
                  <h2 style= {stylemain}> Favorite teams: {info['name']}</h2>
                </div> 
              )
            })}
          </div>
        );
    }
}