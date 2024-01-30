import React, { useState, useEffect } from 'react';

const FetchQuotes = () => {

    const [quotes, setQuotes] = useState([]);  //Set Quotes to empty array

    useEffect(() => {
        fetch('/api/Quotes/')
            .then((results) => {           
                return results.json();
            })
            .then(data => {
                setQuotes(data)
            })
    },[])
    

    return (
        <main>
            {
                (quotes != null) ? quotes.map((quote) => <h3>{quote.petOwner.FirstName}</h3>) :
                    <div>Loading...</div>
            }
        </main>
        )

}
export default FetchQuotes;