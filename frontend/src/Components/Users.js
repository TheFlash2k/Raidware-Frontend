import { useState, useEffect } from "react";
import rd01 from './resources/rd-01 1.png';
import rd02 from './resources/rd-01 inverted 1.png';
import rd03 from './resources/rd-01.png';
import rd04 from './resources/rd-01 inverted.png';
import './Users.css';
import axios from "axios";


export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/v1/users";

    axios.get(url, {
      headers: {
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4MzU3Nzc4MSwianRpIjoiODQ5N2VlNGMtOTZlNS00Yzc5LTg5YWMtZTcyZTVkYWMwYmU0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InJhaWR3YXJlIiwibmJmIjoxNjgzNTc3NzgxLCJjc3JmIjoiMzM2YjNmZDYtY2U5Yy00NmM4LTkxNmMtODU5OTcxNGQ5NTJiIiwiZXhwIjoxNjgzNjY0MTgxfQ.ChJNgpuCpXJVSv_-7RynL5Pe8qED955xat7YD_D3gI4'
            }
    }).then((response) => {
      setUsers(response.data.users);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
    


  const handleDark = () => {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    const div4 = document.getElementById("div4");

     
    if (div3.classList.contains("show")) {
        div3.classList.remove("show");
        div3.classList.add("hide");
        div4.classList.remove("hide");
        div4.classList.add("show");
      }
     else {
        div3.classList.remove("hide");
        div3.classList.add("show");
        div4.classList.remove("show");
        div4.classList.add("hide");
      }


    if (div1.classList.contains("visible")) {
        div1.classList.remove("visible");
        div1.classList.add("hidden");
        div2.classList.remove("hidden");
        div2.classList.add("visible");
      } else {
        div1.classList.remove("hidden");
        div1.classList.add("visible");
        div2.classList.remove("visible");
        div2.classList.add("hidden");
      }

      
    }

    const handleNav = () => {
        // const mySection = document.getElementById('mySection');
        // mySection.classList.toggle('left-position');

        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("stretched");
        if (navbar.classList.contains("stretched")) {
            const mySection = document.getElementById('mySection');
            mySection.style.left = '15px'
        }
        else {
            const mySection = document.getElementById('mySection');
            mySection.style.left = '120px'
        }
        // content.classList.toggle("stretched");
        // stretchButton.classList.toggle("left-position");
    }

    const handleChangeDark = () => {
        const body = document.body;
        body.classList.toggle("dark-mode");
    }

    return (
       <div>
           <div className="form-page" id="createFormPage">
            <div className="logo-section-light show" id="div5">
              <img
                src={rd03}
                alt="logo"
                className="logo-create-Light"
                id="createLogoLight"
              />
            </div>
            <div className="logo-section-dark hide" id="div6">
              <img
                src={rd04}
                alt="logo"
                className="logo-create-dark"
                id="createLogoDark"
              />
            </div>
            <form className="form">
              <div className="form-scroll">
              <select name="Protocol" id="protocol">
                <option value="HTTP">http</option>
                <option value="TCP">tcp</option>
                <option value="UDP">udp</option>
              </select>
              <input className="input-create-list" type="text" placeholder="Name" required="required" />
              <input className="input-create-list" type="text" placeholder="Host" required="required" />
              <input className="input-create-list" type="text" placeholder="Port" required="required" />
              <input className="input-create-list" type="text" placeholder="Begin-Delimiter" required="required" />
              <input className="input-create-list" type="text" placeholder="End-Delimiter" required="required" />
              <input type="submit" value="Create User" className="sub-list" />
              </div>
            </form>
          </div>
          <div className="toggle-container">
            <input onClick={handleDark} onChange={handleChangeDark} type="checkbox" id="toggle" className="toggle-checkbox" />
            <label for="toggle" className="toggle-label">
              <span className="toggle-inner"><i className="fa-solid fa-sun"></i></span>
              <span className="toggle-switch"><i className="fa-solid fa-moon"></i></span>
            </label>
          </div>
          <div className="logo-light show" id="div3">
            <img src={rd01} alt="LOGO" />
          </div>
          <div className="logo-dark hide" id="div4">
            <img src={rd02} alt="LOGO" />
          </div>
          <div className="users">
            <div className="container">
              <div className="navbar" id="navbar">
                <div className="navbar-logo-light visible" id="div1">
                  <img src={rd01} alt="LOGO" />
                </div>
                <div className="navbar-logo-dark hidden" id="div2">
                  <img src={rd02} alt="LOGO" />
                </div>
                <button onClick={handleNav} id="stretchButton" className="stretch-button">
                  <span className="arrow-icon"></span>
                </button>
                <div className="a-tags">
                  <a href="/">
                    <i className="fa-solid fa-headphones"></i> &nbsp; &nbsp; Listeners</a
                  >
                  <a href="/">
                    <i className="fa-solid fa-briefcase"></i> &nbsp; &nbsp; Session</a
                  >
                  <a href="/">
                    <i className="fa-solid fa-users"></i> &nbsp; &nbsp; Agents</a
                  >
                  <a href="/">
                    <i className="fa-solid fa-coins"></i> &nbsp; &nbsp; Loot</a
                  >
                  <a href="/users">
                    <i className="fa-solid fa-user"></i> &nbsp; &nbsp; Users</a
                  >
                  <a href="/">
                    <i className="fa-solid fa-gear"></i> &nbsp; &nbsp; Settings</a
                  >
                </div>
              </div>
              <div className="content" id="content">
                <div className="user">
                  <h2 className="heading" id="mySection">Users List</h2>
                  <button className="create" id="create">Create User</button>
                </div>
                <div className="user-menu">
                  <div className="id user-menu-child lmlc1">
                    ID &nbsp;<i className="fa-solid fa-up-down"></i>
                  </div>
                  <div className="name user-menu-child lmlc2">
                    Name &nbsp;<i className="fa-solid fa-up-down"></i>
                  </div>
                  <div className="email user-menu-child">
                    Email &nbsp;<i className="fa-solid fa-up-down"></i>
                  </div>
                  <div className="type user-menu-child">
                    Type &nbsp;<i className="fa-solid fa-up-down"></i>
                  </div>
                  <div className="last-logon user-menu-child lmlc3">
                    Last Logon &nbsp;<i className="fa-solid fa-up-down"></i>
                  </div>
                  <div className="operations user-menu-child">Operations</div>
                </div>
                <div className="user-items">
                  <div className="user-items-scroll">
                    { users.map((user) => (
                    <div className="dummy" key={user.id}>
                      <div className="dummy-child dlc1">{user.id}</div>
                      <div className="dummy-child dlc2">{user.username}</div>
                      <div className="dummy-child dlc2">{user.email}</div>
                      <div className="dummy-child dlc2">Administrator</div>
                      <div className="dummy-child dlc3">Online</div>
                      <div className="dummy-child icons-dummy">
                        <div className="disable-container">
                          <input
                            type="checkbox"
                            className="disable-checkbox"
                            id="disable"
                          />
                          <label for="disable" className="disable-label">
                            <span className="disable-inner"></span>
                            <span className="disable-switch"></span>
                          </label>
                        </div>
                        <div className="edit-dummy dummy-icon">
                          <i className="fa-solid fa-pen-to-square fa-lg"></i>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    )
}
