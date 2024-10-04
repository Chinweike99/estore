import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const currency = "$";
    const deliveryFee = 10
    const navigate = useNavigate();

    // Function to add an item to the cart
    const addToCart = async (itemId, size) => {

        if(!size){
            toast.error('Select product size');
            return;
        }

        let cartCopy = structuredClone(cartItems);// Create a deep copy of the current cartItems state to avoid direct mutation
        // Check if the item already exists in the cart (by itemId)
        if (cartCopy[itemId]) {

            if (cartCopy[itemId][size]) {// If the item exists, check if the selected size is already in the cart
                cartCopy[itemId][size] += 1; // If the item with the specific size is already in the cart, increment the quantity by 1
                toast.success("Successfully added to cart");
            } else {
                cartCopy[itemId][size] = 1; // If the item exists but not in the selected size, add that size with a quantity of 1
                toast.success("New size added to cart");
            }
        } else {
            // If the item doesn't exist in the cart, add it as a new entry
            cartCopy[itemId] = {}; // Initialize a new object for this item
            cartCopy[itemId][size] = 1; // Set the quantity for the selected size to 1
        }

        setCartItems(cartCopy); // Update the cartItems state with the modified cartCopy
    }


    // Function to calculate the total number of items in the cart
const getCartCount = () => {
    let totalCount = 0;  // Initialize a variable to hold the total count of items

    for(const items in cartItems){ // Loop through each item in the 'cartItems' object
        for(const item in cartItems[items]){ // Loop through each size (or variant) of the current item
            try {
                if(cartItems[items][item] > 0){  // Check if the number of items for this specific size is greater than 0
                    totalCount += cartItems[items][item];  // If so, add the count of this size to the total count
                }

            } catch (error) {
                console.log(error); // Catch any errors that may occur during this process and log them
            }
        }
    }
    return totalCount; // After the loops are done, return the total number of items in the cart
}



    // Function to update the quantity of a specific item and size in the cart
    const updateQuantity = (itemId, size, quantity) => {
        let cartCopy = structuredClone(cartItems); // Create a copy of the 'cartItems' state using 'structuredClone' to avoid direct mutation
        cartCopy[itemId][size] = quantity; // Update the quantity for the given item (by itemId) and size in the cart
        setCartItems(cartCopy); // Update the 'cartItems' state with the modified copy of the cart
    }


    const getTotalAmount = () => {
        let totalQuantity = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalQuantity += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalQuantity;
    }



    const value ={
        products, currency, deliveryFee,
        search, setSearch, showSearch, setShowSearch,
        addToCart, cartItems, getCartCount, updateQuantity, getTotalAmount,
        navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;