import { getByRole, render, screen } from "@testing-library/react"
import { GitItem } from "../../src/components/GitItem"

describe('Pruebas en GitItem.jsx', () => { 
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'
    test('Debe hacer match con el snapshop', () => {
        const { container } = render(<GitItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot()
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GitItem title={ title } url={ url } />)
        //screen.debug()
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
    }) 

    test('Debe mostrar el título en el componente', () =>  {
        render(<GitItem title={ title } url={ url } />)
        expect( screen.getByText( title )).toBeTruthy()
    })
})