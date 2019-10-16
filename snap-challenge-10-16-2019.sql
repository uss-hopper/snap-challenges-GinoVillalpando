DROP IF EXISTS `like`;
DROP IF EXISTS tweet;
DROP IF EXISTS task;
DROP IF EXISTS profiletweet;

CREATE TABLE profileTweet (
	-- this creates the attribute for the primary key
	-- not null means the attribute is required!
	profileTweetId BINARY(16) NOT NULL,
	profileTweetActivationToken CHAR(32),
	profileTweetAtHandle VARCHAR(32) NOT NULL,
	profileTweetEmail VARCHAR(128) NOT NULL,
	-- to make something optional, exclude the not null
	profileTweetHash CHAR(97) NOT NULL,
	profileTweetPhone VARCHAR(32),
	-- to make sure duplicate data cannot exist, create a unique index
	UNIQUE(profileTweetAtHandle),
	UNIQUE(profileTweetEmail),
	-- this officiates the primary key for the entity
	PRIMARY KEY(profileTweetId)
);

create table task(
	taskId binary(20) not null,
	taskDueDate DATETIME (6),
	taskDescription varchar (256),
	taskPriority VARCHAR(64) not null,
	taskTitle varchar(255),
	taskStatus VARCHAR(64) not null ,
	taskStartDate DATETIME(6),
	unique(taskId),
	INDEX(taskTitle),
	primary key(taskId)
);

CREATE TABLE tweet(
	tweetId        BINARY(16)   NOT NULL,
	tweetProfileId BINARY(16)   NOT NULL,
	tweetContent   VARCHAR(140) NOT NULL,
	tweetDate      DATETIME(6)  NOT NULL,
	INDEX (tweetProfileId),
	FOREIGN KEY (tweetProfileId) REFERENCES profile(profileId),
	PRIMARY KEY (tweetId)
);

CREATE TABLE `like` (
	-- these are still foreign keys
	likeProfileId BINARY(16) NOT NULL,
	likeTweetId BINARY(16) NOT NULL,
	likeDate DATETIME(6) NOT NULL,
	-- index the foreign keys
	INDEX(likeProfileId),
	INDEX(likeTweetId),
	-- create the foreign key relations
	FOREIGN KEY(likeProfileId) REFERENCES profile(profileId),
	FOREIGN KEY(likeTweetId) REFERENCES tweet(tweetId),
	-- finally, create a composite foreign key with the two foreign keys
	PRIMARY KEY(likeProfileId, likeTweetId)
);

SELECT tweet.tweetContent, profileTweet.profileTweetAtHandle
FROM tweet
inner join 'like' on tweet.tweetId = 'like'.likeTweetId
inner join profileTweet on 'like'.likeprofileId = profileTweet.profileTweetId
WHERE tweet.tweetId = unhex('0536faef082b454e9d444cdbe7887d7a');