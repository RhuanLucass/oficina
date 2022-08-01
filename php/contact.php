<?php
    // Só funcionará em um servidor real
    
    if(!isset($_POST['email']) || empty($_POST['email'])) 
        echo '<p>Você precisar colocar seu email</p>';
    else if(!isset($_POST['name']) || empty($_POST['name']))
        echo '<p>Você precisar colocar seu nome</p>';
    else if (!isset($_POST['message']) || empty($_POST['message']))
        echo '<p>Você precisar colocar sua mensagem</p>';
    else{
        // Definindo variáveis para receber o conteúdo do fomulário
        $nome = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $message = $_POST['message'];
    
        $to = 'rhuanfernandes.rf@gmail.com';
        $subject = 'Contato - Oficina';
        $body = 'Nome: '.$nome.'\r\n'.
                'Email:'.$email.'\r\n'.
                'Telefone: '.$tel.'\r\n'.
                'Mensagem: '.$message;
        $header = 'From:contato@oficina.com'.'\r\n'.
                    'Reply-to:'.$email.'\r\n'.
                    'X=Mailer:PHP/'.phpversion();

        if(mail($to, $subject, $body, $header)){
            echo 'Email enviado com sucesso!';
        }else{
            echo 'Erro ao enviar o email!';
        }
    }
?>