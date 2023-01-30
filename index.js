//ketika halaman diresize terdapat kondisi untuk resolusi mobile atau desktop akan menjalankan sebuah fungsi
window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        document.querySelector(".mobile").style.display = "block";
        document.querySelector(".desktop").style.display = "none";
        stickyMobile()
        modalMobile();
    } else {
        document.querySelector(".mobile").style.display = "none";
        document.querySelector(".desktop").style.display = "block";
        desktopSticky();
    }
});

//ketika halaman pertama kali diload jalankan fungsi berdasarkan resolusi layar
document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.innerWidth < 768) {
        document.querySelector(".mobile").style.display = "block";
        document.querySelector(".desktop").style.display = "none";
        stickyMobile()
        modalMobile();
    } else {
        document.querySelector(".mobile").style.display = "none";
        document.querySelector(".desktop").style.display = "block";
        desktopSticky();
    }
});

//function untuk responsive desktop
function desktopSticky() {
    var header = document.querySelector(".desktop .navbar-container");
    var heading_title = document.querySelector(".desktop .heading-title");
    var logo_img = document.querySelector(".desktop #logo-img");
    var logo_container = document.querySelector(".desktop .logo");

    window.onscroll = function() {
        if (window.pageYOffset > 50) {
            logo_container.style.height = "75px";
            logo_container.style.background = "transparent";

            logo_img.style.width = "50px";
            logo_img.style.filter = "invert(1) brightness(100) contrast(10) saturate(0.5)";

            heading_title.style.paddingTop = "80px";
            
            header.classList.add("sticky");
        } else {
            logo_container.style.height = "150px";
            logo_container.style.background = "#EFF2F5";

            logo_img.style.width = "79.49px";
            logo_img.style.filter = "";

            heading_title.style.paddingTop = "";

            header.classList.remove("sticky");
        }
    };
}

//function untuk responsive mobile
function stickyMobile() {
    var header = document.querySelector(".mobile .navbar-container");
    var heading_title = document.querySelector(".mobile .heading-title");
    var logo_container = document.querySelector(".mobile .logo");
    var logo_img = document.querySelector(".mobile #logo-img");
    var btn_menu = document.querySelector(".menu");
    var btn_menu_icon = document.querySelector(".menu img");

    window.onscroll = function() {
        if (window.pageYOffset > 50) {
            logo_container.style.display = "flex";
            logo_container.style.flexDirection = "row";
            logo_container.style.width = "100%";
            logo_container.style.height = "80px";
            logo_container.style.marginInline = "20px";
            logo_container.style.justifyContent = "space-between";
            logo_container.style.background = "transparent";

            logo_img.style.width = "50px";
            logo_img.style.filter = "invert(1) brightness(100) contrast(10) saturate(0.5)";

            heading_title.style.paddingTop = "130px";

            btn_menu.style.background = "transparent";
            btn_menu_icon.style.filter = "invert(1) brightness(100) contrast(10) saturate(0.5)";

            header.classList.add("sticky-mobile");
        } else {
            logo_container.style.display = "";
            logo_container.style.flexDirection = "";
            logo_container.style.width = "";
            logo_container.style.height = "";
            logo_container.style.marginInline = "";
            logo_container.style.justifyContent = "";
            logo_container.style.background = "";

            logo_img.style.width = "";
            logo_img.style.filter = "";

            btn_menu.style.background = "";
            btn_menu_icon.style.filter = "";

            heading_title.style.paddingTop = "";

            header.classList.remove("sticky-mobile");
        }
    };
}

//function untuk memunculkan modal navigasi di tampilan mobile
function modalMobile() {
    const button_menu = document.getElementById("menu-button");
    const button_close = document.querySelector(".close");
    const modal = document.getElementById("modal-container");
    const scrollY = document.body.style.top;

    button_menu.addEventListener("click", function (e) {
        modal.style.display = "block";
        modal.classList.add("active");
        // document.body.style.position = 'fixed';
        // document.body.style.top = `-${scrollY}px`;
        e.preventDefault();
    });

    button_close.addEventListener("click", function (e) {
        modal.classList.remove("active");
        modal.style.display = "none";
        // document.body.style.position = '';
        // document.body.style.top = '';
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
        e.preventDefault();
    });

        //function click in modal mobile
    document.getElementById("button-beranda-mobile").addEventListener("click", function () {
        modal.classList.remove("active");
        modal.style.display = "none";
    });
    document.getElementById("button-tentang-mobile").addEventListener("click", function () {
        modal.classList.remove("active");
        modal.style.display = "none";
    });
    document.getElementById("button-lokasi-mobile").addEventListener("click", function () {
        modal.classList.remove("active");
        modal.style.display = "none";
    });
    document.getElementById("button-jadwal-mobile").addEventListener("click", function () {
        modal.classList.remove("active");
        modal.style.display = "none";
    });
}