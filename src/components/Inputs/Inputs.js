import React, { Component } from 'react'
import Input from '../UI/Input/Input'

class Inputs extends Component {
    state = {
        orderForm:{
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Name'
                },
                value: ''
            },
            age: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter Age'
                },
                value: 0
            },
            experience: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'beginner',
                            displayValue: 'Beginner'
                        },
                        {
                            value: 'advanced',
                            displayValue: 'Advanced'
                        }
                    ]
                },
                value: ''
            },
            extra: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Additional Information'
                },
                value: ''
            }
        }
    }

  onInputChangedHandler = (event, inputIndentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIndentifier]
        }
        updatedFormElement.value = event.target.value
        updatedOrderForm[inputIndentifier] = updatedFormElement
        this.setState({orderForm: updatedOrderForm})
  }

  render() {

    const formElementArray = []
    for(const key in this.state.orderForm){
        formElementArray.push({
            id: key,
            config: this.state.orderForm[key]
        })
    }


    return (
      <React.Fragment>
        <form>
           
            {formElementArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.onInputChangedHandler(event, formElement.id)}
                    />
            ))}
            {/* <Input inputtype="input" type="text"/> */}
        </form>
      </React.Fragment>
        
    )
  }
}

export default Inputs