* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --orange: #ff5a36;
  --cream: #f7f2ea;
  --dark: #171513;
  --grey: #77716b;
  --white: #fff;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--cream);
  color: var(--dark);
  font-family: "DM Sans", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
  cursor: pointer;
}


/* LOADER */

.loader {
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: var(--dark);
  color: white;

  display: grid;
  place-items: center;

  animation: loaderOut .8s 1.5s forwards;
}

.loader-logo {
  width: 75px;
  height: 75px;

  display: grid;
  place-items: center;

  border-radius: 22px;

  background: var(--orange);

  font-size: 24px;
  font-weight: 800;

  animation: pulse 1s infinite;
}

.loader p {
  position: absolute;
  margin-top: 150px;

  letter-spacing: 5px;
  font-size: 12px;
}

@keyframes loaderOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}


/* NAVBAR */

.navbar {
  height: 82px;

  padding: 0 6%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(247,242,234,.9);

  backdrop-filter: blur(20px);

  position: sticky;
  top: 0;

  z-index: 1000;

  border-bottom: 1px solid #ded7cd;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 43px;
  height: 43px;

  display: grid;
  place-items: center;

  background: var(--dark);
  color: white;

  border-radius: 12px;

  font-weight: 800;
}

.brand strong {
  display: block;
  font-size: 14px;
  letter-spacing: 1px;
}

.brand small {
  display: block;
  color: var(--grey);
  font-size: 7px;
  letter-spacing: 1px;
}

.navbar nav {
  display: flex;
  gap: 30px;
}

.navbar nav a {
  font-size: 12px;
  font-weight: 600;
}

.navbar nav a:hover {
  color: var(--orange);
}

.cart-button {
  position: relative;

  width: 45px;
  height: 45px;

  border: 1px solid #d9d1c7;
  border-radius: 50%;

  background: transparent;

  font-size: 16px;
}

.cart-button span {
  position: absolute;

  top: -3px;
  right: -2px;

  width: 19px;
  height: 19px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--orange);
  color: white;

  font-size: 9px;
}


/* HERO */

.hero {
  min-height: 750px;

  padding: 70px 7%;

  display: grid;

  grid-template-columns: 1.1fr .9fr;

  align-items: center;

  gap: 60px;

  overflow: hidden;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--orange);

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 2px;
}

.eyebrow span {
  width: 28px;
  height: 1px;

  background: var(--orange);
}

.hero h1 {
  margin-top: 25px;

  font-family: "Playfair Display", serif;

  font-size: clamp(55px, 7vw, 100px);

  line-height: .92;

  letter-spacing: -4px;
}

.hero h1 em,
.section-heading em,
.service-content em,
.celebration em {
  color: var(--orange);
  font-style: normal;
}

.big-name {
  margin-top: 25px;

  font-size: clamp(35px, 6vw, 82px);

  font-weight: 800;

  letter-spacing: -4px;

  color: transparent;

  -webkit-text-stroke: 1px #29231f;

  white-space: nowrap;
}

.hero-description {
  max-width: 570px;

  margin-top: 22px;

  color: var(--grey);

  line-height: 1.8;

  font-size: 14px;
}

.hero-actions {
  display: flex;
  gap: 12px;

  margin-top: 30px;
}

.primary-btn,
.whatsapp-btn,
.light-btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 15px 22px;

  border-radius: 5px;

  font-size: 12px;
  font-weight: 700;

  transition: .3s;
}

.primary-btn {
  background: var(--dark);
  color: white;
}

.whatsapp-btn {
  background: #25d366;
  color: white;
}

.primary-btn:hover,
.whatsapp-btn:hover,
.light-btn:hover {
  transform: translateY(-4px);
}

.location {
  margin-top: 35px;

  display: flex;
  gap: 12px;

  align-items: center;
}

.location > i {
  color: var(--orange);
}

.location strong {
  display: block;
  font-size: 12px;
}

.location small {
  color: var(--grey);
  font-size: 10px;
}


/* HERO IMAGE */

.hero-right {
  height: 590px;

  position: relative;

  display: grid;
  place-items: center;
}

.hero-image-main {
  width: 420px;
  height: 520px;

  overflow: hidden;

  border-radius: 220px 220px 20px 20px;

  transform: rotate(3deg);

  box-shadow: 30px 30px 0 #ded5c9;

  animation: imageFloat 5s ease-in-out infinite;
}

.hero-image-main img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 1s;
}

.hero-image-main:hover img {
  transform: scale(1.08);
}

.image-label {
  position: absolute;

  left: 0;
  bottom: 55px;

  padding: 18px 22px;

  background: white;

  box-shadow: 0 15px 40px #0002;
}

.image-label small {
  display: block;

  color: var(--orange);

  font-size: 8px;
  letter-spacing: 2px;
}

