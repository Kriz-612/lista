/*import { render, screen, fireEvent } from '@testing-library/react'
import List from './List'

describe('List component', () => {
     it('should create a new task', () =>{ 
        render(<List />)
        const input = screen.getByPlaceholderText('Adicionar nova tarefa')
        const botao = screen.getByTestId('add-task')

        fireEvent.change(input, {
          target: {
              value: 'estudar react'
          }  
        } )

        fireEvent.click(botao)
        
        const itemUmLista = screen.getByText('estudar react') 
        expect(itemUmLista).toHaveTextContent('estudar react')

/////
fireEvent.change(input, {
    target: {
        value: 'estudar js'
    }  
  } )

  fireEvent.click(botao)
  
  const itemDoisLista = screen.getByText('estudar js') 
  expect(itemDoisLista).toHaveTextContent('estudar js')



     })
     it.skip('should not create a new task when the title is empty',() => {

     })
})
*/
 