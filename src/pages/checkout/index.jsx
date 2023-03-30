import { useState } from "react";

function Checkout() {
    const [firstName, setFirstName] = useState("");
    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    return (
        <div>
            <from>
                <label htmlFor="first-name">First name</label>
                <input
                    name="first-name"
                    value={firstName}
                    placeholder="Your first name"
                    onChange={onFirstNameChange}
                />
            </from>
        </div>
    );
}

export default Checkout;
