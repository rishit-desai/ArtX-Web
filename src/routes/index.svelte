<script>
    import { onMount } from "svelte"
    // import {  } from "../firebase"

    let posts = []

    onMount(() => {
        var currentDay = document.querySelectorAll('.list-hours li')[new Date().getDay()];

        if (currentDay) {
            currentDay.classList.add('today');
        }

        if (document.querySelectorAll('[data-bss-baguettebox]').length > 0) {
            baguetteBox.run('[data-bss-baguettebox]', { animation: 'slideIn' });
        }


    })
</script>

<main>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Home</title>
    <link rel="stylesheet" href="assets/bootstrap/css/main.bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css">
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<body style="background: linear-gradient(rgba(47, 23, 15, 0.65), rgba(47, 23, 15, 0.65)), url(&quot;assets/img/bg1.jpg&quot;); cover">
    <h1 class="text-center text-white d-none d-lg-block site-heading"><span class="text-primary site-heading-upper mb-3">platform to depict your creativity</span><span class="site-heading-lower">Artx</span></h1>
    <nav class="navbar navbar-dark navbar-expand-lg sticky-top bg-dark py-lg-4" id="mainNav" style="color: var(--bs-white);">
        <div class="container"><a class="navbar-brand text-uppercase d-lg-none text-expanded" href="#">ARTX</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about">About us</a></li>
                    <li class="nav-item"><a class="nav-link" href="bio">Bio</a></li>
                    <li class="nav-item" style="margin-right: 20;"><i class="fa fa-search" style="color: var(--bs-gray-300);margin-right: 15px;padding-right: 0;"></i><input type="search" id="search-field" class="search-field" name="search" style="color: var(--bs-white);background: var(--bs-gray-dark);margin-left: 20;border-style: none;border-color: var(--bs-gray-600);border-top-style: none;border-bottom-style: solid;"></li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="page-section clearfix">
        <div class="container">
            <div class="intro"><img class="img-fluid intro-img mb-3 mb-lg-0 rounded" src="assets/img/rr%20(2).jpg" style="width: 572px;margin-right: 96px;">
                <div class="text-center intro-text p-5 rounded bg-faded" style="width: 560;">
                    <h2 class="section-heading mb-4"><span class="section-heading-upper">quote</span><span class="section-heading-lower">for the day</span></h2>
                    <p class="mb-3"><br>“Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.”<br><br>―&nbsp;<strong>Leonardo da Vinci</strong><br><br></p>
                    <div class="mx-auto intro-button"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="page-section cta" style="background: rgb(255,185,6);">
        <div class="container">
            <section class="team-grid">
                <div class="container">
                    <div class="intro"></div>
                </div>
                <div class="container" style="background: #b37600;">
                    <section class="photo-gallery">
                        <div class="container">
                            <div class="intro"></div>
                        </div>
                    </section>
                    <section class="photo-gallery">
                        <div class="container">
                            <div class="intro"></div>
                        </div>
                    </section>
                    <section class="photo-gallery">
                        <div class="container" style="background: #403e3b;">
                            <div class="intro">
                                <h2 class="text-center" style="color: #ffffff;font-family: Raleway, sans-serif;">ARTS</h2>
                            </div>
                            <div class="row photos" data-bss-baguettebox="" style="background: linear-gradient(144deg, black 43%, white 100%), var(--bs-gray-400);">
                                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F1.jpg?alt=media&token=a3291ccb-0316-4e80-8058-39a6dbd8681f"><img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F1.jpg?alt=media&token=a3291ccb-0316-4e80-8058-39a6dbd8681f"></a></div>
                                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F2.jpg?alt=media&token=632d9d7f-09d5-419c-8900-08a001f1af93"><img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F2.jpg?alt=media&token=632d9d7f-09d5-419c-8900-08a001f1af93"></a></div>
                                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F3.jpg?alt=media&token=31c749f5-cf2f-4313-87a6-961da942d53d"><img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F3.jpg?alt=media&token=31c749f5-cf2f-4313-87a6-961da942d53d"></a></div>
                                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F4.jpg?alt=media&token=b62aa84e-7f78-43c7-ad73-e89d4812bb08"><img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F4.jpg?alt=media&token=b62aa84e-7f78-43c7-ad73-e89d4812bb08"></a></div>
                                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F5.jpg?alt=media&token=c7de3964-ba89-4e86-998e-1a6ff8d0c2fd"><img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F5.jpg?alt=media&token=c7de3964-ba89-4e86-998e-1a6ff8d0c2fd"></a></div>
                                <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F6.jpg?alt=media&token=21352299-5ae0-43da-9f8c-959f7820beb9"><img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/images%2F6.jpg?alt=media&token=21352299-5ae0-43da-9f8c-959f7820beb9"></a></div>
                            </div>
                        </div>
                    </section>
                    <div class="intro"></div>
                </div>
                <div class="container">
                    <div class="intro"></div>
                </div>
            </section>
        </div>
    </section>
    <footer class="text-center footer text-faded py-5" style="background: rgba(0,0,0,0.15);">
        <div class="social-icons" style="color: var(--bs-purple);background: rgba(0,0,0,0);"><a href="https://www.facebook.com/profile.php?id=100071450851447" target="_blank"><i class="fab fa-facebook-f" style="background: rgba(255,255,255,0);color: #ed1b0d;"></i></a><a href="#"></a><a href="https://www.instagram.com/artx_619/?hl=en" target="_blank"><i class="fab fa-instagram" style="background: rgba(255,255,255,0);color: #fc1406;"></i></a></div>
        <div class="container">
            <p class="m-0 small" style="background: rgba(255,255,255,0.16);color: rgb(255,255,255);">Copyright&nbsp;©&nbsp;Artx2021</p>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
</body>
</main>