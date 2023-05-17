import React, { useEffect, useState } from 'react';
import rd01 from './resources/rd-01 1.png';
import rd02 from './resources/rd-01 inverted 1.png';
import rd03 from './resources/rd-01.png';
import dark_logo from './resources/rd-01 inverted.png';
import './styles/Dashboard.css'
import axios from "axios";
import validateToken from "./utils/utils.js";
import validateUrl from "./utils/utils.js";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
const worldGeoURL = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

export default function Dashboard() {

  const [user, setUser] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [listeners, setListeners] = useState(0);

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

    const handleChangeDark = () => {
      const body = document.body;
      body.classList.toggle("dark-mode");
  }

  const handleNav = () => {
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
  }

  const GET = (_obj, setterFunc, __endpoint = null) => {
    var url = localStorage.getItem('url') + "/";
    if(__endpoint === null) {
      url +=  _obj;
    }
    else {
      url += __endpoint;
    }
    console.log("Making request to: ", url);
    const token = localStorage.getItem('token');
    axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
        console.log(response)
        setterFunc(response.data[_obj].length);
    }
    ).catch((error) => {console.log("Error", error);});
  }

  const getUsers = () => { GET('users', setUser) }
  const getSessions = () => { GET('sessions', setSessions) }
  const getListeners = () => { GET('listeners', setListeners, 'enabled') }


  useEffect(() => {
    getUsers();
    getSessions();
    getListeners();
  }, []);

  

  return (
    <div>
      <div class="toggle-container">
        <input onClick={handleDark} onChange={handleChangeDark} type="checkbox" id="toggle" class="toggle-checkbox" />
        <label for="toggle" class="toggle-label">
        <span class="toggle-inner"><i class="fa-solid fa-sun"></i></span>
        <span class="toggle-switch"><i class="fa-solid fa-moon"></i></span>
        </label>
      </div>
    <div class="logo-light show" id="div3"><img src={rd01} alt="LOGO" /></div>
    <div class="logo-dark hide" id="div4"><img src={rd02} alt="LOGO" /></div>
    
    <div class="dashboards">
      <div class="container">
        <div class="navbar" id="navbar">
          <div class="navbar-logo-light visible" id="div1">
            <img src={rd01} alt="LOGO" />
          </div>
          <div class="navbar-logo-dark hidden" id="div2">
            <img src={rd02} alt="LOGO" />
          </div>
          <button onClick={handleNav} id="stretchButton" class="stretch-button">
            <span class="arrow-icon"></span>
          </button>
          <div class="a-tags">
              <a href="/listeners"><i class="fa-solid fa-headphones"></i> &nbsp; &nbsp;Listeners</a>
							<a href="/sessions"><i class="fa-solid fa-briefcase"></i> &nbsp; &nbsp; Session</a>
							<a href="/agents"><i class="fa-solid fa-users"></i> &nbsp; &nbsp; Agents</a>
							<a href="/loot"><i class="fa-solid fa-coins"></i> &nbsp; &nbsp; Loot</a>
							<a href="/users"><i class="fa-solid fa-user"></i> &nbsp; &nbsp; Users</a>
							<a href="/settings"><i class="fa-solid fa-gear"></i> &nbsp; &nbsp; Settings</a>
							<a href="/logout" className="logout"><i className="fa-solid fa-right-from-bracket"></i> &nbsp; &nbsp; Log-out</a>
          </div>
        </div>
        <div class="content" id="content">
          <div class="dash">
            <h2 class="heading" id="mySection">Dashboard</h2>
          </div>
          <div class="dashboard">
              <div class="analatics">
                <div class="total-enabled-listner card">
                  <div class="enabled-listner-icon icon">
                    <i class="fa-solid fa-headphones"></i>
                  </div>
                  <p>Total Enabled Listeners</p>
                  <h4>{listeners}</h4><hr></hr>
                  <p class="card-status">Just Updated</p>
                </div>

                <div class="sessions card">
                  <div class="session-icon icon">
                    <i class="fa-solid fa-briefcase"></i>
                  </div>
                  <p>Sessions</p>
                  <h4>{sessions}</h4><hr></hr>
                  <p class="card-status">Just Updated</p>
                </div>
                
                <div class="total-user card">
                  <div class="total-user-icon icon">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <p>Users</p>
                  <h4 class="user-data">{user}</h4><hr></hr>
                  {/* <!-- <p class="card-status user-status"><span>+3%</span> than last Month</p> --> */}
                  <p class="card-status">Just Updated</p>
                </div>

              </div>
            
              <div class="map">
                <div class="total-user-map">
                  {/* <img src= alt=""> */}
                </div>
                
                {/* <figure class="pie-chart">
                  <figcaption>
                      Windows<span class="window"></span>
                      <br>MacOS<span class="mac"></span>
                      <br>Linux<span class="linux"></span>
                  </figcaption>
                </figure> */}
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

  //   const locationData = [
  //       {
  //         name: 'Pakistan',
  //         coordinates: [69.3451, 30.3753],
  //       },
  //       {
  //         name: 'USA',
  //         coordinates: [-95.7129, 37.0902],
  //       },
  //       // Add more location data objects as needed
  //     ];

  // const [center, setCenter] = useState([0, 0]);
  // const [zoom, setZoom] = useState(0);

  // useEffect(() => {
  //   if (locationData.length > 0) {
  //     const coordinates = locationData.map((location) => location.coordinates);
  //     const minX = Math.min(...coordinates.map(([longitude]) => longitude));
  //     const maxX = Math.max(...coordinates.map(([longitude]) => longitude));
  //     const minY = Math.min(...coordinates.map(([, latitude]) => latitude));
  //     const maxY = Math.max(...coordinates.map(([, latitude]) => latitude));

  //     const centerX = (minX + maxX) / 2;
  //     const centerY = (minY + maxY) / 2;

  //     const deltaX = maxX - minX;
  //     const deltaY = maxY - minY;

  //     const zoomX = 360 / deltaX;
  //     const zoomY = 180 / deltaY;

  //     const zoom = Math.min(zoomX, zoomY);

  //     setCenter([centerX, centerY]);
  //     setZoom(zoom);
  //   }
  // }, [locationData]);

  // return (
  //   <div style={{ width: '50%', height: '500px', backgroundColor: 'white' }}>
  //     <ComposableMap
  //       projection="geoMercator"
  //       width={400}
  //       height={400}
  //       style={{ width: '100%', height: '100%' }}
  //     >
  //       <ZoomableGroup zoom={zoom} center={center}>
  //         <Geographies geography={worldGeoURL}>
  //           {({ geographies }) =>
  //             geographies.map((geo) => (
  //               <Geography key={geo.rsmKey} geography={geo} fill="#1a1a1c" stroke="#575757" />
  //             ))
  //           }
  //         </Geographies>
  //         {locationData.map((location) => (
  //           <Marker coordinates={location.coordinates}>
  //             <circle r={0} fill="#F00" />
  //             <path
  //               d="M12 0C5.37 0 0 5.37 0 12c0 7.31 5.35 12.37 11.74 20.29a1 1 0 0 0 1.52 0C18.65 24.37 24 19.31 24 12c0-6.63-5.37-12-12-12zm0 17.33a5.32 5.32 0 1 1 0-10.64 5.32 5.32 0 0 1 0 10.64zm.67-8.25h-.96v3.95l2.67 1.6.48-.8-2.19-1.31v-3.94z"
  //               fill="#FF0000"
  //             />
  //           </Marker>
  //         ))}
  //       </ZoomableGroup>
  //     </ComposableMap>
  //   </div>
  // );
}