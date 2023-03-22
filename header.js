class Header extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <style>
@media only screen and (min-width:1200px){
	.nav-item > .nav-link{padding: 5px 10px !important;
		display: block !important;}
       
}

@media only screen and (max-width:992px){
	.header-inner{background-color: #000!important;
	}
	.nav-item > .nav-link{
		color: #fff!important;
		text-align: center;
	}
		.logo{color: #000 !important;
			font-weight: 600!important;}
			.content-banner .first-title{font-size: 30px !important;
			}
}
.header{
  background-color: #000;
  position: sticky;
}
/*---------------------------------------Navbar Part CSS Start---------------------------*/
.nav-item .nav-link{
    display: block;
    line-height: 36px;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    transition: 0.15s;
}

.nav-item .nav-link:hover{
    color: #FE4066;
}
/* toggler icon CSS start*/
.navbar-toggler {
    width: 20px;
    height: 20px;
    position: relative;
    transition: 0.5s ease-in-out;
}
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icons:focus{
    outline: none;
    box-shadow: none;
    border: 0;
}
.navbar-toggler span {
    margin: 0;
    padding: 0;
}
.toggler-icon {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
}
.middle-bar{
    margin-top: 0px;
}
/*when navigation is clicked*/
.navbar-toggler .top-bar{
    margin-top: 0px;
    transform: rotate(135deg);
}
.navbar-toggler .middle-bar{
    opacity: 0;
    filter: alpha(opacity=0);
}
.navbar-toggler .bottom-bar{
    margin-top: 0px;
    transform: rotate(-135deg);
}
/*state when navbar collapsed*/
.navbar-toggler.collapsed .top-bar{
    margin-top: -20px;
    transform: rotate(0deg);
}
.navbar-toggler.collapsed .middle-bar{
    opacity: 1;
    filter: alpha(opacity=100);
}
.navbar-toggler.collapsed .bottom-bar{
    margin-top: 20px;
    transform: rotate(0deg);
}
      </style>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" 
  integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      <script type="text/javascript">
      $(function(){
        var navbar = $('.header-inner');
        $(window).scroll(function(){
          if($(window).scrollTop() <=40){
            navbar.removeClass('navbar-scroll');
          }else{
            navbar.addClass('navbar-scroll');
          }
        });
      });
    </script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.js" ></script>
      <header class="header">
      <div class="header-inner">
      <div class="container-fluid px-lg-5">
      <nav class="navbar navbar-expand-lg my-navbar">
      <a class="navbar-brand" href="#">
      <img src="./images1/logo ees.ico" class="img-fluid" style="width:30px; margin:-3px 0px 0px 0px;">
      </a>
      <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toggler-icon top-bar"></span>
      <span class="toggler-icon middle-bar"></span>
      <span class="toggler-icon bottom-bar"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto">
      <li class="nav-item active">
      <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="https://eesietlko.blogspot.com/">EES Blog</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="EED.html">EED</a>
      </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Academics
          </a>
           <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Syllabus</a>
              <a class="dropdown-item" href="#">E-Books</a>        
        </li>
      
      <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Activities
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Vis-a-vis</a>
                <a class="dropdown-item" href="#">Another action</a>   
           </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Our Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="new_contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);