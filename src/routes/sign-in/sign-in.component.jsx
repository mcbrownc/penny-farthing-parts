import { 
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in/sign-in-form.component';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      {/* <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;