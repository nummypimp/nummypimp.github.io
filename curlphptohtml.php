<?

function getimg($url) {         
   // $headers[] = 'Accept: image/gif, image/x-bitmap, image/jpeg, image/pjpeg';              
    $headers[] = 'Connection: Keep-Alive';         
    $headers[] = 'Content-Type:text/html; charset=UTF-8';         
    $user_agent = 'php';


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, $user_agent); //check here         
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
$result = curl_exec($ch) or die("Couldn't connect to $url.");
curl_close($ch);

echo $result;   
} 
$url ='https://nummypimp.github.io/';
getimg($url);
?>