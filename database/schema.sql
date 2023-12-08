-- // ---- Base Tables ----
CREATE TABLE `miechallenge`.`games` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `thumbnail` LONGTEXT NULL,
  `max_players` INT NULL,
  `min_players` INT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

--SPLIT_SCRIPT--
CREATE TABLE `miechallenge`.`game_sessions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fk_game_id` INT NOT NULL,
  `start_time` TIMESTAMP NULL,
  `end_time` TIMESTAMP NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  INDEX `fk_game_id_idx` (`fk_game_id` ASC) VISIBLE,
  CONSTRAINT `fk_game_id` FOREIGN KEY (`fk_game_id`) REFERENCES `miechallenge`.`games` (`id`)
);