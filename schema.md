CREATE TABLE `advertisementoptions` (
  `optionId` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) NOT NULL,
  `audienceCount` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  PRIMARY KEY (`optionId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4