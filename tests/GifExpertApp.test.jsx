import { render } from "@testing-library/react"
import GifExpertApp from '../src/GifExpertApp'

describe('Pruebas en GifExpertApp', () => { 
    test('bebe hacer un match con snapshop', () => {
        const { container } = render( GifExpertApp )
        expect( container ).toMatchSnapshot()
    })
})