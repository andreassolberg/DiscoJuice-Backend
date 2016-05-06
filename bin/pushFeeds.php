#!/usr/bin/env php
<?php

require(dirname(dirname(__FILE__)) . '/lib/autoload.php');


$command = new Commando\Command();


// $command->option()
//     ->describedAs('Command to run: default is update.');

// $command->option('f')
// 	->aka('feed')
// 	->describedAs('The feed identifier to load.');

// $command->option('cache-only')
// 	->boolean()
// 	->describedAs('Do not load metadata, only use existing cache.');

if ($command[0] === 'termcolor') {
	phpterm_demo();
	exit;
}




$feeds = json_decode(file_get_contents(dirname($BASE) . '/etc/feeds.js'), TRUE);
// $dj = new DiscoStore();
$dj = DiscoStore::getStore();

foreach($feeds AS $key => $feed) {
	$feed['id'] = $key;
	$dj->insertOrUpdateFeed($feed);
	print_r($feed);
}
exit;



$backend = new DiscoJuiceBackend();
if ($command['cache-only']) {
	DiscoUtils::log("Running in cache-only mode");
	$backend->enableCacheOnly(true);	
}

DiscoUtils::log("DiscoJuice update script. Now updating metadata.", true);
if ($command['feed']) {
	$backend->updateFeed($command['feed']);
} else {
	$backend->update();	
}