.image-label strong {
  font-family: "Playfair Display", serif;

  font-size: 20px;
}

.circle-text {
  position: absolute;

  right: -25px;
  top: 55px;

  width: 115px;
  height: 115px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  border: 1px solid #cfc6ba;

  animation: rotate 12s linear infinite;
}

.circle-text span {
  font-size: 8px;
  letter-spacing: 2px;
  text-align: center;
}

.floating-food {
  position: absolute;

  width: 70px;
  height: 70px;

  display: grid;
  place-items: center;

  background: white;

  border-radius: 50%;

  font-size: 34px;

  box-shadow: 0 15px 40px #0002;

  animation: float 4s ease-in-out infinite;
}

.food-1 {
  right: 15px;
  bottom: 100px;
}

.food-2 {
  left: 15px;
  top: 120px;

  animation-delay: 1s;
}

.food-3 {
  right: 70px;
  bottom: 20px;

  animation-delay: 2s;
}


/* MARQUEE */

.marquee {
  overflow: hidden;

  background: var(--orange);

  color: white;

  padding: 17px 0;
}

.marquee-track {
  width: max-content;

  display: flex;

  align-items: center;

  gap: 25px;

  animation: marquee 22s linear infinite;
}

.marquee span {
  font-weight: 800;

  font-size: 14px;

  letter-spacing: 2px;
}

.marquee i {
  font-size: 9px;
}


/* MENU */

.menu-section {
  padding: 110px 7%;
}

.section-heading {
  display: flex;

  align-items: end;

  justify-content: space-between;

  gap: 40px;

  margin-bottom: 45px;
}

.section-heading h2,
.service-content h2,
.celebration h2 {
  margin-top: 15px;

  font-family: "Playfair Display", serif;

  font-size: clamp(40px, 5vw, 65px);

  line-height: 1;
}

.section-heading > p {
  max-width: 350px;

  color: var(--grey);

  line-height: 1.7;

  font-size: 13px;
}

.category-bar {
  display: flex;

  gap: 10px;

  flex-wrap: wrap;

  margin-bottom: 30px;
}

.category-bar button {
  border: 1px solid #d9d1c7;

  background: transparent;

  padding: 10px 18px;

  border-radius: 30px;

  font-size: 11px;

  font-weight: 700;
}

.category-bar button.active,
.category-bar button:hover {
  background: var(--dark);
  color: white;
}


/* FOOD GRID */

.food-grid {
  display: grid;

  grid-template-columns: repeat(3,1fr);

  gap: 25px;
}

.food-card {
  background: white;

  padding: 10px;

  border-radius: 8px;

  box-shadow: 0 15px 50px #00000009;

  transition: .5s;

  animation: cardIn .7s ease;
}

.food-card:hover {
  transform: translateY(-10px);

  box-shadow: 0 25px 70px #00000018;
}

.food-image {
  height: 270px;

  position: relative;

  overflow: hidden;

  border-radius: 5px;
}

.food-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: .7s;
}

.food-card:hover .food-image img {
  transform: scale(1.08);
}

.tag {
  position: absolute;

  top: 12px;
  left: 12px;

  padding: 7px 10px;

  background: var(--orange);

  color: white;

  font-size: 8px;
  font-weight: 800;

  letter-spacing: 1px;
}

.food-info {
  display: flex;

  justify-content: space-between;

  align-items: end;

  padding: 18px 8px 12px;
}

.food-info small {
  color: var(--grey);

  font-size: 8px;

  letter-spacing: 1.5px;
}

.food-info h3 {
  margin-top: 5px;

  font-family: "Playfair Display", serif;

  font-size: 21px;
}

.food-info > strong {
  font-size: 18px;
}

.add-button {
  width: 100%;

  border: none;

  padding: 13px;

  border-radius: 5px;

  background: #f2ede6;

  font-weight: 700;

  font-size: 11px;

  transition: .3s;
}

.add-button:hover {
  background: var(--orange);
  color: white;
}


/* HOME SERVICE */

.home-service {
  padding: 100px 7%;

  background: var(--dark);

  color: white;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: center;
}

.service-image {
  height: 570px;

  overflow: hidden;

  border-radius: 200px 200px 10px 10px;
}

.service-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 1s;
}

.service-image:hover img {
  transform: scale(1.06);
}

.service-content > p:not(.eyebrow) {
  max-width: 500px;

  margin-top: 25px;

  color: #bdb8b2;

  line-height: 1.8;

  font-size: 14px;
}

.service-points {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;

  margin: 35px 0;
}

.service-points div {
  display: flex;

  align-items: center;

  gap: 12px;

  color: #ddd;

  font-size: 12px;
}

.service-points i {
  color: var(--orange);
}


/* CELEBRATION */

.celebration {
  min-height: 600px;

  padding: 100px 7%;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 80px;
}

