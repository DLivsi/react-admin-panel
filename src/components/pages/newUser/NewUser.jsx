import React from "react";
import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">UserName</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="John Miller" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="phone" placeholder="88005553535" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="password" placeholder="Orenburg | Russia" />
        </div>
        <div className="newUserItem">
          <div className="newUserGender">
            <label htmlFor="">Gender</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select name="" id="" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
