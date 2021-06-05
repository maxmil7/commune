'use strict';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * data example
   *  "members": [
      {
        "name": "Star auto repair",
        "category": "Car maintenance",
        "phone": "123-456-7890",
        "address": "123 Main St, Townsville FL"
      }
    ]
  */
  async componentDidMount() {
    let data;
    try {
      data = process.env.data;
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ members: data && data.members });
  }

  render() {
    const { members=[] } = this.state;
    return (
      <div class='-container'>
        <div class="-heading">Commune</div>

        { members.map(e => {
          const tel = e.phone;
          const telLink = `tel:${tel}`;
          return <div class="-child">
              <div class='-flex-grandchild -name'>{e.name}</div>
              <div class='-flex-grandchild -title'>{e.category}</div>
              <a class='-flex-grandchild -tel' href={telLink}>{tel}</a>
              <div class='-flex-grandchild -address'>{e.address}</div>
          </div>
        }) 
        }
      </div>
    )
  }

}

const domContainer = document.querySelector('#button_container');
ReactDOM.render(<List />, domContainer);