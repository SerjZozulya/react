import { render, screen } from '@testing-library/react'
import React from 'react'
import Navbar from './../../src/UI/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', ()=> {
    it('Should render navbar', () => {

        render(<BrowserRouter><Navbar/></BrowserRouter>)

        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()

    })
})