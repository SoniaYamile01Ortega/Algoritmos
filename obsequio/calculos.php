    
                    <?php
                    if($ticket >=1 && $ticket <=4){
                        $obsequio = 'Canasta con productos diversos';
                        $descuento = 16.6/100.0 * $monto;

                    }

                    if($ticket >=5 && $ticket <=9){
                        $obsequio = 'Saco de azucar de 50 kg';
                        $descuento = 13.0/100.0 * $monto;

                    }
                    if($ticket >=10 && $ticket <=14){
                        $obsequio = 'Aceite de 5 litros';
                        $descuento = 6.0/100.0 * $monto;

                    }

                    if($ticket >=15 && $ticket <=19){
                        $obsequio = 'Una caja de leche de 24 cajas grandes2';
                        $descuento = 12.0/100.0 * $monto;

                    }

                    if($ticket == 20){
                        $obsequio = 'Saco de arroz de 50 kg';
                        $descuento = 10.0/100.0 * $monto;

                    }

                    if($ticket <1 || $ticket >20){
                    echo '<script>
                        alert("Ticket no es Válido...!!!");
                        </script>';

                    }
                    $nuevomMnto = $monto - $descuento;


                ?>
                    <tr>
                        <td>Monto a cancelar</td>
                        <?php echo '$' .number_format($nuevoMonto, 2, '.', ''); ?>
                    </tr>
                <td>Obsequio obtenido</td>
                <td>
                    <?php echo $obsequio;?>
                </td>
                </tr>