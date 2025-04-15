import React from 'react';
import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";




// TODO: 
/*
- aller chercher le prompt dans le parent app qui est le Message 
- le remettre dans AIPrompt
- l'utiliser comme prompt dans cette fonction 
- intégrer le jsx return de cette fonction dans app.jsx sous forme de message
 */



async function AIprompt() {

    const apiKey = import.meta.env.VITE_API_KEY;

    const ai = new GoogleGenAI({apiKey});

    async function main() {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: "Tell me a 3 sentences story about peanuts",
        });
        console.log(response.text);
    }
    
    await main();





    return (
        <p>{response.text}</p>
    )
}

export default AIprompt




