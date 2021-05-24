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
      <div class = 'max-h-screen p-5 flex-col bg-yellow-100'>
        <h1 class='text-center font-semibold text-blue-600 text-3xl'>Commune</h1>

        { members.map(e => {
          const tel = e.phone;
          const telLink = `tel:${tel}`;
          return <div class='border-2 p-5 my-5 bg-yellow-500 rounded-xl text-xl'>
            <div class='font-bold'>{ e.name }</div>
            <div>{ e.category }</div>
            <div class='text-blue-900'>
              <a href={telLink}>
                { tel }
              </a>
            </div>
            <div>{ e.address }</div>
          </div>
        }) 
        }
  
      </div>
    )
  }

}

const markup = arr => 
  arr.map(e => <li>{e.category}</li>)


const domContainer = document.querySelector('#button_container');
ReactDOM.render(<List />, domContainer);