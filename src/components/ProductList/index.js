import {Component} from 'react'

class ProductList extends Component {
  state = {numberofproducts: 0}

  showingcount = tid => {
    const {id} = this.state
    if (id !== tid) {
      this.setState(prevState => ({
        numberofproducts: prevState.numberofproducts + 1,
      }))
    }
  }

  render() {
    const {location} = this.props
    const {state} = location
    const {productList} = state
    const {numberofproducts} = this.state
    return (
      <div>
        {productList.map(eachProduct => (
          <div>
            <h1>{eachProduct.category}</h1>
            <h1>{eachProduct.name}</h1>
            <h1>{eachProduct.description}</h1>
            <h1>{eachProduct.price}</h1>
            <button type="button" onClick={this.showingcount}>
              showcount
            </button>
            <h2>{numberofproducts}</h2>
          </div>
        ))}
      </div>
    )
  }
}
export default ProductList
