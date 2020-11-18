// import React, { Component } from 'react';

// class RestaurantInput extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//       text: ''
//     }
//   }

//   handleChange = event => {
//     this.setState({
//       text: event.target.value
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     this.props.addRestaurant(this.state.text)
//     this.setState({text: ''})
//   }

//   render() {
//     return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//             <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="Restaurant"/>
//             <input type="submit"/>
//           </form>
//       </div>
//     );
//   }
// };

// export default RestaurantInput;




import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;