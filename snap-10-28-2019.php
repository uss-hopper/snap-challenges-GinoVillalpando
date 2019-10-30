<?php

public static function getTweetByTweetDate(\PDO $pdo, DateTime $tweetDate) : \SplFixedArray {

	$startDateString = $tweetDate->format('Y-m-d') . '00:00:00';
	$startDate = new DateTime($startDateString);
	$endDate = new DateTime($startDateString);
	$endDate->add(new DateInterval('P1D'));

	// my first answer
	$tweetDate = trim($tweetDate);
	$tweetDate = self::validateDateTime($tweetDate);
	if($tweetDate === null) {
		$this->tweetDate = new \DateTime();
		return;
	}

	// create query template
	$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetDate >= :startDate AND tweetDate < :endDate";
	$statement = $pdo->prepare($query);

	//bind the tweet date to the place holder in the template
	$parameters = [
		"startDate" => $startDate->format("Y-m-d H:i:s.u"),
		"endDate" => $endDate->format("Y-m-d H:i:s.u")];
	$statement->execute($parameters);

	//build an array of tweets
	$tweets = new \SplFixedArray($statement->rowCount());
	$statement->setFetchMode(\PDO::FETCH_ASSOC);
	while(($row = $statement->fetch()) !== false) {
		try {
			$tweet = new tweet($row["tweetId"], $row["tweetProfileId"], $row["tweetContent"], $row["tweetDate"]);
			$tweets[$tweets->key()] = $tweet;
			$tweets->next();
		} catch(\Exception $exception) {
			//if the row couldn't be converted, rethrow it
			throw(new \PDOException($exception->getMessage(), 0, $exception));
		}
	}
	return($tweets);
}
