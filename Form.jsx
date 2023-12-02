import React from "react";
function Form({ onValChange, formObject, onFormSubmit }) {
    return (
        <div className="hiren">

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={formObject.name}
                    onChange={onValChange}
                    name="name"
                />
            </div>

            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={formObject.email}
                    onChange={onValChange}
                    name="email"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Profile"
                    value={formObject.profile}
                    onChange={onValChange}
                    name="profile"
                />
            </div>

            <div className="mb-3">
                <input
                    type="Password"
                    className="form-control"
                    placeholder="Password"
                    value={formObject.Password}
                    onChange={onValChange}
                    name="Password"
                />
            </div>

            <div className="d-grid">
                <input
                    type="submit"
                    onClick={onFormSubmit}
                    className="btn btn-success"
                />
            </div>

        </div>
    );
}

export default Form;