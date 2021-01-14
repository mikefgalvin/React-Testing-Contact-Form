import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test("renders without errors", async ()=>{
    //Arrange
    act(() => { 
    render(<ContactForm/>);
});

    //Act 
    //1. Get the input fields
    const firstNameInput = screen.queryByPlaceholderText(/edd/i);
    const lastNameInput = screen.queryByPlaceholderText(/burke/i);
    const emailInput = screen.queryByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.queryByLabelText(/message/i);
    // console.log('first name',firstNameInput);
    // console.log('last name',lastNameInput);
    // console.log('email',emailInput);
    // console.log('message',messageInput);

    //2.
   
    userEvent.type(firstNameInput, 'mik');
    userEvent.type(lastNameInput, 'galvin');
    userEvent.type(emailInput, 'mike@mike.com');
    userEvent.type(messageInput, 'testing sucks');
    

    // //3. 
    const button = screen.getByRole('button');
    // act(() => { 
        userEvent.click(button);
    // });

   

    // //Assert
    const newPerson = await screen.findByTestId('custom-element');
    expect(newPerson).toBeInTheDocument();

    console.log(newPerson);

    // newPerson
    //     .then((newPerson) => {
    //         expect(newPerson).toBeInTheDocument();
    //     })
    

    
    // console.log(newPerson);
 
});


/*
1. User types first name into input - limit of 3 char
2. User types last name into input 
3. user types email into input 
4. user types message into input 






*/