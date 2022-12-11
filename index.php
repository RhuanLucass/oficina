<!DOCTYPE html>
<html lang="pt-br">

<head>
  <?php
  define('HOME', 'http://localhost/Projetos%20Novos/oficina/assets/');
  ?>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oficina Santo Expedito - Seu veículo em boas mãos</title>
  <meta name="title" content="Oficina Santo Expedito - Seu veículo em boas mãos">
  <meta name="description" content="Oferecemos serviços de alta qualidade em funilaria e pintura com um preço especial para seus veículos.">
  <!-- <link rel="canonical" href=""> -->
  <base id="urlHome" href="<?= HOME ?>">

  <!-- Fonts -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="<?= HOME ?>css/style.css">
</head>

<body>
  <div class="overlay"></div>
  <header class="background">
    <div class="container">
      <div class="logo">
        <h6>Oficina</h6>
        <h2>Santo Expedito</h2>
      </div>
      <nav class="desktop">
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
    </div>
  </header>

  <main id="inicio" class="shapedividers_com-1134" data-animation="top">
    <div class="text">
        <div class="container">
        <h1 data-animation="right">Fazendo dos seus sonhos realidade!</h1>
        <p data-animation="left">Faça seu orçamento gratuito e venha renovar a aparência de seu veículo.</p>
      </div>
    </div>
  </main>

  <section class="services" id="servicos">
    <div class="container">
      <h2 class="title">Serviços</h2>
      <div class="services-wrapper">
        <div class="service-single" data-animation="top">
          <div class="box-single">
            <i class="fa-solid fa-hammer"></i>
            <div class="description">
              <h2>Funilaria</h2>
              <p>Realizamos reparos na carroceria de seu automóvel. Restauramos peças danificadas e substituímos as que não forem possíveis consertar.</p>
            </div>
          </div>
        </div>
        <div class="service-single mid" data-animation="top">
          <div class="box-single">
            <i class="fa-solid fa-fill-drip"></i>
            <div class="description">
              <h2>Pintura</h2>
              <p>A pintura é realizada tanto na parte interna quanto externa. Ela é utilizada para corrigir danos a lataria e melhorar a estética do veículo. Pode ser feita em pequenas partes e também nele inteiro.</p>
            </div>
          </div>
        </div>
        <div class="service-single" data-animation="top">
          <div class="box-single">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <div class="description">
              <h2>Outros</h2>
              <p>Além de veículos, também realizamos reparos e pinturas em outras peças, como: portas, janelas, armários, portões, entre outros. Entre em contato para saber mais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- services -->

  <section class="renovated" id="reformados">
    <div class="container">
      <h2 class="title">Reformados</h2>
      <p>Confira alguns de nossos serviços realizados.</p>
      <div class="carousel" id="carousel" data-animation="bottom">
        <div class="carousel__actions">
          <button data-js="carousel__button--prev" aria-label="Slide anterior"><i class="fa-solid fa-chevron-up"></i></button>

          <button data-js="carousel__button--next" aria-label="Próximo slide"><i class="fa-solid fa-chevron-up"></i></button>
        </div>

        <div class="balls"></div>
      </div>
    </div>
  </section><!-- renovated -->

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
          <a class="email" data-name="E-mail" data-color="var(--color-email)" href="#" target="_blank"><i class="fa-solid fa-envelope"></i></a>
          <a class="telefone" data-name="Telefone" data-color="var(--color-phone)" href="#"><i class="fa-solid fa-square-phone"></i></a>
          <a class="whatsapp" data-name="WhatsApp" data-color="var(--color-wpp)" href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
          <a class="local" data-name="Localização" data-color="var(--color-email)" href="#" target="_blank"><i class="fa-solid fa-location-dot"></i></a>
        </div>

        <div class="form-contact">
          <h3>Enviar Mensagem</h3>
          <form data-animation="right" method="POST" action="php/contact.php">
            <label for="input-name" hidden>Nome</label>
            <input id="input-name" type="text" name="name" placeholder="Seu Nome" required>
            <label for="input-email" hidden>E-mail</label>
            <input id="input-email" type="email" name="email" placeholder="Seu Email" required>
            <label for="input-tel" hidden>Telefone</label>
            <input id="input-tel" type="tel" name="tel" placeholder="Seu telefone (Opcional)">
            <label for="input-message" hidden>Mensagem</label>
            <textarea id="input-message" name="message" placeholder="Sua Mensagem" required></textarea>
            <input type="submit" name="acao" value="Enviar">
          </form>
        </div>
      </div>

    </div>
  </section><!-- contact -->

  <footer>
    <div class="container">
      <p>Todos os direitos reservados <b>Oficina Santo Expedito</b>&reg;</p>
    </div>
  </footer>

  <script src="https://kit.fontawesome.com/dc951fd168.js" crossorigin="anonymous"></script>
  <script src="<?= HOME ?>js/ajax.js"></script>
  <script src="<?= HOME ?>js/script.js"></script>
  
</body>

</html>