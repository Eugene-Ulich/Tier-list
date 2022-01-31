import React from "react";

export default function CreateNewTierList () {
    return (
        <div>
            <h1>Customs Tier List</h1>
            <p>Create your own tier-list template</p>
            <form onSubmit={f=>f}>
                <input type="text" placeholder="Name your Tier List..." required />
                <input type="textarea" placeholder="Descripe your Tier List..." />
                <input type="file" />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}