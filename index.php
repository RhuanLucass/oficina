<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php
        define('HOME', 'http://localhost/Projetos%20Novos/oficina/');
    ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oficina</title>
    <!-- <base id="urlHome" href="<?=HOME?>"> -->

    <!-- Fonts -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="overlay"></div>
    <header>
        <div class="logo">
            <h1>Oficina</h1>
        </div>
        <nav class="desktop">
            <ul >
                <!-- colocar #id no href redireciona diretamente para o id indicado na página -->
                <li><a class="select" href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#reformados">Reformados</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>

        <nav class="mobile">
            <ul>
                <li><a class="select" href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#reformados">Reformados</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        
        <div class="icon-bars">
            <span class="bar-top"></span>
            <span class="bar"></span>
            <span class="bar-bottom"></span>
        </div>
    </header>

    <main id="inicio" class="shapedividers_com-6916" data-animation="bottom">
        <div class="text">
            <h1 data-animation="right">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        </div>
    </main>

    <section class="services" id="servicos">
        
        <div class="container">
            <h2 class="title">Serviços</h2>
            <div class="services-wrapper">
                <div class="aux">
                    <div class="service-single top1" data-animation="top">
                        <img class="img-service" src="images/pintura.jpg" alt="Pintura">
                        <div class="description">
                            <h2>Serviço 1</h2>
                            <p>Non facilis eum illum fuga perspiciatis incidunt omnis in eveniet labore, totam deleniti mollitia modi veritatis!</p>
                        </div>
                    </div>
                    <div class="service-single top2" data-animation="top">
                        <img class="img-service" src="images/pintura.jpg" alt="Pintura">
                        <div class="description">
                            <h2>Serviço 2</h2>
                            <p>Non facilis eum illum fuga perspiciatis incidunt omnis in eveniet labore, totam deleniti mollitia modi veritatis!</p>
                        </div>
                    </div>
                </div>


                <div class="aux">
                    <div class="service-single top3" data-animation="top">
                        <img class="img-service" src="images/pintura.jpg" alt="Pintura">
                        <div class="description">
                            <h2>Serviço 3</h2>
                            <p>Non facilis eum illum fuga perspiciatis incidunt omnis in eveniet labore, totam deleniti mollitia modi veritatis!</p>
                        </div>
                    </div>
                    <div class="service-single top4" data-animation="top">
                        <img class="img-service" src="images/pintura.jpg" alt="Pintura">
                        <div class="description">
                            <h2>Serviço 4</h2>
                            <p>Non facilis eum illum fuga perspiciatis incidunt omnis in eveniet labore, totam deleniti mollitia modi veritatis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- services -->

    <section class="reformeds" id="reformados">
        <div class="container">
            <h2 class="title">Reformados</h2>
            
            <div class="carousel" id="carousel" data-animation="bottom">
                <div data-js="carousel__item" class="carousel__item carousel__item--visible">
                    <img src="images/cars/car1.jpg" />
                </div>

                <div class="carousel__actions">
                    <button data-js="carousel__button--prev" aria-label="Slide anterior"><</button>

                    <button data-js="carousel__button--next" aria-label="Próximo slide">></button>
                </div>

                <div class="balls"></div>
            </div>
        </div>
    </section><!-- reformed -->

    <section class="about" id="sobre">
        <div class="container">
            <h2 class="title">Sobre</h2>
            <div class="description-about">
                <div data-animation="left">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi maxime, dolorem inventore beatae hic aut dolorum quibusdam nobis! Enim quas numquam corporis autem et ratione illo sequi dolorum nostrum pariatur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, consequatur doloribus quis quaerat iusto modi ad error voluptas nesciunt vel, ipsam cumque deleniti consectetur eaque ea maiores recusandae perferendis iste?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, est doloribus porro doloremque unde quae? Modi, tempore molestiae quos perspiciatis voluptates consequatur dignissimos provident, officia sed magni labore perferendis dolore.</p>

                </div>
            </div>
        </div>
    </section><!-- about -->

    <section class="contact" id="contato">
        <div class="container">
            <h2 class="title">Contato</h2>
            <div class="contacts-wrapper">
                <div class="title-contact">
                    <p></p>
                </div>
                <div data-animation="left" class="contacts">
                    <a class="email" data-name="E-mail" data-color="red" href="#"><i class="fa-solid fa-envelope"></i></a>
                    <a class="telefone" data-name="Telefone" data-color="blue" href="#"><i class="fa-solid fa-square-phone"></i></a>
                    <a class="whatsapp" data-name="WhatsApp" data-color="green" href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    <a class="local" data-name="Localização" data-color="red" href="#" target="_blank"><i class="fa-solid fa-location-dot"></i></a>
                </div>
    
                <div class="form-contact">
                    <h3>Enviar Mensagem</h3>
                    <form data-animation="right" method="POST" action="php/contact.php">
                        <input type="text" name="name" placeholder="Seu Nome ">
                        <input type="email" name="email" placeholder="Seu Email">
                        <input type="tel" name="tel" placeholder="Seu telefone (Opcional)">
                        <textarea name="message" placeholder="Sua Mensagem"></textarea>
                        <input type="submit" name="acao" value="Enviar">
                    </form>
                </div>
            </div>
            
        </div>
    </section><!-- contact -->

    <footer>
        <div class="container">
            <p>Todos os direitos reservados <b>Oficina</b></p>
        </div>
    </footer>

    <script src="https://kit.fontawesome.com/dc951fd168.js" crossorigin="anonymous"></script>
    <script src="js/ajax.js"></script>
    <script src="js/script.js"></script>
</body>
</html>