import React from "react";
import Vehicle from "./components/Vehicle";


export default function App() {
return (
<div style={{ padding: '2rem' }}>
<h1>Car Showcase </h1>
<Vehicle brand="Tesla" model="Model S" color="Red" />
<Vehicle brand="BMW" model="X5" color="Blue" />
<Vehicle brand="Audi" model="A4" color="Black" />
</div>
);
}