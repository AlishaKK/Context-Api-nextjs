# Context-Api-nextjs
 Context-Api-nextjs
 Next.js Context API Project

This project demonstrates how to use the React Context API in a Next.js application. The Context API allows you to share state across multiple components without having to explicitly pass props through every level of your component tree. This is especially useful for managing global state, such as user authentication data, theme preferences, or shopping cart contents.

Features
**Global State Managemen**t: Utilize the Context API to manage state across various components.
**Simple and Clean Code:** By removing prop drilling, the code remains clean and manageable.
Real-world Examples: The project includes examples of adding items to a shopping cart and displaying them.

Using the Context API
1. Creating a Context
Create a context using React.createContext() in a separate file (e.g., context.js):

javascript

Copy
import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const add = (item) => {
        setCart((prev) => [...prev, item]);
    };

    return (
        <CardContext.Provider value={{ cart, add }}>
            {children}
        </CardContext.Provider>
    );
};
2. Wrapping your Application
Wrap your application with the CardProvider in _app.js. This provides your context to the entire app:

javascript

Copy
import { CardProvider } from './context';

function MyApp({ Component, pageProps }) {
    return (
        <CardProvider>
            <Component {...pageProps} />
        </CardProvider>
    );
}

export default MyApp;
3. Consuming Context in Components
Use the useContext hook to consume the context within any component:

javascript

Copy
import { useContext } from 'react';
import { CardContext } from './context';

const Shop = () => {
    const { add } = useContext(CardContext);

    // Add your component code here
};
Conclusion
This project serves as a foundational understanding of how to implement the Context API in a Next.js application. You can extend the functionality and adapt it to suit more complex state management needs.
