<?php


class MetaLoader {

	/**
	 * The list contains fetched metadata.
	 * @var [type]
	 */
	private $list;

	/**
	 * A list of URLs that is valid to respond to from an IdP Discovery Service based on processed metadata.
	 * @var array
	 */
	private $discoveryLocations = array();

	//Options
	protected $cachedir = null;


	function __construct($url, $feedId, $enableCacheOnly = false) {

		$this->cachedir = Config::get('cachedir');
		
		if (!is_dir($this->cachedir)) throw new Exception('Cache dir not present');
		if (!is_writable($this->cachedir)) throw new Exception('Cache dir not writable');
		
		$cachefile = $this->cachedir . $feedId;
		
		// echo 'Cache dir: ' . $cachefile;
		// exit;
		
		
		try {
			if (!$enableCacheOnly) {
				DiscoUtils::debug('Downloading metadata from ' . tc_colored($url, 'green') . " and storing cache at " . tc_colored($cachefile, 'green'));

				$data = @file_get_contents($url);
				if ($data === false) {
					throw new Exception('Error retrieving metadata from ' . $url);
				}
				file_put_contents($cachefile, $data);
			} else {
				DiscoUtils::debug('Looking up cached metadata from ' . tc_colored($cachefile, 'green'));
			}
		} catch (Exception $e) {
			error_log('Error updating metadata from source ' . $feedId . ' : ' . $e->getMessage());
		}

		if (!file_exists($cachefile)) {
			throw new Exception('Not able to continue processing this feed, because cannot read cached file');
		}
		
		DiscoUtils::debug('Metadata ready, starting to parse XML and validate document');

		$this->list = array();
		$entities = SimpleSAML_Metadata_SAMLParser::parseDescriptorsFile($cachefile);
		
		foreach($entities as $entityId => $entity) {
			$md = $entity->getMetadata1xIdP();
			if($md !== NULL) {
				$this->list[$entityId] = $md;
			}
			$md = $entity->getMetadata20IdP();
			if($md !== NULL) {
				$this->list[$entityId] = $md;
			}			
			$this->processSPEntity($entity->getMetadata20SP());
		}
		
		if (count($this->list ) === 0) throw new Exception('No entities found at URL ' . $src);
	}

	/**
	 * We process service provider entries in metadata in order to obtin an access control list, 
	 * for responseURLs for IdP discovery services.
	 * @param  [type] $md [description]
	 * @return [type]     [description]
	 */
	function processSPEntity($md) {
		if (empty($md)) return;
		if (!empty($md['discoresponse'])) {
			$this->discoveryLocations = array_merge($this->discoveryLocations, $md['discoresponse']);
		}
	}
	function getDiscoveryLocations() {
		return $this->discoveryLocations;
	}
	function getList() {
		return $this->list;
	}

}
