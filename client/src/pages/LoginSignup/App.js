// // import React from "react";
// // import * as Components from './Components';


// // function App() {
// //     const [signIn, toggle] = React.useState(true);
// //      return(
// //         <Components.BigContainer>
// //             <Components.Container>
// //                 <Components.SignUpContainer signinIn={signIn}>
// //                     <Components.Form>
// //                         <Components.Title>Create Account</Components.Title>
// //                         <Components.Input type='text' placeholder='Name' />
// //                         <Components.Input type='email' placeholder='Email' />
// //                         <Components.Input type='password' placeholder='Password' />
// //                         <Components.Button>Sign Up</Components.Button>
// //                     </Components.Form>
// //                 </Components.SignUpContainer>

// //                 <Components.SignInContainer signinIn={signIn}>
// //                     <Components.Form>
// //                         <Components.Title>Sign in</Components.Title>
// //                         <Components.Input type='email' placeholder='Email' />
// //                         <Components.Input type='password' placeholder='Password' />
// //                         <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
// //                         <Components.Button>Sigin In</Components.Button>
// //                     </Components.Form>
// //                 </Components.SignInContainer>

// //                 <Components.OverlayContainer signinIn={signIn}>
// //                     <Components.Overlay signinIn={signIn}>

// //                     <Components.LeftOverlayPanel signinIn={signIn}>
// //                         <Components.Title>Welcome Back!</Components.Title>
// //                         <Components.Paragraph>
// //                             To keep connected with us please login with your personal info
// //                         </Components.Paragraph>
// //                         <Components.GhostButton onClick={() => toggle(true)}>
// //                             Sign In
// //                         </Components.GhostButton>
// //                         </Components.LeftOverlayPanel>

// //                         <Components.RightOverlayPanel signinIn={signIn}>
// //                         <Components.Title>Hello, Friend!</Components.Title>
// //                         <Components.Paragraph>
// //                             Enter Your personal details and start journey with us
// //                         </Components.Paragraph>
// //                             <Components.GhostButton onClick={() => toggle(false)}>
// //                                 Sigin Up
// //                             </Components.GhostButton> 
// //                         </Components.RightOverlayPanel>
    
// //                     </Components.Overlay>
// //                 </Components.OverlayContainer>

// //             </Components.Container>
// //         </Components.BigContainer>    
// //      )
// // }

// // export default App;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import * as Components from './Components';
// import axios from 'axios';

// function App() {
//     const navigate = useNavigate();
//     const [signIn, toggle] = useState(true);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSignUp = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/loginsignup', { name, email, password })
//             .then(result => {
//                 console.log(result);
//                 toggle(true);
//                 // if (result.data === "Success") {
//                 //     console.log("Signup successful!");
//                 // }
//             })
//             .catch(err => console.log(err));
//     };

//     const handleSignIn = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/loginsignup', { email, password })
//             .then(result => {
//                 console.log(result);
//                 if (result.data === "Success") {
//                     console.log("Signin successful!");
//                     navigate("/");
//                 }
                
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <Components.BigContainer>
//             <Components.Container>
//                 {signIn ? (
//                     <Components.SignInContainer signinIn={signIn}>
//                         <Components.Form onSubmit={handleSignIn}>
//                             <Components.Title>Sign in</Components.Title>
//                             <Components.Input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
//                             <Components.Input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
//                             <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
//                             <Components.Button type="submit">Sign In</Components.Button>
//                         </Components.Form>
//                     </Components.SignInContainer>
//                 ) : (
//                     <Components.SignUpContainer signinIn={signIn}>
//                         <Components.Form onSubmit={handleSignUp}>
//                             <Components.Title>Create Account</Components.Title>
//                             <Components.Input type='text' placeholder='Name' value={name} onChange={handleNameChange} />
//                             <Components.Input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
//                             <Components.Input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
//                             <Components.Button type="submit">Sign Up</Components.Button>
//                         </Components.Form>
//                     </Components.SignUpContainer>
//                 )}
//                 <Components.OverlayContainer signinIn={signIn}>
//                     <Components.Overlay signinIn={signIn}>
//                         {/* {signIn ? ( */}
//                             <Components.LeftOverlayPanel signinIn={signIn}>
//                                 <Components.Title>Welcome Back!</Components.Title>
//                                 <Components.Paragraph>
//                                     To keep connected with us please login with your personal info
//                                 </Components.Paragraph>
//                                 <Components.GhostButton onClick={() => toggle(true)}>
//                                     Sign In
//                                 </Components.GhostButton>
//                             </Components.LeftOverlayPanel>
//                         {/* ) : ( */}
//                             <Components.RightOverlayPanel signinIn={signIn}>
//                                 <Components.Title>Hello, Friend!</Components.Title>
//                                 <Components.Paragraph>
//                                     Enter Your personal details and start journey with us
//                                 </Components.Paragraph>
//                                 <Components.GhostButton onClick={() => toggle(false)}>
//                                     Sign Up
//                                 </Components.GhostButton>
//                             </Components.RightOverlayPanel>
//                         {/* )} */}
//                     </Components.Overlay>
//                 </Components.OverlayContainer>
//             </Components.Container>
//         </Components.BigContainer>
//     )
// }

// export default App;


import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import * as Components from './Components';
import axios from 'axios';

function App() {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/loginsignup', {
            operation: "signup", // Specify operation as "signup"
            name,
            email,
            password
        })
        .then(result => {
            console.log(result);
            toggle(true);
        })
        .catch(err => console.log(err));
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/loginsignup', {
            operation: "signin", // Specify operation as "signin"
            email,
            password
        })
        // .then(result => {
        //     console.log(result);
        //     if (result.data === "Success") {
        //         console.log( "Signin successful!");
        //         navigate("/");
        //     }
        // })
        
        .then((response) => {
            const data = response.data;
            console.log(data, "userRegister");
            if (data.status == "ok") {
                alert("login successful");
                // window.localStorage.setItem("token", data.data);
                localStorage.setItem("userInfo", data.token);
                // console.log("token", data);
                window.location.href = "./";
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <Components.BigContainer>
            <Components.Container>
                {signIn ? (
                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSignIn}>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
                            <Components.Input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button type="submit">Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>
                ) : (
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSignUp}>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Name' value={name} onChange={handleNameChange} />
                            <Components.Input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
                            <Components.Input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
                            <Components.Button type="submit">Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>
                )}
                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </Components.BigContainer>
    )
}

export default App;
