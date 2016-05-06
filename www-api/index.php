<?php

/*
 * This is the DiscoJuice API
 *
 */


require_once(dirname(dirname(__FILE__)) . '/lib/autoload.php');

class NotFound extends Exception {

}


header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: HEAD, GET, OPTIONS, POST, DELETE, PATCH");
header("Access-Control-Allow-Headers: Authorization, X-Requested-With, Origin, Accept, Content-Type");
header("Access-Control-Expose-Headers: Authorization, X-Requested-With, Origin, Accept, Content-Type");

$profiling = microtime(true);
error_log("Time START    :     ======> " . (microtime(true) - $profiling));



try {

	$response = null;

	$parameters = null;
	$body = null;

	if (DiscoUtils::route('options', '.*', $parameters)) {
		header('Content-Type: application/json; charset=utf-8');
		exit;
	}

	$store = DiscoStore::getStore();
	$logostore = new DiscoStoreLogos();

	


	if (DiscoUtils::route('get', '^/$', $parameters, $body)) {

		header('Content-Type: text/plain; charset=utf-8');
		echo "Welcome to DiscoJuice API\n" . 
			"Consult documentation for details about using the API.\n" .
			"http://discojuice.org";
		exit;

	} else if (DiscoUtils::route('get', '^/feeds$', $parameters, $body)) {


		$list = $store->getFeedList();
		$response = Feed::toJSONlist($list);
		// $response = $list;


	} else if (DiscoUtils::route('get', '^/geo$', $parameters, $body)) {
		$geoservice = new GeoService();
		$data = array();
		$clientIP = $_SERVER['REMOTE_ADDR'];
		$data['country'] = $geoservice->countryFromIP($clientIP);
		$data['geo'] = $geoservice->geoFromIP($clientIP);
		$response = $data;

	} else if (DiscoUtils::route('get', '^/pipe/([a-z0-9\-_]+)$', $parameters, $body)) {

		$response = $store->getPipe($parameters[1]);
		unset($response['_id']);

	} else if (DiscoUtils::route('get', '^/pipe/([a-z0-9\-_]+)/disco$', $parameters, $body)) {

		$c = $store->getPipe($parameters[1]);

		if ($c === null) {
			echo "not found pipe " . $parameters[1];
		}

		$pipe = Pipe::fromDB($c);
		$query = $pipe->getQuery();
		$response = $store->getIdPs($query);

		// $response = $query;
		// $response = $store->getFeed($parameters[1]);


	} else if (DiscoUtils::route('get', '^/feed/([a-z0-9\-_]+)$', $parameters, $body)) {

		$fp = new FeedProcessor($store->getFeed($parameters[1]));
		$response = $fp->process();

	} else if (DiscoUtils::route('get', '^/feed/([a-z0-9\-_]+)/metadata$', $parameters, $body)) {

		$response = $store->getFeedMetadata($parameters[1]);


	} else if (DiscoUtils::route('get', '^/logo/([a-z0-9\-_]+)$', $parameters, $qs)) {


		$param = $parameters[1];




		$data = $logostore->getById($param);
		// echo "data"; var_dump($data); exit;
		header('Content-Type: image/png');
		echo $data['logo']->bin;
		exit;


	} else if (DiscoUtils::route('get', '^/logo$', $parameters, $qs)) {

		if (!isset($_REQUEST['entityId'])) {
			throw new Exception('Missing required parameter entityId');
		}
		if (!isset($_REQUEST['feed'])) {
			throw new Exception('Missing required parameter feed');
		}

		$data = $logostore->get($_REQUEST['entityId'], $_REQUEST['feed'], true);
		// $data = $logostore->get('https://pieter.aai.surfnet.nl/simplesamlphp/saml2/idp/metadata.php', 'surfnet2', true);

		header('Content-Type: image/png');
		echo $data['logo']->bin;
		exit;


	} else {

		throw new Exception('Invalid request');
	}


	$responseJSON = json_encode($response, JSON_PRETTY_PRINT);


	

	if(array_key_exists('callback', $_GET)){

	    header('Content-Type: text/javascript; charset=utf8');


	    $callback = $_GET['callback'];
	    echo $callback.'('.$responseJSON.');';

	}else{
	    // normal JSON string
	    header('Content-Type: application/json; charset=utf-8');
	    echo $responseJSON;
	}



	// echo $responseJSON;

	// $profiling = microtime(true);
	// $key = Utils::getPathString();
	$timer = round((microtime(true) - $profiling) * 1000.0);
	error_log("Time to run command:   ======> " . $timer . " ms");

	// UWAPLogger::stat('timing', $key, $timer);

// } catch(NotFound $e) {

// 	header("HTTP/1.0 404 Not Found");
// 	header('Content-Type: text/plain; charset: utf-8');
// 	echo "Error stack trace: \n";
// 	print_r($e);


} catch(Exception $e) {

	// TODO: Catch OAuth token expiration etc.! return correct error code.

	// header("HTTP/1.0 500 Internal Server Error");
	header('Content-Type: text/plain; charset: utf-8');
	echo "Error stack trace: \n";
	print_r($e);


}


