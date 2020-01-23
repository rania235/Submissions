<?php

/**
 * Created by PhpStorm.
 * User: gabykaram
 * Date: 2020-01-15
 * Time: 18:09
 * File: index.php
 */
class DB_alternative {
	public $tables = [];
	
	public function __construct( Array $tables ) {
		if ( $handle = opendir( __DIR__ . '/data' ) ) {
			
			while ( false !== ( $entry = readdir( $handle ) ) ) {
				
				if ( $entry != "." && $entry != ".." ) {
					if ( is_file( __DIR__ . '/data/' . $entry ) ) {
						$file_parts = pathinfo( $entry );
						if ( $file_parts['extension'] === 'data' ) {
							if ( ! in_array( $file_parts['filename'], $this->tables ) ) {
								$data = $this->getData( $file_parts['filename'] );
								if ( count( $data ) > 0 ) {
									$structure                               = array_keys( $data[0] );
									$this->tables[ $file_parts['filename'] ] = $structure;
									
								}
							}
						}
					}
					
				}
			}
			
			closedir( $handle );
			
		}
		foreach ( $tables as $key => $table ) {
			if ( ! in_array( $key, $this->tables ) ) {
				$this->storeData( $table, [] );
				$this->tables[ $key ] = $table;
				
			}
			
		}
		
	}
	
	public function storeData( $key, $data ) {
		file_put_contents( __DIR__ . '/data/' . $key . '.data', serialize( $data ) );
	}
	
	public function getData( $key ) {
		if ( file_exists( __DIR__ . '/data/' . $key . '.data' ) ) {
			return unserialize( file_get_contents( __DIR__ . '/data/' . $key . '.data' ) );
			
		}
		
		return array();
	}
}
