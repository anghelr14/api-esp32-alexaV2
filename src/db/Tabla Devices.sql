CREATE TABLE devices(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  description TEXT NOT NULL,
  response VARCHAR(45) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO devices (name, description, response) VALUES ('puerta entrada','puerta principal','puerta abierta'),
                                                         ('puerta salida','puerta de emergencias','puerta abierta'),
                                                         ('puerta casa','puerta de casa','puerta abierta'),
                                                         ('puerta trasera','puerta a patio','puerta abierta'),
                                                         ('encender microondas','encender microondas de cocina','encendiendo');