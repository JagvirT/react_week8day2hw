import React, { Component } from 'react'

export default class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      search_string: "",
    };
  }

  onSearchChange = (event) => {
    const search_string = event.target.value
    this.setState(() => {
        return {search_string: search_string}
    })
  };


  render() {
    const { jokes } = this.props
    const { search_string} = this.state
    const { onSearchChange } = this

    console.log(jokes)
    return (
      <div>
        <input className="search-box" type="search" placeholder="Enter Number" onChange={onSearchChange} />
      </div>
    )
  }
}


// import React, { Component } from "react";

// export default class SearchBox extends Component {
//   constructor() {
//     super();

//     this.state = {
//       search_string: "",
//     };
//   }

//   onSearchChange = (event) => {
//     const search_string = event.target.setup.toLowerCase()

//     this.setState(() => {
//         return {search_string: search_string}
//     })
//   };

//   render() {

//     console.log(this.props.jokes)
//     const { search_string } = this.state
//     const { jokes } = this.props
//     const { onSearchChange } = this

//     const filtered_jokes = jokes.filter((joke) => {
//         return (
//             joke.name.includes(search_string)
//         )
//     })

//     return (

//         <div>
//         <input
//           className="search-box"
//           type="search"
//           placeholder="Enter Oakland"
//           onChange={onSearchChange}
//         />
//         {filtered_jokes.map((joke) => {
//             return (
//                 <h1 key={joke.name}>{joke.name}</h1>
//             )
//         })}
//       </div>
//     );
//   }
// }