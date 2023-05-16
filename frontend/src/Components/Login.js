import rd03 from './resources/rd-01.png';
import rd04 from './resources/rd-01 inverted.png';
import './styles/Login.css'
import axios from "axios";
import { useEffect } from 'react';

export default function Login() {

    useEffect(() => {
        const url = localStorage.getItem("url");
        const token = localStorage.getItem("token");
        if(url !== null && token !== null) {
            window.location.href = "/listeners";    
        }
    }, []);

    const handleDark = () => {

        const div1 = document.getElementById("div1");
        const div2 = document.getElementById("div2");
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

    const handleChangeDark = () => {
        const body = document.body;
        body.classList.toggle("dark-mode");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // Get the form fields:
        const username = document.getElementById("login-user").value;
        const password = document.getElementById("login-password").value;
        const team = document.getElementById("login-team").value;
        const url = document.getElementById("login-url").value;

        if (username === "" || password === "" || team === "" || url === "") { return; }
        const api_url = "http://" + url + "/v1";
        // Check if the server is up:
        axios.get(api_url + "/version").then((response) => {
            if(response.status === 200) {
                // Server is up, continue with login:
                console.log("Server is up, continuing with login");
                localStorage.setItem("url", api_url);
            }
        }).catch((error) => {
            console.log("Error: " + error);
        });

        const data = {
            username: username,
            password: password,
            team_password : team
        }

        axios.post(api_url + "/login", data).then((response) => {
            if(response.status === 200) {
                localStorage.setItem("token", response.data.access_token);
                window.location.href = "/listeners";
            }
            else {
                console.log("Login failed");
                console.log(response);
            }
        }
        ).catch((error) => {
            console.log("Error: " + error);
            return;
        }
        );
        
    }

    return (
        <div>
        <div class="toggle-container">
            <input onClick={handleDark} onChange={handleChangeDark} type="checkbox" id="toggle" class="toggle-checkbox" />
            <label for="toggle" class="toggle-label">
                <span class="toggle-inner"><i class="fa-solid fa-sun"></i></span>
                <span class="toggle-switch"><i class="fa-solid fa-moon"></i></span>
            </label>
            </div>
            <div class="mainLogin">
            <form class="login-section">
                <div class="logo-sec" id="login-logo-sec">
                <img src={rd03} alt="logo" class="logo visible" id="div1" />
                <img
                    src={rd04}
                    alt="logo"
                    class="logo hidden"
                    id="div2"
                />
                </div>
                <div class="url-sec">
                <input
                    class="input-url-disabled"
                    type="url"
                    name=""
                    id="login-url-dis"
                    placeholder="https://"
                    required="required"
                    disabled="disabled"
                />
                <input
                    class="input-url"
                    type="text"
                    name=""
                    id="login-url"
                    placeholder="Teamserver URL"
                    required="required"
                />
                </div>
                <input
                class="input"
                type="text"
                id="login-user"
                placeholder="Username"
                required="required"
                />
                <input
                class="input"
                type="password"
                name=""
                id="login-password"
                placeholder="Password"
                required="required"
                />
                <input
                class="input"
                type="password"
                name="team-password"
                id="login-team"
                placeholder="Team Password"
                required="required"
                />
                <label for="check-light">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;Not yet registered? <a href="/register">Register</a>
                </p>
                </label>
                <input onClick={handleLogin} type="submit" value="Login" class="button" id="login-submit" />
            </form>
            </div>
    </div>
    )

}