<script>
    import { onMount } from "svelte";
    import { storage,db, } from '../firebase';
    import { ref, uploadBytes } from 'firebase/storage'
    import { addDoc,collection } from 'firebase/firestore';
    let image1,description,title,price;
    
    async function handleSubmit()
    {
        const lname = localStorage.getItem('user');
        if(isNaN(price))
        {
            return window.alert("Please enter numeric price!")
        }
        if(image1)
        {
            const file = image1[0];
            const imageref = ref(storage,`users/${lname}/images/${image1[0].name}`)
            await uploadBytes(imageref,file)
            await addDoc(collection(db,'users',`${lname}`,'images'),{
                name: title,
                url: `${image1[0].name}`,
                price: parseFloat(price),
                description: description
            })
        }
    }

    onMount(async () => {
        

        var menuToggle = document.querySelector('.menu-toggle');
        var sidebar = document.querySelector('#sidebar-wrapper');
        
        if (menuToggle) {
            // Closes the sidebar menu
            menuToggle.addEventListener('click', function(e) {
            e.preventDefault();

            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            var icon = menuToggle.querySelector('.fa-bars, .fa-times');
            
            if (icon) {
                if (icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                } else if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                }
            }

            });
        }

        var navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarCollapse) {
            var navbarItems = navbarCollapse.querySelectorAll('a');

            // Closes responsive menu when a scroll trigger link is clicked
            for (var item of navbarItems) {
            item.addEventListener('click', function (event) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
                
                var icon = menuToggle.querySelector('.fa-bars, .fa-times');
            
                if (icon) {
                if (icon.classList.contains('fa-times')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
                }
            });
            }
        }

        // Scroll to top button appear
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
    })
</script>

<main>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>New</title>
        <link rel="stylesheet" href="assets/bootstrap/css/new.bootstrap.min.css">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/css/new.css">
    </head>
    
    <body id="page-top"><a class="menu-toggle rounded" href="/"><i class="fa fa-bars"></i></a>
        <nav class="navbar navbar-light navbar-expand" id="sidebar-wrapper">
            <div class="container"><button data-bs-toggle="collapse" class="navbar-toggler d-none"
                    data-bs-target="#"></button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav sidebar-nav" id="sidebar-nav">
                        <li class="nav-item sidebar-brand"><a class="nav-link active js-scroll-trigger" href="#page-top">New Post</a></li>
                        <li class="nav-item sidebar-nav-item"><a class="nav-link js-scroll-trigger" href="/">Home</a></li>
                        <li class="nav-item sidebar-nav-item"><a class="nav-link js-scroll-trigger" href="/about">About</a></li>
                        <li class="nav-item sidebar-nav-item"><a class="nav-link js-scroll-trigger" href="/explore">Explore</a></li>
                        <li class="nav-item sidebar-nav-item"><a class="nav-link js-scroll-trigger" href="/bio">Bio</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <section class="callout"
            style="background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url(&quot;assets/img/bg-callout.jpg&quot;);background-position: center center;background-repeat: no-repeat;background-size: cover;transform: scale(1);height: 100px;margin-bottom: -100px;margin-top: -50px;">
            <div class="container text-center">
                <h2 class="mx-auto mb-5"><span>Just Sell it&nbsp;</span><em></em><span><br><br></span></h2>
            </div>
        </section>
        <section class="content-section bg-primary text-white">
            <section class="contact-clean" style="margin-bottom: -50px;">
                <form class="text-start" method="post" style="transform: scale(1.20);" on:submit|preventDefault={handleSubmit}>
                    <h2 class="text-center">POST IT</h2>
                    <div class="mb-3"><input bind:value={title} class="form-control" type="text" name="title" placeholder="Title" required="">
                    </div>
                    <div class="mb-3"></div><input bind:value={price} class="form-control" type="text" name="price" placeholder="Price"
                        required="">
                    <div class="mb-3"></div>
                    <i class="fa fa-camera"></i>
                    <input accept="image/png, image/gif, image/jpeg" class="form-control" type="file" bind:files={image1} style="color: var(--bs-blue);background: rgba(0,0,0,0.1);" required="" name="pic1">

                    <div class="mb-3">
                        <textarea class="form-control" name="descrip" bind:value={description} placeholder="Despcription" rows="15" required=""></textarea>
                        <button class="btn btn-primary" type="submit">Post</button>
                    </div>
                </form>
            </section>
        </section>
        <footer class="footer text-center">
            <div class="container">
                <p class="text-muted mb-0 small">Copyright &nbsp;© Artx2021</p>
            </div><a class="js-scroll-trigger scroll-to-top rounded" href="#page-top"><i class="fa fa-angle-up"></i></a>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</main>
