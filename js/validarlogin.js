function validar(){
    const usuario=document.getElementById('usuario');
    const clave=document.getElementById('clave');

    if (usuario.value.length==0) {
        alert("Tiene que escribir un usuario")
        usuario.focus()
        return 0;        
    }

    if (clave.value.length==0) {
        alert("Tiene que escribir una contraseña")
        clave.focus()
        return 0;        
    }

    if (usuario && clave  == consultar) {
        function consultar(){

            $.ajax({
                url:"",
                type: 'GET',
                dataType: 'json',
                success: function(respuesta){
                    console.log(respuesta.items);
                    mostrarRespuesta(respuesta.items);
                },
                
                error: function (xhr, status) {
                    alert('ha sucedido un problema');
                }
            });
        } 
        
    }
    

    //1. Llamar la funcion ajax
    //2. Escribir la función ajax aquí mismo
    //3. Submit del formulario

}