.celebration-content > p:not(.eyebrow) {
  max-width: 500px;

  margin: 25px 0;

  color: var(--grey);

  line-height: 1.8;
}

.light-btn {
  background: var(--orange);
  color: white;
}

.cake-photo {
  height: 450px;

  overflow: hidden;

  border-radius: 10px;
}

.cake-photo img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 1s;
}

.cake-photo:hover img {
  transform: scale(1.07);
}


/* CONTACT */

.contact-section {
  padding: 100px 7%;

  background: #eee7dd;
}

.contact-grid {
  display: grid;

  grid-template-columns: repeat(3,1fr);

  gap: 20px;
}

.contact-box {
  min-height: 180px;

  padding: 30px;

  background: white;

  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 8px;

  border-radius: 7px;

  transition: .4s;
}

.contact-box:hover {
  transform: translateY(-7px);
}

.contact-box i {
  color: var(--orange);

  font-size: 25px;

  margin-bottom: 10px;
}

.contact-box small {
  color: var(--grey);

  font-size: 8px;

  letter-spacing: 2px;
}

.contact-box strong {
  font-family: "Playfair Display", serif;

  font-size: 19px;
}


/* FOOTER */

footer {
  padding: 35px 7%;

  background: #11100f;

  color: white;

  display: flex;

  justify-content: space-between;

  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

footer p {
  color: #777;

  font-size: 9px;
}


/* CART */

.cart-overlay {
  position: fixed;

  inset: 0;

  z-index: 1999;

  background: #0009;

  opacity: 0;

  visibility: hidden;

  transition: .3s;
}

.cart-overlay.active {
  opacity: 1;
  visibility: visible;
}

.cart {
  position: fixed;

  right: -450px;

  top: 0;

  z-index: 2000;

  width: min(430px,100%);

  height: 100vh;

  background: white;

  padding: 28px;

  transition: .4s;

  display: flex;

  flex-direction: column;
}

.cart.active {
  right: 0;
}

.cart-top {
  display: flex;

  justify-content: space-between;

  border-bottom: 1px solid #eee;

  padding-bottom: 20px;
}

.cart-top small {
  color: var(--orange);

  font-size: 8px;

  letter-spacing: 2px;
}

.cart-top h2 {
  font-family: "Playfair Display", serif;
}

.cart-top button {
  width: 35px;
  height: 35px;

  border: none;

  border-radius: 50%;

  background: #eee;
}

.cart-items {
  flex: 1;

  overflow-y: auto;
}

.cart-item {
  padding: 18px 0;

  display: flex;

  justify-content: space-between;

  border-bottom: 1px solid #eee;
}

.cart-item h4 {
  font-size: 13px;
}

.cart-item p {
  margin-top: 5px;

  color: var(--orange);

  font-size: 11px;
}

.remove-item {
  border: none;

  background: none;

  color: #e33;
}

.total {
  display: flex;

  justify-content: space-between;

  margin: 20px 0;

  font-size: 18px;
}

.checkout {
  width: 100%;

  border: none;

  padding: 16px;

  background: #25d366;

  color: white;

  border-radius: 5px;

  font-weight: 800;
}


/* ANIMATIONS */

@keyframes float {

  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-18px);
  }

}

@keyframes imageFloat {

  0%,100% {
    transform: rotate(3deg) translateY(0);
  }

  50% {
    transform: rotate(3deg) translateY(-12px);
  }

}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@keyframes cardIn {

  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}

@keyframes pulse {

  50% {
    transform: scale(1.08);
  }

}


/* RESPONSIVE */

@media(max-width:1000px) {

  .navbar nav {
    display: none;
  }

  .hero,
  .home-service,
  .celebration {
    grid-template-columns: 1fr;
  }

  .hero {
    text-align: center;
  }

  .hero .eyebrow,
  .location {
    justify-content: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-right {
    height: 520px;
  }

  .food-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
  }

}


@media(max-width:600px) {

  .navbar {
    height: 70px;
    padding: 0 5%;
  }

  .brand strong {
    font-size: 11px;
  }

  .hero {
    padding: 60px 5%;
  }

  .hero h1 {
    font-size: 52px;
    letter-spacing: -2px;
  }

  .big-name {
    font-size: 38px;
    letter-spacing: -2px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-right {
    height: 430px;
  }

  .hero-image-main {
    width: 280px;
    height: 370px;
  }

  .circle-text {
    right: 0;
  }

  .food-grid {
    grid-template-columns: 1fr;
  }

  .menu-section,
  .home-service,
  .celebration,
  .contact-section {
    padding: 70px 5%;
  }

  .service-image {
    height: 400px;
  }

  .service-points,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .celebration {
    gap: 40px;
  }

  .cake-photo {
    height: 350px;
  }

  footer {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

}