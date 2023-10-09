"use client";
import styles from "./TaskBar.module.css";
import { arrOfTime } from "./constants";
export function TaskBarComponent(){

   return(
    <>
     <div className={styles.main_div}> 
      {arrOfTime.map((item,i)=> (
         <div key={i} className={styles.timeBox}>
          <p >{item}</p>
         </div>
      ))}
    </div>
    </>
   )
}

export default TaskBarComponent;