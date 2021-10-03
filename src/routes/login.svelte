<script>
    import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, googleAuth, signInWithPopup } from "../firebase"
    
    let email = "t@t.com", password = "rishit";

    async function signIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                window.location.href = "/"
                // ...
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    async function signUp(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential.user);
            window.location.href = "/"
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // ..
        });
    }

    async function signUpWithGoogle(e) {
        e.preventDefault()
        console.log("HE");
        signInWithPopup(auth, googleAuth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                console.log(result.user)
                console.log(userCredential.user);
                window.location.href = "/"
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error.code);
                console.log(error.message);
                // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
</script>

<main>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Sign up</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/login.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row mh-100vh">
            <div class="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0" id="login-block-1" style="background: linear-gradient(-144deg, rgb(0,0,0) 0%, rgb(99,97,97) 34%, rgb(86,78,78) 73%, rgb(0,0,0));">
                <div class="m-auto w-lg-75 w-xl-50">
                    <h2 class="text-info fw-light mb-5">ARTX</h2>
                    <form on:submit={signIn}>
                        <div class="form-group mb-3"><label class="form-label text-secondary">Email</label><input class="form-control" type="text" required="" inputmode="email" bind:value={email}></div>
                        <div class="form-group mb-3"><label class="form-label text-secondary">Password</label><input class="form-control" type="password" required="" bind:value={password}></div><button class="btn btn-info mt-2" type="submit" style="width: 90px;">Log In</button><button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#signin" style="width: 90px;margin-top: 10px;margin-left: 20px;">Sign Up</button>
                    </form>
                    <p class="mt-3 mb-0"><a class="text-info small" href="#">Forgot your email or password</a></p>
                </div>
            </div>
            <div class="col-lg-6 d-flex align-items-end" id="bg-block-1" style="background: url(&quot;assets/img/theme.jpg&quot;) center / cover;">
                <p class="ms-auto small text-dark mb-2"><em>Photo by&nbsp;</em><a class="text-dark" href="https://unsplash.com/photos/v0zVmWULYTg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank"><em>Aldain Austria</em></a><br></p>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="modal fade" role="dialog" tabindex="-1" id="signin">
            <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Sign Up Now</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center"><button class="btn btn-primary text-start" style="width: 100%;" type="button"><i class="fa fa-facebook"></i>&nbsp; Continue with Facebook</button></div>
                        <div class="text-center mt-2"><button class="btn btn-light text-start border-dark" style="width: 100%;" type="button" on:click={signUpWithGoogle}><i class="fa fa-google"></i>&nbsp; Continue with Google</button></div>
                        <form class="mt-4">
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-user-o"></i></span><input class="form-control" type="text" required="" placeholder="Full Name"></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span><input class="form-control" type="email" required="" placeholder="Email"></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span><input class="form-control" type="password" required="" placeholder="Password"></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" required="" checked=""><label class="form-check-label" for="formCheck-1">I agree all the terms and conditions.</label></div>
                            </div>
                            <div class="form-group mb-3"><button class="btn btn-primary btn-lg" style="width: 100%;" type="button">Sign Up</button></div>
                        </form>
                        <hr style="background-color: #bababa;">
                        <p class="text-center">Already have an Account?&nbsp;<a class="text-decoration-none" href="index.html" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup">Log In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</main>