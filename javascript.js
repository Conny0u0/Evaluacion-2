function validar()
{
    
    
    var nombre = document.formulario.nombre.value
    var apellidos = document.formulario.apellidos.value
    var rut = document.formulario.txt_rut.value
    var edad = document.formulario.txt_edad.value
    var fono = document.formulario.fono.value
    var txt_correo_electronico = document.formulario.txt_correo_electronico.value
    var sexo = document.formulario.sexo.value

    if (document.formulario.nombre.value.length<2)
    {
        alert("Nombre debe tener al menos 2 caracteres")
        document.formulario.nombre.focus();
        return false;
    }
    if (document.formulario.apellidos.value.length<2)
    {
        alert("Apellidos debe tener más de 2 caracteres")
        document.formulario.apellidos.focus();
        return false;
    }
    if (rut<9 || rut>10 || rut.indexOf('-')<0 || rut.indexOf('.')>0)
    {
        alert("RUT debe tener entre 9 y 10 caracteres, sin puntos y con guion")
        document.formulario.txt_rut.focus()
        return false
    }
    if (document.formulario.txt_edad.value.length<1)
    {
        alert("Edad debe tener al menos 1 caracter")
        document.formulario.txt_edad.focus();
        return false;
    }
    if (fono.substring(0,1)!="9" || fono.indexOf('+')>0 || fono.indexOf('-')>0)
    {
        alert("Teléfono debe comenzar con 9 y tener 9 caracteres")
        document.formulario.fono.focus()
        return false;
    }
    if (txt_correo_electronico.indexOf('@')<0||txt_correo_electronico.indexOf('.')<0)
    {
        alert("Debe ingresar un correo con @ y .com")
        document.formulario.txt_correo_electronico.focus()
        return false
    }
    if (document.formulario.sexo.length.defaultChecked)
    {
        alert("Debe seleccionar al menos una opción")
        document.formulario.sexo.focus()
        return false
    }
    if (document.getElementById("chk_terminos").checked==false)
    {
        alert("Debe aceptar los terminos y condiciones para finalizar")
        document.getElementById("<strong>chk_terminos</strong>").focus()
        return false
        {
            return true
        }
    }

else
{
    alert("Datos Ingresados"+ '\n'+"Nombre: "+nombre+'\n'+"Apellido(s): "+apellidos+'\n'+"Rut: "+rut+'\n'+"Edad: "+edad+'\n'+"Teléfono: "+fono+'\n'+"Correo: "+txt_correo_electronico+'\n'+"Sexo: "+sexo)
}  
}