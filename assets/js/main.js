/*/////////////////
Navbar
/////////////////*/
class Mynavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <nav class="container align-items-center pt-2">
                <nav class="navbar navbar-expand-lg navbar-dark py-2">
                    <div class="container-fluid">
                        <a class="navbar-brand pe-3" href="index.html">
                            <img src="img/chameleon.png"
                                alt="" height="60px" class="pe-2">
                            Chameleon
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="index.html#vpn" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                        VPN
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-downloading-updates-50.png" alt="" width="20px"> Download VPN</a></li>
                                        <li><a class="dropdown-item" href="speedTest.html"><img src="img/icons8-ookla-speedtest.svg" alt="" width="20px"> Speed Test</a></li>
                                        <li><a class="dropdown-item" href="ip_checker.html"><img src="img/icons8-whois-50.png" alt="" width="20px"> IP Info</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#design" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                        Design
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-website-50.png" alt="" width="20px"> Website</a></li>
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-flutter.svg" alt="" width="20px"> Application</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#hosting" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                        Cloud Hosting
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-cloudflare.svg" alt="" width="20px"> Website</a></li>
                                        <li><a class="dropdown-item" href="domain.html"><img src="img/icons8-dns-50.png" alt="" width="20px"> Domain</a></li>
                                        <li><a class="dropdown-item" href="VpsHosting.html"><img src="img/icons8-cloud-computing-50.png" alt="" width="20px"> VPS</a></li>
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-cloud-storage-50.png" alt="" width="20px"> File Storage</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                        Academy
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-bitcoin-accepted-50.png" alt="" width="20px"> Payment Option</a></li>
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-info.svg" alt="" width="20px"> Guides</a></li>
                                        <li><a class="dropdown-item disabled" href="#"><img src="img/icons8-mortarboard-50.png" alt="" width="20px"> Knowledge base</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="index.html#about">
                                        About
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="index.html#contact">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>

                            <ul class="navbar-nav mb-2 mb-lg-0 pe-3">
                                <li class="nav-item dropdown pe-3">
                                    <a class="nav-link" aria-current="page" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                                        </svg>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="index.html">English</a></li>
                                        <li><a class="dropdown-item" href="index.html#fa">Persian</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item pe-3">
                                    <a class="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class="nav-item pe-3">
                                    <a class="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                    </a>    
                                </li>
                            </ul>
                        </div>
                        <form class="d-flex d-none d-xl-block">
                            <a href="Signin.html"><button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Sign in</button></a>
                        </form>
                    </div>
                </nav>
            </nav>
        </nav>
        `
    }
}

customElements.define('my-navbar', Mynavbar)

/*/////////////////
Footer
/////////////////*/
class Myfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="pt-4 my-md-5 pt-md-5 border-top" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md">
                        <img class="mb-2" src="img/chameleon.png" alt="" width="60px">
                        <small class="d-block mb-3 text-muted">
                            <p>
                                <a class="text-decoration-none" href="">Privacy Policy</a> <br>
                                <a class="text-decoration-none" href="">Terms and Conditions</a><br><br>
                                <strong>Telegram Chanel:</strong> @chameleons.team<br>
                                <strong>Email:</strong> info@example.com<br>
                            </p>
                        </small>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="speedTest.html">Speed Test</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="ip_checker.html">IP Info</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="domain.html">Domain</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="VpsHosting.html">VPS</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="index.html#">Home</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#about">About</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="index.html#contact">Contact Us</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="SignUp.html">Register</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Chameleon Payments</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><img src="img/icons8-tether.svg" alt="Tether" width="25px"><a class="link-secondary text-decoration-none ps-1" href="#">Tether</a></li>
                            <li class="mb-1"><img src="img/BNB.svg" alt="BNB" width="25px"><a class="link-secondary text-decoration-none ps-1" href="#">BNB</a></li>
                            <li class="mb-1"><img src="img/Tron.svg" alt="Tron" width="25px"><a class="link-secondary text-decoration-none ps-1" href="#">Tron</a></li>
                            <li class="mb-1"><img src="img/icons8-bitcoin.svg" alt="Bitcoin" width="25px"><a class="link-secondary text-decoration-none ps-1" href="#">Bitcoin Cash</a></li>
                            <li class="mb-1"><img src="img/icons8-litecoin.svg" alt="Litecoin" width="25px"><a class="link-secondary text-decoration-none ps-1" href="#">Litecoin</a></li>
                            <li class="mb-1"><img src="img/icons8-monero.svg" alt="Monero" width="25px"><a class="link-secondary text-decoration-none ps-1" href="#">Monero</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 pb-3 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                    <span class="text-muted">© 2022 Chameleons.team - All rights reserved</span>
                </div>
            
                <ul class="nav col-md-4 pb-3 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg>
                    </a></li>
                    <li class="ms-3"><a class="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                    </a></li>
                    <li class="ms-3"><a class="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a></li>
                    <li class="ms-3"><a class="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </a></li>
                    <li class="ms-3"><a class="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                    </a></li>
                </ul>
                </footer>
            </div>
        </footer>
        `
    }
}

customElements.define('my-footer', Myfooter)
