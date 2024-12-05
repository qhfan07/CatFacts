import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';
import React, { useState, useEffect } from 'react';

// Qianhao Fan

function CatFacts() {
    const [catFact, setCatFact] = useState("Loading...");
    const [isLoading, setIsLoading] = useState(false);

    async function generateCatFact() {
        setIsLoading(true);
        try {
            const response = await axios.get('https://catfact.ninja/fact');
            setCatFact(response.data.fact);
        } catch (error) {
            setCatFact("Failed to fetch a cat fact. Please try again!");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        generateCatFact();
    }, []);

    return (
        <div className="App">
            <div className='catFactsText'>
                {isLoading ? "Loading..." : catFact}
                {/* The cat fact should be displayed here*/} 
            </div>
            <div>
                <button onClick={generateCatFact} className="catFactBtn">
                    Click me for a cat fact!
                </button>
            </div>
            <div>
                <img src={CatLogo} className="catFactImg" />
            </div>
        </div>
    )
    }

export default CatFacts
