export const dropToolSQL = "DROP TABLE  IF EXISTS tools";
export const insertToolSQL = "INSERT INTO tools (name,des,link,image) VALUES ?";

export const createToolTableSQL = `CREATE TABLE tools (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(240), 
    des VARCHAR(240), 
    link VARCHAR(240), 
    image VARCHAR(240)
)`;
