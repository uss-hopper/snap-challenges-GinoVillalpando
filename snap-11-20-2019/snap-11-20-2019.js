input: $origArray = [1, 1, 2, 2, 2, 2, 3]
echo(counts($origArray));


function counts ($array){

	$newArray = [];

	foreach( $array as $element){
		if (isset($newArray[$element])){
			$newArray[$element] = $newArray[$element] + 1;
		}else{
			$newArray[$element] = 1;
		};

		echo($element . " " . $newArray[$element] . PHP_EOL);
	};
	return $newArray;
};


output: 4 // x (or 2) occurs 4 times in arr

for ($origArray = % 3 or % 2 == 0, $newArray) do {
	if ($newArray % 2 == 0) then print "fizz";
	else if ($newArray is divisble by 3) then print "buzz" {
		else print arr;
	}
	else ($newArray is divisable by 3 && $newArray % 2 == 0) then print "baz"
};


output: results