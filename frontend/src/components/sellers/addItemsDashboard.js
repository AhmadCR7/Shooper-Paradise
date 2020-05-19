import React from 'react';
import * as actions from '../../redux/actions/sellerActions';
import { connect } from 'react-redux';
import { Input,Form,Button } from 'semantic-ui-react'
import {useDispatch} from 'react-redux'

const AddItemsDashboard = (props) => {
  const dispatch = useDispatch()
      return (
        <Form>
          <div>
            <div> <br/>
              <Input label= "Item Name" type='text' placeholder="item Name" value={props.itemName} onChange={e => props.setItemName(e.target.value)}/>
            </div>
            <div> <br/>
              <Input label= "Item Price" type='number' placeholder="item Price" value={props.itemPrice} onChange={e => props.setItemPrice(e.target.value)}/>
            </div>
            <div> <br/>
              <Input label= "Item Quantity" type='number' placeholder="item Quantity" value={props.itemQuantity} onChange={e => props.setItemQuantity(e.target.value)}/>
            </div>
            <div> <br/>
              <Input label= "Item Description" type='text' placeholder="item Description" value={props.itemDescription} onChange={e => props.setItemDescription(e.target.value)}/>
            </div><br/>
              <Button positive onClick= {() => dispatch(actions.addItem()) }>Add Item</Button>
            <div><br/>
                <h3>{props.itemsAdded === 'true' ? "Items added to the inventory" : props.itemsAdded === 'false' ? "Please try again" : props.itemsAdded}</h3>
            </div>
          </div>
        </Form>
      )
    
};

const mapStateToProps = (state) => ({
    
    itemName: state.sellerReducer.itemName,
    itemPrice: state.sellerReducer.itemPrice,
    itemQuantity: state.sellerReducer.itemQuantity,
    itemDescription: state.sellerReducer.itemDescription,
    itemsAdded: state.sellerReducer.itemsAdded
    
})

const mapDispatchToProps = (dispatch) => ({
    
    setItemName: (name) => dispatch(actions.setItemName(name)),
    setItemPrice: (price) => dispatch(actions.setItemPrice(price)),
    setItemQuantity: (quantity) => dispatch(actions.setItemQuantity(quantity)),
    setItemDescription: (description) => dispatch(actions.setItemDescription(description))
})

export default connect (mapStateToProps, mapDispatchToProps)(AddItemsDashboard)
