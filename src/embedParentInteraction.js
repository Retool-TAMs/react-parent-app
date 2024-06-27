import Retool from 'react-retool';
import React, { useEffect, useState } from "react";

function EmbedApp() {
    const [message, setMessage] = useState('');
    const [dataToPass, setDataToPass] = useState({ parentText: "" });
    const [textInput, setTextInput] = useState(""); // State to hold the value of the textbox

    // Sending data from the Retool app to the parent app
    useEffect(() => {
        const logMessage = (event) => {
            if (event.data.eventType === 'retoolData') {
                setMessage(event.data.payload);
            }
        };

        window.addEventListener("message", logMessage);

        return () => window.removeEventListener("message", logMessage);
    }, []);

    // Send data from the parent app to the Retool app
    const handleClick = () => {
        setDataToPass({ parentText: textInput }); // Use the current value of the textbox to update dataToPass
    };

    // Handler to update the textInput state when the user types in the textbox
    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };

    return (
        <div>
            <input type="text" value={textInput} onChange={handleTextChange} placeholder="Enter value" />
            <button onClick={handleClick}>Send to Retool app</button>
            <p>Data from retool: {message}</p>
            <Retool
                url="https://tam.retool.dev/apps/476553c2-3319-11ef-b67e-6f1e2efc4819/Embedded%20Apps/Embed%20With%20Parent%20Interaction?_embed=true"
                height="500px"
                data={dataToPass}
            />
        </div>
    );
}

export default EmbedApp;
