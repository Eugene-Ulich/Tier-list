import React, { useState } from "react";

export default function CreateNewTierList () {
    const {name, setName} = useState();
    const {description, setDescription} = useState();
    const {images, uploadImages} = useState();
    function handleNewTierlist (event) {
        event.preventDefault();

    }
    return (
        <div>
            <h1>Custom Tier List</h1>
            <p>Create your own tier list template</p>
            <form onSubmit={handleNewTierlist}>
                <input value={name} onChange={setName} type="text" placeholder="Name your Tier List..." required /><br />
                <input value={description} onChange={setDescription} type="textarea" placeholder="Descripe your Tier List..." /><br />
                <input value={images} onChange={uploadImages} multiple type="file" /><br />
                <p>{images ? "yes" : "no"}</p>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}