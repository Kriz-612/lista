import { render, screen } from '@testing-library/react'
import Header from './Header'
describe ('Header component', () => {
 it('should render the correct header', async () => {
   render(<header />) 

   const LogoImage = await screen.findAllByAltText('logotipo da listinha')
   expect(LogoImage).toBeInTheDocument()
 } )
})