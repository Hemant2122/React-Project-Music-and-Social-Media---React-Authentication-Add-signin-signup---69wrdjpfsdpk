"use client";
import { useRouter } from 'next/navigation';
import styles from "./signup.module.css";

function signup() {
  const router = useRouter();

  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.formName}>Sign Up</h1>
      <form className={styles.signupForm}>
      <div className={styles.containerDiv} >
          <label htmlFor="exampleInputName" className={styles.labelSize}>Name</label>
          <br/>
          <input type="text" id="exampleInputName" className={styles.inputSize} />
        </div>
        <div className={styles.containerDiv} >
          <label htmlFor="exampleInputEmail1" className={styles.labelSize}>Email</label>
          <br/>
          <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" className={styles.inputSize} />
        </div>
        <div className={styles.containerDiv}>
          <label htmlFor="exampleInputPassword1" className={styles.labelSize}>Password</label>
          <br/>
          <input type="password" id="exampleInputPassword1" className={styles.inputSize} />
        </div>
        <button type="submit" className={styles.buttonSubmit} >Sign Up</button>
      </form>

      <div className={styles.alreadyExit}>
        <p>Already have an account?</p>
        <input type='submit' value={"Signin here!"} onClick={() => {
          router.push("/login");
        }} />
      </div>
      
    </div>
  )
}

export default signup;
