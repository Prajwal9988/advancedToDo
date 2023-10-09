'use client';
import { User } from "firebase/auth";
import {signInWithGoogle, signOutFunctionality} from "../fire-base-config/firebase";

interface SignInProps {
    userState : User | null
  }

export const SignIn = ({userState} : SignInProps)=> {
  return(
    <>
    {!userState && <button onClick={signInWithGoogle}> SignIn </button>}
    {userState && <button onClick={signOutFunctionality}> SignOut </button>}
    </>
  )
}

export default SignIn;