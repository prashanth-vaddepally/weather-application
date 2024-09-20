import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class AddProduct extends Component {
  state = {
    category: '',
    name: '',
    price: '',
    description: '',
    productslist: [],
  }

  nameFunction = event => {
    this.setState({
      name: event.target.value,
    })
  }

  categoryFunction = event => {
    this.setState({
      category: event.target.value,
    })
  }

  priceFunction = event => {
    this.setState({
      price: event.target.value,
    })
  }

  descriptionFunction = event => {
    this.setState({
      description: event.target.value,
    })
  }

  oneFunction = event => {
    event.preventDefault()

    const {category, name, price, description} = this.state

    const newUser = {
      price,
      name,
      description,
      category,
      id: uuidv4(),
    }

    this.setState(prevState => ({
      productslist: [...prevState.productslist, newUser],
      price: '',
      name: '',
      description: '',
      category: '',
    }))
  }

  showing = () => {
    const {history} = this.props
    const {productslist} = this.state
    history.push('/ProductList', {productList: productslist})
  }

  render() {
    const {category, name, price, description} = this.state
    return (
      <form className="the-page" onSubmit={this.oneFunction}>
        <label htmlFor="categoryid">category</label>
        <input
          id="categoryid"
          type="text"
          value={category}
          onChange={this.categoryFunction}
        />
        <br />
        <label htmlFor="nameid">name</label>
        <input
          id="nameid"
          type="text"
          value={name}
          onChange={this.nameFunction}
        />
        <br />
        <label htmlFor="descriptionid">description</label>
        <input
          id="descriptionid"
          type="text"
          value={description}
          onChange={this.descriptionFunction}
        />
        <br />
        <label htmlFor="priceid">price</label>
        <input
          id="priceid"
          type="text"
          value={price}
          onChange={this.priceFunction}
        />
        <button type="submit">submit</button>
        <button type="button" onClick={this.showing}>
          show products
        </button>
      </form>
    )
  }
}
export default withRouter(AddProduct)
