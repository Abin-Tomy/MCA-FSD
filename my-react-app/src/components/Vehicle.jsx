import React from "react";


export default function Vehicle({ brand, model, color }) {
return (
<div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
<h3>{brand} - {model}</h3>
<p>Color: {color}</p>
</div>
);
}