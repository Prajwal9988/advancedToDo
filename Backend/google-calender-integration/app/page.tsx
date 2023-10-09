'use client';
import SignIn from "./component/signIn";
import {app} from "./fire-base-config/firebase";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import {onAuthStateChangedHelper} from "./fire-base-config/firebase";
import TaskBarComponent from "./component/TaskBarComponent";
export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
   const unsubscribe = onAuthStateChangedHelper((user)=>{
     setUser(user);
     return () => unsubscribe();
   })
  });

  return (
    <main>
      <div>
        <h1>Productivity App</h1>
        <SignIn userState={user}/>
        {user && <TaskBarComponent />}
      </div>
    </main>
  )
}
