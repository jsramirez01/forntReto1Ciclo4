function validar(){
    const usuario=document.getElementById('usuario');
    const email=document.getElementById('email');
    const clave=document.getElementById('clave');
    const clave2=document.getElementById('clave2');
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (usuario.value.length==0) {
        alert("Tiene que escribir un usuario")
        usuario.focus()
        return 0;        
    }

    if (email.value.length==0) {
        alert("Tiene que escribir un email")
        email.focus()
        return 0;        
    }

    if (expReg.test(email.value)==false) {
        alert("Tiene que escribir un email valido")
        email.focus()
        return 0;        
    }

    if (clave.value.length==0) {
        alert("Tiene que escribir una contraseña")
        clave.focus()
        return 0;        
    }

    if (clave2.value.length==0) {
        alert("Tiene que confirmar la contraseña")
        clave2.focus()
        return 0;        
    }

    if (clave.value!=clave2.value) {
        alert("Las contraseñas deben coincidir")
        clave.focus()
        return 0;        
    }
    if (usuario && email && clave == guardar) {
        alert("El usuario ya existe")
        return 0;
     
    }
    function guardar(){
        console.log("ejecutando funcion para guardar");
    
        let client = {
            usuario: $("#usuario").val(),
            email: $("#email").val(),
            clave: $("#clave").val(),
            
           
        };
        console.log(client);
    
        $.ajax({
            url: "",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(client),
            statusCode:{
                201:function(){
                    alert('Se ha registrado un cliente');
                }
            },
        });
    
    } 
    
}



    




    


