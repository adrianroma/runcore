<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

$doc = new DOMDocument();
$doc->loadHTMLFile("bookmark.html");

foreach($doc->getElementsByTagName('a') as $element){

foreach($element->attributes as $attr){
    var_dump($attr->nodeName);
    echo "<br>";
    var_dump($attr->nodeValue);
}

}


$doc->saveHTML();

?>
