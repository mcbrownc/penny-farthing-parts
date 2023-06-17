// import { useState } from "react";

// import FormInput from "../form-input/form-input.component";
// import Button from "../button/button.component";

// const defaultFormFields = {
//   email: '',
//   password: '',
// }

// const SignInForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { email, password } = formFields;

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // try {
//     //   const { user } = await createAuthUserWithEmailAndPassword(email, password);
//     //   await createUserDocumentFromAuth(user, { displayName });
//     //   resetFormFields();
//     // } catch (error) {
//     //   if (error.code === 'auth/email-already-in-use') {
//     //     alert('Cannot create user, email already in use');
//     //   } else {
//     //     console.log('user creation encountered an error: ', error)
//     //   }
//     // }
//   }

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormFields({...formFields, [name]: value})
//   }

//   return (
//     <div className="sign-in-container">
//       <h2>I already have an account</h2>
//       <span>Sign in with your email or password</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput 
//           label="Email"
//           type="email" 
//           onChange={handleChange} 
//           name="email" 
//           value={email}
//           required 
//         />
//         <FormInput 
//           label="Password"
//           type="password" 
//           onChange={handleChange} 
//           name="password" 
//           value={password}
//           required
//         />
//         <Button type="submit">Sign In</Button>
//         <Button type="submit" className="">Sign In With Google</Button>
//       </form>
//     </div>
//   )

// }

// export default SignInForm;