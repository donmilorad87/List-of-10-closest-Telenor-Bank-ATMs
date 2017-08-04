<?php

$k = file_get_contents('php://input');

$targetDir= 'clusterMap/data.json';

file_put_contents($targetDir, $k);


