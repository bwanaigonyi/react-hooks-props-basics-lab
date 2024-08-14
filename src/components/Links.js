import React from "react";

export default function Links(prop){
    return (
        <>
            <h3>Links</h3>
            <a href = {prop.github}>{prop.github}</a>
            <a href = {prop.linkedin}>{prop.linkedin}</a>
        </>

    )
};
