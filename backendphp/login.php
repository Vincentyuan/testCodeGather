<?php  
   /*
   * This Script is responsible for Checking User name and Password from Database and returning JSON response.
   * Collect all Details from Angular HTTP Request.
   */ 
   
   require './phplib/vendor/autoload.php';



	
	use \Firebase\JWT\JWT;

 //   $httpdata=file_get_contents("php://");
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








        use Zend\Config\Config;
        use Zend\Config\Factory;
        use Zend\Http\PhpEnvironment\Request;

        /*
         * Get all headers from the HTTP request
         */


        if ($_SERVER['REQUEST_METHOD'] ===  "GET") {



            foreach ( apache_request_headers() as $name => $value) {

                fwrite($filehandle, "$name: $value\n");
            }

            $requestData = new Request();

          //  fwrite($filehandle,$requestData);

          $authHeader = $requestData->getHeader('Authorization');
         // $authHeader = apache_request_headers()['Authorization'];

          //  fwrite($filehandle,"auuthorzation head : "+$authHeader->tostring() );
            fwrite($filehandle,"\n");
          //  fwrite($filehandle,$authHeader);

            /*
             * Look for the 'authorization' header
             */
            if ($authHeader) {
                /*
                 * Extract the jwt from the Bearer
                 */
                list($jwt) = sscanf( $authHeader->toString(), 'Authorization: Bearer %s');

                if ($jwt) {
                  //  try {
                      //  $config = Factory::fromFile('config/config.php', true);

                        /*
                         * decode the jwt using the key from config
                         */
                    //    $secretKey = base64_decode($config->get('jwtKey'));
                        $secretKey ="123456";

                        $token = JWT::decode($jwt, $secretKey, array('HS512'));

                    fwrite($filehandle,"jwt decode : ");
                      fwrite($filehandle,@$jwt);

                    fwrite($filehandle,"\n");

                 fwrite($filehandle,"token decode : ");

                    fwrite($filehandle,$token->data->userId);



                    foreach($token as $key => $value) {
                        fwrite($filehandle,$key);
                        foreach($value as $tmp=>$tempValue)
                        fwrite($filehandle,"$tmp=>$tempValue\n");

                        fwrite($filehandle,"\n");
                     //   print "$key => $value\n";
                    }


                        $asset = base64_encode(file_get_contents('http://lorempixel.com/200/300/cats/'));

                        /*
                         * return protected asset
                         */
                        header('Content-type: application/json');
                        echo json_encode([
                            'img'    => $asset
                        ]);

                   /* } catch (Exception $e) {
                        /*
                         * the token was not able to be decoded.
                         * this is likely because the signature was not able to be verified (tampered token)
                         */
                //        header('HTTP/1.0 401 Unauthorized');
                 //   }
                } else {
                    /*
                     * No token was able to be extracted from the authorization header
                     */
                    header('HTTP/1.0 400 Bad Request');
                }
            } else {
                /*
                 * The request lacks the authorization token
                 */
                header('HTTP/1.0 400 Bad Request');
                echo 'Token not found in request';
            }
        } else {
       //     header('HTTP/1.0 405 Method Not Allowed');



            fwrite($filehandle, "\n");
            fwrite($filehandle, $request->email);

            fwrite($filehandle, "\n");

            fwrite($filehandle,$postdata);

            fwrite($filehandle, "\n");

        //    fwrite($filehandle,$httpdata);



            $tokenId    = base64_encode(mcrypt_create_iv(32));
            $issuedAt   = time();
            $notBefore  = $issuedAt + 10;             //Adding 10 seconds
            $expire     = $notBefore + 3660;            // Adding 60 seconds
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
        }





fclose($filehandle);
	
	
	
	//echo json_encode($token);
	
	 // echo $email;
	
	//$data=["sds":"sds","sdfs"："sdddd"];
//	echo json_encode($data);
//	$array = array("name" => "Eric","age" => 23,"data"=>array("token"=>$token));
	
//	echo json_encode($array);
	

?>
