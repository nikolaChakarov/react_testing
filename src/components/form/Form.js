import { useState } from "react";
import styled from "styled-components";

const Form = () => {
    const [formInfo, setFormInfo] = useState({
        username: "",
        homepass: 0,
    });

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = name === "homepass" ? +e.target.value : e.target.value;

        setFormInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formInfo);
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    <span>Username</span>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formInfo.username}
                        onChange={onInputChange}
                    />
                </label>

                <label htmlFor="homepass">
                    <span>Homepass</span>

                    <input
                        type="number"
                        id="homepass"
                        name="homepass"
                        min={0}
                        value={formInfo.homepass}
                        onChange={onInputChange}
                    />
                </label>

                <button>Submit</button>
            </form>
        </FormContainer>
    );
};

const FormContainer = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 50vw;
    }
`;

export default Form;
