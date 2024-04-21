// import React, { Component, useEffect, useState } from "react";

// export default class UserDetails {
//     constructor(props){
//         super(props);
//         this.state = {
//             userData: "",
//         };
//     }
//     componentDidMount(){
//         fetch("http://localhost:3001/userData", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//                 token: window.localStorage.getItem("token"),
//             }),
//         })
        
//         .then((response) => {
//             const data = response.data;
//             console.log(data, "userData");
//             this.setState({ userData: data.data })
//         });  
//     }
//     render(){
//         return(
//             <div>
//                 Name<h1>{this.state.userData.email}</h1>
//                 Email<h1>adarsh@1123</h1>
//             </div>
//         )
//     }
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UserDetails() {
//     useEffect(() => {
//         fetchUserData();
//     }, []);

//     const fetchUserData = () => {
//         axios.post("http://localhost:3001/userData", {
//             token: window.localStorage.getItem("token"),
//         })
//         .then((response) => {
//             const data = response.data;
//             console.log(data, "userData");
//             // Update state or perform other actions with data if needed
//         })
//         .catch((error) => {
//             console.error("Error fetching user data:", error);
//         });
//     };

//     return (
//         <div>
//             <h1>User Details</h1>
//             {/* Render user data here */}
//         </div>
//     );
// }

// export default UserDetails;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UserDetails() {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchUserData();
//     }, []);

//     const fetchUserData = () => {
        
//         axios.post("http://localhost:3001/userData", {
//             token: window.localStorage.getItem("token"),
//         })
//         .then((response) => {
//             const data = response.data;
//             console.log(data, "userData");
            
//         })
//         .catch((error) => {
//             console.error("Error fetching user data:", error);
//             setError("Error fetching user data. Please try again later.");
//         });
//     };

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>User Details</h1>
//             {userData && (
//                 <div>
//                     {/* Display user data here */}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UserDetails;



// import React, { useState, useEffect } from "react";

// function UserDetails() {
//     const [userData, setUserData] = useState("");

//     useEffect(() => {
//         fetch("http://localhost:3001/userData", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//                 token: window.localStorage.getItem("token"),
//             }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data, "userData");
//             setUserData(data.data);
//         })
//         .catch(error => {
//             console.error('Error fetching user data:', error);
//         });
//     }, []); // empty dependency array to run effect only once on mount

//     return (
//         <div>
//             <h1>Name: {userData.email}</h1>
//             <h1>Email: adarsh@1123</h1>
//         </div>
//     );
// }

// export default UserDetails;

// import React, { useState, useEffect } from "react";

// function UserDetails() {
//     const [userData, setUserData] = useState({});

//     useEffect(() => {
//         fetch("http://localhost:3001/userData", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//                 token: window.localStorage.getItem("token"),
//             }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.status == "ok") {
//                 console.log(data, "userData");
//                 setUserData(data.data || {});
//             }    
//             else{
//                 console.error('error getting ok');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching user data:', error);
//         });
//     }, []); // empty dependency array to run effect only once on mount

//     return (
//         <div>
//             {userData.email && <h1>Email: {userData.email}</h1>}
//         </div>
//     );
// }

// export default UserDetails;


import React, { Component } from "react";

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        };
    }

    componentDidMount() {
        // Assuming you're fetching user data from an API endpoint
        fetch("http://localhost:3001/userData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                token: localStorage.getItem("userinfo"),
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ userData: data.data });
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }

    render() {
        const { userData } = this.state;
        return (
            <div>
                {/* {<h1>Email: {userData.email}</h1>} */}
            </div>
        );
    }
}
