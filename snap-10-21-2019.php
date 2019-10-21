<?php




class profile {
	/**
	 * id for this profile; this is the primary key
	 * @var int $profileId
	 */
	private $profileId;

	/**
	 * profile name for this profile
	 * @var string $profileName
	 */
	private $profileName;

	/**
	 * constructor for this profile
	 * @param float $newProfileId id of this profile or null if a new profile
	 * @param string
	 */
	public function __construct(int $newProfileId, ?string $newProfileName) {
		try {
			$this->setProfileId($newProfileId);
			$this->setProfileName($newProfileName);
		} catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
			//determine what exception type was thrown
			$exceptionType = get_class($exception);
			throw (new $exceptionType($exception->getMessage(), 0, $exception));
		}
	}

	/**
	 * accessor method for profile id
	 */
		public function getProfileId(): int {
		return ($this->profileId);
	}

	/**
	 * mutator for profile id
	 */

	public function setProfileId(int $newProfileId): void {
		$newProfileId = filter_var($newProfileId, FILTER_VALIDATE_INT);
		if ($newProfileId === false) {
			throw (new UnexpectedValueException("profile id is not a valid integer"));
	}
		/**
		 * convert and store the profile Id
		 */
		$this->profileId = intval($newProfileId);
	}

	/**
	 * accessor method for profile Name
	 */

	public function getProfileName(): ?string {
		return ($this->profileName);
	}

	/**
	 * mutator method for profile Name
	 */

	public function setProfileName(?string $newProfileName): void {
		if($newProfileName === null) {
			$this->profileName = null;
			return;
		}
		$newProfileName = strtolower(trim($newProfileName));
		if(ctype_xdigit($newProfileName) === false) {
			throw (new \RangeException("This profile name is not valid."));
		}
		if(strlen($newProfileName) !== 32) {
			throw (new \RangeException("Profile Name must be at least 32 Characters."));
		}
		$this->profileName = $newProfileName;
	}
}

$gino = new profile (1234, "grievxus");
echo("Profile ID: ");
echo($gino -> getProfileId());
echo("Profile Name: ");
echo($gino -> setProfileName());