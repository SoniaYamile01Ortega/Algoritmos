<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/icono.jpg">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>Caso01-Obsequio</title>

</head>

<body>
    <header>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="images/supermercado.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="images/verduras.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="images/articulos.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </header>
    <?php
    error_reporting(0) ;
    $monto=$_POST['txtMonto'];
    $ticket=$_POST['txtNumero'];
 
 ?>

    <section>
        <form name="frmObsequio" action="obsequio.php" method="POST">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td>Nombre del cliente</td>
                        <td><input type="text" name="txtCliente" size="60" value="<?php echo $_POST[txtCliente];?>"
                                placeholder="Ingrese nombre del cliente" />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Monto Total %</td>
                        <td><input type="text" name="txtMonto" size="60" value="<?php echo $monto;?>"
                                placeholder="Ingrese monto a pagar" />
                        </td>

                    </tr>
                    <tr>

                        <td>Número de ticket</td>
                        <td><input type="text" name="txtNumero" size="40" value="<?php echo $ticket;?>"
                                placeholder="Ingrese el número de ticket obtenido" />
                    </tr>
                    <tr>

                        <td></td>
                        <td><input type="submit" value="procesar" </td>
                    </tr>
                </tbody>
            </table>

            <?php include_once("calculos.php");?>






    </section>



</body>
<?php include("pie.php");?>

</html>