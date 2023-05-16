import { useState, useEffect } from "react";
import rd01 from './resources/rd-01 1.png';
import rd02 from './resources/rd-01 inverted 1.png';
import rd03 from './resources/rd-01.png';
import rd04 from './resources/rd-01 inverted.png';
import './styles/Listeners.css'
import axios from "axios";


export default function Listeners() {

    const [enabledlisteners, setEnabledListeners] = useState([]);
    const [listeners, setListeners] = useState([]);
    const [selectedProtocol, setSelectedProtocol] = useState('');

    // Check if the user is logged in i.e. the token in localStorage is valid:

    useEffect(() => {

        if(localStorage.getItem('token') === null || localStorage.getItem('url') === null) {
            window.location.replace("/login");
        }

        const url = localStorage.getItem('url') + "/enabled";
    
        axios.get(url, {
            headers: {  
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((response) => {
            setEnabledListeners(response.data.listeners);
        })
        .catch((error) => {
            // console.log(error);
            if(error.response.status === 401) {
                window.location.replace("/login");
            }
        });

        const url2 = localStorage.getItem('url') + "/listeners";

        axios.get(url2, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
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

        const handleCreateListeners = () => {
            const createFormPage = document.getElementById('createFormPage');
            createFormPage.classList.toggle('top-position');
        }

        const ListenerSetup = (e) => {
            listeners.map((listener) => {
                if (listener.protocol === e.target.value) {
                    document.getElementById('input-host').value = listener.config.host;
                    document.getElementById('input-port').value = listener.config.port;
                    document.getElementById('input-begin-delimiter').value = listener.config['begin_delimiter'];
                    document.getElementById('input-end-delimiter').value = listener.config.end_delimiter;
                    document.getElementById('input-encryption-key').value = listener.config['encryption-key'];
                    setSelectedProtocol(e.target.value);
                }
            })
        }

        const handleCreateListenerSubmit = () => {
            const name = document.getElementById('input-name').value;
            const host = document.getElementById('input-host').value;
            const port = parseInt(document.getElementById('input-port').value, 10);
            const begin_delimiter = document.getElementById('input-begin-delimiter').value;
            const end_delimiter = document.getElementById('input-end-delimiter').value;
            const encryption_key = document.getElementById('input-encryption-key').value;

            const data = {
                'listener': {
                    'name': name,
                    'protocol': selectedProtocol,
                    'type': 'non-staged',
                    'config': {
                        'host': host,
                        'port': port,
                        'begin_delimiter': begin_delimiter,
                        'end_delimiter': end_delimiter,
                        'encryption-key' : encryption_key
                    }
                }
            }



            axios.post(localStorage.getItem("url") + '/prepare', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            })
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
        }

        const handleEnable = (e, id) => {
            console.log(id);
            const data = {  
                'LID': id
            }
            axios.post(localStorage.getItem("url") + '/enable', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            })
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
        }

        const handleDisable = (e, id) => {
            const data = {
                'LID': id
            }

            axios.post(localStorage.getItem('url') + '/disable', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            })
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
        }

        const handleDelete = (e, id) => {
            const data = {
                'LID': id
            }

            axios.post(localStorage.getItem('url') + '/delete', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            })
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
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
                <select name="Protocol" id="protocol" onChange={e => ListenerSetup(e)}>
                    <option >Select a Protocol</option>
                    { listeners.map((listener) => (
                    <option value={listener.protocol}>{listener.protocol}</option>
                    ))}
                </select>
                <input class="input-create-list" id="input-name" type="text" placeholder="Name" required />        
                <input class="input-create-list" id="input-host" type="text" placeholder="Host" required />
                <input class="input-create-list" id="input-port" type="text" placeholder="Port" required />
                <input class="input-create-list" id="input-begin-delimiter" type="text" placeholder="Begin-Delimiter" required />
                <input class="input-create-list" id="input-end-delimiter" type="text" placeholder="End-Delimiter" required />
                <input class="input-create-list" id="input-encryption-key" type="text" placeholder="Encryption Key" required />
                <input onClick={handleCreateListenerSubmit} value="Create Listener" class="sub-list" />

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
                    <a href="/listeners">
                    <i className="fa-solid fa-headphones"></i> &nbsp; &nbsp; Listeners</a
                    >
                    <a href="/sessions">
                    <i className="fa-solid fa-briefcase"></i> &nbsp; &nbsp; Session</a
                    >
                    <a href="/agents">
                    <i className="fa-solid fa-users"></i> &nbsp; &nbsp; Agents</a
                    >
                    <a href="/loot">
                    <i className="fa-solid fa-coins"></i> &nbsp; &nbsp; Loot</a
                    >
                    <a href="/users">
                    <i className="fa-solid fa-user"></i> &nbsp; &nbsp; Users</a
                    >
                    <a href="/settings">
                    <i className="fa-solid fa-gear"></i> &nbsp; &nbsp; Settings</a
                    >
                </div>
                <a href="/logout" className="logout">
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
                            <i onClick={e => handleEnable(e, listener.LID)} className="fa-solid fa-play fa-lg"></i>
                        </div>
                        <div className="pause-dummy dummy-icon">
                            <i onClick={e => handleDisable(e, listener.LID)} className="fa-solid fa-pause fa-lg"></i>
                        </div>
                        <div className="delete-dummy dummy-icon">
                            <i onClick={e => handleDelete(e, listener.LID)} className="fa-solid fa-trash fa-lg"></i>
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