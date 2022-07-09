CREATE DATABASE global_corporate_campus;

CREATE TABLE loc(
    site_id INT,
    geocity VARCHAR(25),
    geoaddr VARCHAR(50),
    geocountry VARCHAR(25),
    geopostalcode INT,
    geostate VARCHAR(25),
    PRIMARY KEY(site_id)
 );

CREATE TABLE equipment (
    equip_type VARCHAR(255),
    equip_ref int,
    equip_discrip VARCHAR(255),
    PRIMARY KEY(equip_type),
    FOREIGN KEY (equip_ref) REFERENCES loc (site_id)
);

CREATE TABLE equipment_points (
    sensor_type VARCHAR(255),
    sensor_ref VARCHAR(255),
    sensor_loc int,
    eng_unit VARCHAR(255),
    sensor_reading float,
    PRIMARY KEY(sensor_type),
    FOREIGN KEY(sensor_ref) REFERENCES equipment (equip_type),  
    FOREIGN KEY(sensor_loc) REFERENCES loc (site_id)
);

