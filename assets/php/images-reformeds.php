<?php

    function images(){
        $pasta = '../images/cars/';
        $arquivos = glob("$pasta{*.jpg,*.JPG,*.png,*.gif,*.bmp}", GLOB_BRACE);
        
        $json = json_encode($arquivos);
        print_r($json);
    
        // echo "Total de Imagens: " . $countImg."<br/>";
        
        // foreach($arquivos as $img){
        //     echo "<img src='$img'>";    
        // }
    }

    images();

?>