<main>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Bio</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bio.bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
        <div class="container"><a class="navbar-brand" href="#page-top">Artx</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">home</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="text-center text-white bg-primary masthead">
        <div class="container"><img class="img-fluid d-block mx-auto mb-5" src={`https://storage.googleapis.com/artx-in.appspot.com/users/${username}/displayPicture.jfif`}>
            <h1>{username}</h1>
            <hr class="star-light">
            <h2 class="font-weight-light mb-0">&nbsp;Graphic Artist - Canvas</h2>
        </div>
    </header>
    <section id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="text-uppercase text-center text-secondary">arts</h2>
            <hr class="star-dark mb-5">
            <div class="row">
                {#each posts as post, i}
                <div class="col-md-6 col-lg-4"><a class="d-block mx-auto portfolio-item" href="#portfolio-modal-{i + 1}" data-bs-toggle="modal">
                        <div class="d-flex portfolio-item-caption position-absolute h-100 w-100">
                            <div class="text-center text-white my-auto portfolio-item-caption-content w-100"><i class="fa fa-search-plus fa-3x"></i></div>
                        </div><img class="img-fluid" src={post.src}>
                    </a></div>
                {/each}
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="container">
            <h2 class="text-uppercase text-center text-secondary mb-0">Contact Me</h2>
            <hr class="star-dark mb-5">
            <div class="row" style="margin-bottom: 20px;">
                <div class="col-lg-8 mx-auto">
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div class="control-group">
                            <div class="mb-0 form-floating controls pb-2"><input class="form-control" type="text" id="name" required="" placeholder="Name" name="name"><label class="form-label">Name</label><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div class="control-group">
                            <div class="mb-0 form-floating controls pb-2"><input class="form-control" type="email" id="email" required="" placeholder="Email Address" name="email"><label class="form-label">Email Address</label><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div class="control-group">
                            <div class="mb-0 form-floating controls pb-2"><input class="form-control" type="tel" id="phone" required="" placeholder="Phone Number" name="phone"><label class="form-label">Phone Number</label><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div class="control-group">
                            <div class="mb-5 form-floating controls pb-2"><textarea class="form-control" id="message" required="" placeholder="Message" style="height: 150px;"></textarea><label class="form-label">Message</label><small class="form-text text-danger help-block"></small></div>
                        </div><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit" style="background: rgb(255,209,91);">Send</button>
                        <div id="success"></div>
                        <div></div>
                    </form>
                </div>
            </div>
        </div>
        <section class="text-white bg-primary mb-0" id="about">
            <div class="container">
                <h2 class="text-uppercase text-center text-white">About</h2>
                <hr class="star-light mb-5">
                <div class="row">
                    <div class="col-lg-10 ms-auto">
                        <p class="lead">LOVES TO PAINT IN FREE TIME...................................................................................call me</p>
                    </div>
                </div>
                <div class="text-center mt-4"><a class="btn btn-outline-light btn-xl" role="button" href="#"><span>call me!</span></a></div>
            </div>
        </section>
    </section>
    <footer class="text-center footer"></footer>
    <div class="text-center text-white copyright py-4">
        <div class="container"><small>Copyright © ArtX2021</small></div>
    </div>
    <div class="d-lg-none scroll-to-top position-fixed rounded"><a class="text-center d-block rounded text-white" href="#page-top"><i class="fa fa-chevron-up"></i></a></div>
    {#each posts as post, i}
    <div class="modal text-center" role="dialog" tabindex="-1" id="portfolio-modal-{i+1}">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div class="modal-body">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h2 class="text-uppercase text-secondary mb-0">{post.name}</h2>
                                <hr class="star-dark mb-5"><img class="img-fluid mb-5" src={post.src}>
                                <p class="mb-5">{post.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer pb-5"><a class="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss" role="button" data-bs-dismiss="modal"><i class="fa fa-close"></i>&nbsp;Close Project</a></div>
            </div>
        </div>
    </div>
    {/each}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>

    {#each test as t}
        {t}
    {/each}

</body>
</main>

<script>
    import { onMount } from 'svelte'
    import { db } from "$lib/firebase"
    import { query, collection, where, getDocs, doc } from "firebase/firestore"

    let test = ["hello"]
    let postssrc = []

    const username = "picasso"

    let posts = []

    onMount( async () => {
        var scrollToTop = document.querySelector('.scroll-to-top');

        if (scrollToTop) {
            
            // Scroll to top button appear
            window.addEventListener('scroll', function() {
                var scrollDistance = window.pageYOffset;

                if (scrollDistance > 100) {
                    scrollToTop.style.display = 'block';
                } else {
                    scrollToTop.style.display = 'none';
                }
            });
        }

        var mainNav = document.querySelector('#mainNav');

        if (mainNav) {

            var navbarCollapse = mainNav.querySelector('.navbar-collapse');
            
            if (navbarCollapse) {
                
                // var collapse = new bootstrap.Collapse(navbarCollapse, {
                //     toggle: false
                // });
            
                var navbarItems = navbarCollapse.querySelectorAll('a');
                
                // Closes responsive menu when a scroll trigger link is clicked
                for (var item of navbarItems) {
                    item.addEventListener('click', function (event) {
                    collapse.hide();
                    });
                }
            }

            // Collapse Navbar
            var collapseNavbar = function() {

            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if (scrollTop > 100) {
                mainNav.classList.add("navbar-shrink");
            } else {
                mainNav.classList.remove("navbar-shrink");
            }
            };
            // Collapse now if page is not at top
            collapseNavbar();
            // Collapse the navbar when page is scrolled
            document.addEventListener("scroll", collapseNavbar);
        }

        const q = query(collection(db,'users', username, "images"))
        const res = await getDocs(q);

        let array = []
    
        res.forEach(doc => {
            let data = doc.data()
            array.push({
                name: data.name,
                description: data.description,
                price: data.price,
                src: `https://storage.googleapis.com/artx-in.appspot.com/users/picasso/images/${data.url}`
            })
            postssrc.push(`https://storage.googleapis.com/artx-in.appspot.com/users/picasso/images/${data.url}`)
        })
        posts = array
    })
    

    console.log(posts);
</script>