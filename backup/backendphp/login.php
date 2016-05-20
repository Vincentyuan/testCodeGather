<?php  
   /*
   * This Script is responsible for Checking User name and Password from Database and returning JSON response.
   * Collect all Details from Angular HTTP Request.
   */ 
   
   require './phplib/vendor/autoload.php';

	
	use \Firebase\JWT\JWT;

   
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$email = $request->email;
    @$pass = $request->pass;
	@$token = $request->token;
	
//	$receiveToken=(new Parser())->parse((string) $token);

/*

	$token = (new Builder())->setIssuer('http://example.com') // Configures the issuer (iss claim)
							->setAudience('http://example.org') // Configures the audience (aud claim)
							->setId('4f1g23a12aa', true) // Configures the id (jti claim), replicating as a header item
							->setIssuedAt(time()) // Configures the time that the token was issue (iat claim)
							->setNotBefore(time() + 60) // Configures the time that the token can be used (nbf claim)
							->setExpiration(time() + 3600) // Configures the expiration time of the token (nbf claim)
							->set('uid', 1) // Configures a new claim, called "uid"
							->getToken(); // Retrieves the generated token


	$token->getHeaders(); // Retrieves the token headers
	$token->getClaims(); // Retrieves the token claims
	
	
	*/
	
	
	
	$filename='test.txt';
	
	$filehandle=fopen($filename,"w");
	//fwrite($filehandle,($token));
	
	fwrite($filehandle,$_SERVER['REQUEST_METHOD']);
	
	fwrite($filehandle, "\n");
	fwrite($filehandle, $request->email);
	
	fclose($filehandle);
	

	
	
	
	

    $tokenId    = base64_encode(mcrypt_create_iv(32));
    $issuedAt   = time();
    $notBefore  = $issuedAt + 10;             //Adding 10 seconds
    $expire     = $notBefore + 60;            // Adding 60 seconds
    $serverName = "AFSFA"; // Retrieve the server name from config file
    
    /*
     * Create the token as an array
     */
    $data = [
        'iat'  => $issuedAt,         // Issued at: time when the token was generated
        'jti'  => $tokenId,          // Json Token Id: an unique identifier for the token
        'iss'  => $serverName,       // Issuer
        'nbf'  => $notBefore,        // Not before
        'exp'  => $expire,           // Expire
        'data' => [                  // Data related to the signer user
            'userId'   => "SADF", // userid from the users table
            'userName' => "SADFS", // User name
        ]
    ];

     /*
      * More code here...
      */

	
	
	
	
	    $secretKey ="123456";
    
    /*
     * Encode the array to a JWT string.
     * Second parameter is the key to encode the token.
     * 
     * The output string can be validated at http://jwt.io/
     */
    $jwt = JWT::encode(
        $data,      //Data to be encoded in the JWT
        $secretKey, // The signing key
        'HS512'     // Algorithm used to sign the token, see https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40#section-3
        );
        
    $unencodedArray = ['jwt' => $jwt];
    echo json_encode($unencodedArray);
	
	
	
	
	
	//echo json_encode($token);
	
	 // echo $email;
	
	//$data=["sds":"sds","sdfs"："sdddd"];
//	echo json_encode($data);
//	$array = array("name" => "Eric","age" => 23,"data"=>array("token"=>$token));
	
//	echo json_encode($array);
	

?>
