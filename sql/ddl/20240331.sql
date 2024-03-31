CREATE TABLE account
(
  row_id             BIGSERIAL   PRIMARY KEY,
  account_id         VARCHAR(20) NOT NULL,
  password           VARCHAR(20) NOT NULL,
  car_type           VARCHAR(1)  NOT NULL DEFAULT 'O',
  disabled_person    BOOLEAN     NOT NULL DEFAULT false,
  is_parking         BOOLEAN     NOT NULL DEFAULT false,
  reservation_park   VARCHAR(10),
  total_parking_time BIGINT,
  parkedAt           TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
  createdAt          TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt          TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE parking
(
  row_id      BIGSERIAL   PRIMARY KEY,
  parking_id  VARCHAR(10) NOT NULL,
  sensor_id   BIGINT      NOT NULL,
  parked_type VARCHAR(1)  NOT NULL DEFAULT 'O',
  is_parked   BOOLEAN     NOT NULL DEFAULT false,
  is_reserved BOOLEAN     NOT NULL DEFAULT false,
  createdAt   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE parking_log
(
  id              BIGSERIAL   PRIMARY KEY,
  account_id      VARCHAR(20) NOT NULL,
  parking_id      VARCHAR(10) NOT NULL,
  reserved_at     TIMESTAMP   NOT NULL,
  parked_start_at TIMESTAMP   NOT NULL,
  parked_end_at   TIMESTAMP   NOT NULL,
  createdAt       TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt       TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sensor
(
  row_id              BIGSERIAL   PRIMARY KEY,
  sensor_id           BIGINT      NOT NULL,
  upstreampower       BOOLEAN     NOT NULL DEFAULT false,
  air_quality         VARCHAR(20),
  air_quality_score   BIGINT,
  temperature_celsius FLOAT,
  temperature_quality VARCHAR(20),
  meta_data           JSON,
  createdAt           TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt           TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);