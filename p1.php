<HTML>

<HEAD>
  <meta charset="UTF-8"/>
  <link rel="stylesheet" href="p1.css">
  <meta name="author" content="Hugo Prado Sueiro">
  <TITLE>php del formulario</TITLE>
</HEAD>

<BODY>
  <fieldset><legend>Inscripción exitosa!!!</legend>
  <?php
  echo "Hola " . $_REQUEST['cname'] . ", bienvenido a la mejor lista de películas del mundo!<br><br>";

  if(!empty($_REQUEST['clogin'])){
    if(!empty($_REQUEST['cpasswd'])){
      echo "No olvides que tu login es " . $_REQUEST['clogin'] . " y que tu contraseña es " . $_REQUEST['cpasswd'] . "<br><br>";
    }
    else{
      echo "No olvides que tu login es " . $_REQUEST['clogin'] . "<br><br>";
    }
  }

  if(empty($_REQUEST['clogin'])){
    if(!empty($_REQUEST['cpasswd'])){
      echo "No olvides que tu contraseña es " . $_REQUEST['cpasswd'] . "<br><br>";
    }
  }

  if(!empty($_REQUEST['cemail'])){
    if(!empty($_REQUEST['ctlph'])){
      echo "Te hemos enviado un email a la dirección de correo que nos has indicado (" . $_REQUEST['cemail'] .
      ") y un SMS al número " . $_REQUEST['ctlph'] . " para notificarte que el registro ha sido exitoso.<br><br>";
    }
    else{
      echo "Te hemos enviado un email a la dirección de correo que nos has indicado (" . $_REQUEST['cemail'] . ").";
    }
  }

  if(empty($_REQUEST['cemail'])){
    if(!empty($_REQUEST['ctlph'])){
      echo "Te hemos enviado un SMS al teléfono que nos has indicado (" . $_REQUEST['ctlph'] . ").";
    }
  }

  if(!empty($_REQUEST['proveedor'])){
    echo " Hemos verificado tu conexión a internet por parte de " . $_REQUEST['proveedor'] .
    " y funciona perfectamente, así que podrás disfrutar de las mejores películas ";
  }

  if(empty($_REQUEST['proveedor'])){
    echo "A partir de ahora podrás disfrutar de las mejores películas ";
  }

  //Programa para imprimir los géneros de películas
  if(isset($_REQUEST['submit'])){
  //Bucle con el que obtenemos todos los valores marcados
  if(!empty($_REQUEST['cgenre'])){
    echo "de ";
  foreach($_REQUEST['cgenre'] as $selected){
  //Dentro del bucle imprimimos el resultado por cada respuesta
  echo $selected.", ";
      }
    }
  }

  if(!empty($_REQUEST['cage'])){
    echo" que más recomienda la gente de " . $_REQUEST['cage'] . " a 4K sin ningún problema!<br><br>";
  }
  ?>
  <br>
  <img class="james" src="http://tusimagenesde.com/wp-content/uploads/2014/12/okay-3.jpg" style="width:120px; height:200px;"/>
  </fieldset>
  <br><br><br><br>
  <?php
  phpinfo();
   ?>
</BODY>

</HTML>
