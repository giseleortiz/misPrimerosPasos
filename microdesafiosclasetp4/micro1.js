let perfil = process.argv[2]
let mensaje;

if (
  perfil === "administrador" ||
  perfil === "ADMINISTRADOR" ||
  perfil === "Administrador"
) {
  mensaje = "Usted tiene todos los privilegios de uso del sistema.";
} else if (
  perfil === "asistente" ||
  perfil === "ASISTENTE" ||
  perfil === "Asistente"
) {
  mensaje =
    "Usted sólo tiene permisos de registrar, modificar y consultar datos.";
} else if (
  perfil === "invitado" ||
  perfil === "INVITADO" ||
  perfil === "Invitado"
) {
  mensaje = "Usted sólo tiene permisos de consultar datos.";
} else {
  mensaje = "Debe especificar un perfil válido.";
}

console.log('con IF', mensaje);

switch (perfil) {
  case "administrador":
  case "ADMINISTRADOR":
  case "Administrador":
    mensaje = "Usted tiene todos los privilegios de uso del sistema.";
    break;
  case "asistente":
  case "ASISTENTE":
  case "Asistente":
    mensaje =
      "Usted sólo tiene permisos de registrar, modificar y consultar datos.";
    break;

  case "invitado":
  case "INVITADO":
  case "Invitado":
    mensaje = "Usted sólo tiene permisos de consultar datos.";
    break;
  default:
    mensaje = "Debe especificar un perfil válido.";
}

console.log('con SWITCH', mensaje);

/*toLowerCase() */

if (
    perfil.toLowerCase() === "administrador"
  ) {
    mensaje = "Usted tiene todos los privilegios de uso del sistema.";
  } else if (
    perfil.toLowerCase() === "asistente"
  ) {
    mensaje =
      "Usted sólo tiene permisos de registrar, modificar y consultar datos.";
  } else if (
    perfil.toLowerCase() === "invitado"
  ) {
    mensaje = "Usted sólo tiene permisos de consultar datos.";
  } else {
    mensaje = "Debe especificar un perfil válido.";
  }
  
  console.log('con IF', mensaje);
  
  switch (perfil.toLowerCase()) {
    case "administrador":
      mensaje = "Usted tiene todos los privilegios de uso del sistema.";
      break;
    case "asistente":
      mensaje =
        "Usted sólo tiene permisos de registrar, modificar y consultar datos.";
      break;
    case "invitado":
      mensaje = "Usted sólo tiene permisos de consultar datos.";
      break;
    default:
      mensaje = "Debe especificar un perfil válido.";
  }
  
  console.log('con SWITCH', mensaje);

