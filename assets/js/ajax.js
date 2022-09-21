function ajax(obj, formData){
    var urlHome = document.getElementById('urlHome').href;

    var objJson, loader;

    if(!urlHome)
        alert('Configure o elemento base id urlHome!');
    
    // Verificando se formData foi passado
    !formData ?
    requireAjax(objXMLHttp(), obj, urlHome + '/' + obj.file, ajaxCallback)
    : requireAjax(objXMLHttp(), formData, urlHome + obj.file, ajaxCallback);

    // objAjax = objXMLHttp
    // data = dados enviados(se houver)
    // urlData = url requisitada
    // callback = função de retorno
    function requireAjax(objAjax, data, urlData, callback){
        objAjax.onreadystatechange = () => {
            callback(objAjax.responseText, objAjax.readyState);
        }

        objAjax.open('POST', urlData, true);

        // Verificando se o arquivo formData é formData ou json
        if(String(formData).indexOf('FormData') == -1){
            // Enviando JSON
            // Setando header
            objAjax.setRequestHeader("Content-type", "application/json; charset=utf-8");
            objAjax.send(JSON.stringify(data));
        }else{
            // Enviando formulário
            objAjax.setRequestHeader("X-requested-with", "XMLHttpRequest");
            objAjax.send(data);
        }
        
        
    }
    // Retorna um objeto XMLHttpRequest
    function objXMLHttp(){
        return new (window.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    }

    function ajaxCallback(response, state){
        // console.log(response)

        if(String(obj.loader) !== 'undefined'){
            loader = document.getElementById(obj.loader);
            activeLoader('block');
        }

        // tentar transformar os dados obtidos em json, caso contrário trata como texto
        if(state === 4){
            try{
                objJson = JSON.parse(response);
                // console.log(objJson);
                addImages(objJson);
                // results(objJson);

            }catch(erro){
                // console.log(erro);
            }
        }

    }



}

function sendAjax(){
    var form = new FormData();
    // form.append('image', image);

    var objData = {
        // 'image': image,
        file: 'php/images-reformeds.php'
    }

    // console.log(objData, form)
    ajax(objData, form);
}
sendAjax();
