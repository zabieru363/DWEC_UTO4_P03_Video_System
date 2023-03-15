<?php
    date_default_timezone_set("Europe/Madrid");

    $now = getdate();

    echo "Fecha actual:" . "<br>";
    echo "Dia: " . $now["mday"] . "Mes: " . $now["mon"] . "Año: " . $now["year"];

    echo "Hora actual";
    echo $now["hours"] . ":" . $now["minutes"] . ":" . $now["seconds"];

    echo "La copia de seguridad se realizó correctamente";
?>