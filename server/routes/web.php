<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {

    $seotools = app('seotools');
    $metatags = app('seotools.metatags');
    $twitter = app('seotools.twitter');
    $opengraph = app('seotools.opengraph');
    $jsonld = app('seotools.json-ld');

    $metatags->setTitle("TRIANON | HOME");
    $metatags->setDescription("TRIANON DESCRIPTION");

    $metatags->addMeta('article:published_time', "2019-08-02", 'property');
    $metatags->addMeta('article:section', "HOME", 'property');

    $metatags->addMeta('geo.region', "CO", 'property');
    $metatags->addMeta('geo.placename', "Bogot&aacute;", 'property');
    $metatags->addMeta('geo.position', "4.698699;-74.030875", 'property');
    $metatags->addMeta('ICBM', "4.698699;-74.030875", 'property');

    $metatags->addKeyword(['key1', 'key2', 'key3']);

    return view('app');
});


$router->get('/shop', function () use ($router) {

    $seotools = app('seotools');
    $metatags = app('seotools.metatags');
    $twitter = app('seotools.twitter');
    $opengraph = app('seotools.opengraph');
    $jsonld = app('seotools.json-ld');

    $metatags->setTitle("TRIANON | TIENDA VIRTUAL");
    $metatags->setDescription("TRIANON DESCRIPTION");
    $metatags->addMeta('article:published_time', "2019-08-02", 'property');
    $metatags->addMeta('article:section', "HOME", 'property');
    $metatags->addKeyword(['key1', 'key2', 'key3']);

    return view('app');
});
