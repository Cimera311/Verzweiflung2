const firebaseConfig = {
    apiKey: "AIzaSyD5NeIc11EnccdYK3YY-WpN2E7CDqo4h-U",
    authDomain: "hashsense-f665a.firebaseapp.com",
    projectId: "hashsense-f665a",
    storageBucket: "hashsense-f665a.firebasestorage.app",
    messagingSenderId: "959864496765",
    appId: "1:959864496765:web:cc056539b4518fc3a1c714",
    measurementId: "G-7YCRQ5H7B0"
};
signUpBtn.addEventListener('click', userSignUp);
signInBtn.addEventListener('click', userSignIn);
signOutBtn.addEventListener('click', userSignOut);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//cach the dom
        const email=document.getElementById('email');
        const password=document.getElementById('password');
        const signUpBtn=document.getElementById('signUpBtn');
        const signInBtn=document.getElementById('signInBtn');
        const signOutBtn=document.getElementById('signOutBtn');
        const login=document.getElementById('login');
        const authPart=document.getElementById('authPart');

//hiding the top secret part initially 
authPart.style.display='none';

//signup
        const signUp= async ()=>{
            const signUpEmail=email.value;
            const signUpPassword=password.value;
            createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then((userCreditional) => {
                // Signed in 
                const user = userCreditional.user;
                console.log(user);
                alert('user created successfully');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                alert(errorMessage);
            });
        }
   
        //signin
        const signIn= async ()=>{
            const signInEmail=email.value;
            const signInPassword=password.value;
            signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert('user signed in successfully');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                alert(errorMessage);
            });
        }
       //check auth state
       const checkAuthState=()=>{
           onAuthStateChanged(auth,(user)=>{
               if(user){
                   login.style.display='none';
                   authPart.style.display='flex';
                   console.log('user is signed in');
               }else{
                login.style.display='block';
                authPart.style.display='none';
                console.log('user is signed out');
               }
           })
         }
        checkAuthState();
        //signout
        const userSignOut=()=>{
            signOut(auth).then(() => {
            
                console.log('user signed out');
                alert('user signed out successfully');
              }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                alert(errorMessage);
              });
        }
