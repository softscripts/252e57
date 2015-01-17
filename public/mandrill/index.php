<?php
//ini_set("display_errors",1);
require_once dirname(__FILE__).'/mandrill-api-php/src/Mandrill.php'; //Not required with Composer
$mandrill = new Mandrill('CfIbZj0SxHrZh45g981qww');

try {
  $result = $mandrill->urls->getList();
    echo json_encode($result);
    /*
    Array
    (
        [0] => Array
            (
                [url] => http://example.com/example-page
                [sent] => 42
                [clicks] => 42
                [unique_clicks] => 42
            )
    
    )
    */
} catch(Mandrill_Error $e) {
    // Mandrill errors are thrown as exceptions
    echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
    // A mandrill error occurred: Mandrill_Invalid_Key - Invalid API key
    throw $e;
}
?>
