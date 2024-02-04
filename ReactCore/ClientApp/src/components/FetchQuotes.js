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
    }, [])


    return (
        <div>
            {
                quotes.map(function (quote, i) {
                    return <table key={i}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>last Name</th>
                                <th>Cats</th>
                                <th>Dogs</th>
                                <th>Date of Departure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {[quote.petOwner.firstName]}
                                </td>
                                <td>
                                    {[quote.petOwner.lastName]}
                                </td>
                                <td>
                                    {[quote.petOwner.cat.quantity]}
                                </td>
                                <td>
                                    {[quote.petOwner.dog.quantity]}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                })}
        </div>
    )

}
export default FetchQuotes;