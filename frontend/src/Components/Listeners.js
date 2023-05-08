import { useState, useEffect } from "react";
import rd01 from './resources/rd-01 1.png';
import rd02 from './resources/rd-01 inverted 1.png';
import rd03 from './resources/rd-01.png';
import rd04 from './resources/rd-01 inverted.png';
import './Listeners.css'
import axios from "axios";


export default function Listeners() {

    const [enabledlisteners, setEnabledListeners] = useState([]);
    const [listeners, setListeners] = useState([]);
    const [selectedListener, setSelectedListener] = useState('');

    useEffect(() => {
        const url = "http://localhost:5000/v1/enabled";
    
        axios.get(url, {
            headers: {  
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4MzU3MDMyNywianRpIjoiMjhjY2EyNGEtYjU0NS00NTVjLWJiNzctMjIyMDg4ZDhlNTcyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InJhaWR3YXJlIiwibmJmIjoxNjgzNTcwMzI3LCJjc3JmIjoiOTM2ZDRmNDUtOGE4Yy00ZDNhLTk5N2MtNjVhZWUxYTBiZGQwIiwiZXhwIjoxNjgzNjU2NzI3fQ.qaNMI7maTS4tXeOLimjAYgDwg85waUUV5L9mGNQ4Yuw'
            }
        })
        .then((response) => {
            setEnabledListeners(response.data.listeners);
        })
        .catch((error) => {
            console.log(error);
        });

        const url2 = "http://localhost:5000/v1/listeners";

        axios.get(url2, {
            headers: {
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4MzU3MDMyNywianRpIjoiMjhjY2EyNGEtYjU0NS00NTVjLWJiNzctMjIyMDg4ZDhlNTcyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InJhaWR3YXJlIiwibmJmIjoxNjgzNTcwMzI3LCJjc3JmIjoiOTM2ZDRmNDUtOGE4Yy00ZDNhLTk5N2MtNjVhZWUxYTBiZGQwIiwiZXhwIjoxNjgzNjU2NzI3fQ.qaNMI7maTS4tXeOLimjAYgDwg85waUUV5L9mGNQ4Yuw'
            }
        })
        .then((response) => {
            setListeners(response.data.Listeners);
            console.log(response.data.Listeners);
        }
        )
        .catch((error) => {
            console.log(error);
        });

    }, []);

    const handleDark = () => {
        const div1 = document.getElementById("div1");
        const div2 = document.getElementById("div2");
        const div3 = document.getElementById("div3");
        const div4 = document.getElementById("div4");


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

          if (div3.classList.contains("show")) {
            div3.classList.remove("show");
            div3.classList.add("hide");
            div4.classList.remove("hide");
            div4.classList.add("show");
          } else {
            div3.classList.remove("hide");
            div3.classList.add("show");
            div4.classList.remove("show");
            div4.classList.add("hide");
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

        const handleCreateListeners = () => {
            const createFormPage = document.getElementById('createFormPage');
            createFormPage.classList.toggle('top-position');
        }






    return(
        <div>
            <div  class="form-page" id="createFormPage">
                <div class="logo-section-light show" id="div5">
                <img
                    src={rd03}
                    alt="logo"
                    class="logo-create-Light"
                    id="createLogoLight"
                />
                </div>
                <div class="logo-section-dark hide" id="div6">
                <img
                    src={rd04}
                    alt="logo"
                    class="logo-create-dark"
                    id="createLogoDark"
                />
                </div>
                <form class="form">
                <div class="form-scroll">
                <select name="Protocol" id="protocol" onChange={e => setSelectedListener(e.target.value)}>
                    { listeners.map((listener) => (
                    <option value={listener.protocol}>{listener.protocol}</option>
                    ))}
                </select>
                { listeners.map((listener) => (
                <input class="input-create-list" type="text" placeholder="Host" required="required" />
                <input class="input-create-list" type="text" placeholder="Port" required="required" />
                <input class="input-create-list" type="text" placeholder="Begin-Delimiter" required="required" />
                <input class="input-create-list" type="text" placeholder="End-Delimiter" required="required" />
                <input type="submit" value="Create Listener" class="sub-list" />
                ))}

                </div>
                </form>
            </div>
            <div  className="toggle-container">
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
            <div className="listeners">
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
                    <a href="/">
                    <i className="fa-solid fa-user"></i> &nbsp; &nbsp; Users</a
                    >
                    <a href="/">
                    <i className="fa-solid fa-gear"></i> &nbsp; &nbsp; Settings</a
                    >
                </div>
                <a href="/" className="logout">
                    <i className="fa-solid fa-right-from-bracket"></i> &nbsp; &nbsp; Log-out</a
                >
                </div>
                <div className="content" id="content">
                <div className="list">
                    <h2 className="heading" id="mySection">Listeners</h2>
                    <button onClick={handleCreateListeners} className="create" id="create">Create Listener</button>
                </div>
                <div className="list-menu">
                    <div className="id list-menu-child">
                    ID &nbsp;<i className="fa-solid fa-up-down"></i>
                    </div>
                    <div className="name list-menu-child">
                    Name &nbsp;<i className="fa-solid fa-up-down"></i>
                    </div>
                    <div className="protocol list-menu-child">
                    Protocol &nbsp;<i className="fa-solid fa-up-down"></i>
                    </div>
                    <div className="host list-menu-child">
                    Host &nbsp;<i className="fa-solid fa-up-down"></i>
                    </div>
                    <div className="port list-menu-child">
                    Port &nbsp;<i className="fa-solid fa-up-down"></i>
                    </div>
                    <div className="status list-menu-child">
                    Status &nbsp;<i className="fa-solid fa-up-down"></i>
                    </div>
                    <div className="operations list-menu-child">Operations</div>
                </div>
                <div className="list-items">
                    <div className="list-items-scroll">
                    { enabledlisteners.map((listener) => (
                    <div className="dummy" key={listener.LID}>
                        <div className="dummy-child">{listener.LID}</div>
                        <div className="dummy-child">{listener.name}</div>
                        <div className="dummy-child">{listener.protocol}</div>
                        <div className="dummy-child">{listener.options.host}</div>
                        <div className="dummy-child">{listener.options.port}</div>
                        { listener.status === 'Running' ? 
                        <div className="dummy-child running" >Running</div>
                        :
                        <div className="dummy-child not-running">Not Running</div>
                        }
                        <div className="dummy-child icons-dummy">
                        <div className="play-dummy dummy-icon">
                            <i className="fa-solid fa-play fa-lg"></i>
                        </div>
                        <div className="pause-dummy dummy-icon">
                            <i className="fa-solid fa-pause fa-lg"></i>
                        </div>
                        <div className="delete-dummy dummy-icon">
                            <i className="fa-solid fa-trash fa-lg"></i>
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
    );
}