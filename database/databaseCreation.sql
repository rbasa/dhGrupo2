CREATE TABLE `java_cafe`.`users` 
  ( 
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    user_category_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_category_id) REFERENCES user_categories(id)
  )

CREATE TABLE `java_cafe`.`products`
  (
    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    product_category_id INT NOT NULL,
    image TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_category_id) REFERENCES product_categories(id)
  )

CREATE TABLE `java_cafe`.`product_categories`
  (
    id INT NOT NULL, 
    product_category VARCHAR(50) NOT NULL, 
    PRIMARY KEY (id)
  )

CREATE TABLE `java_cafe`.`user_categories`
  (
    id INT NOT NULL, 
    user_category VARCHAR(50) NOT NULL, 
    PRIMARY KEY (id)
  )

insert into users (id,  name,  email,  password,  user_category_id)
values
  (1, "rodrigo", "asd@asd.com", "$2a$10$NLIPWpoOrpj7Zu2CJPLGx.dXka4q4pxgKlMjGHVDaL4EkVS40NUYO", 2),
  (2, "rodri", "qwe@qwe.com", "$2a$10$8dx2aY0RgheGir7Xx5Q.o.zXTfPkSX39u.pBKqi7v8mwq.CFJ9RRS", 2),
  (3, "rodrigo", "momom@sad.com", "$2a$10$pH9nLsPYO77tDcai0JQjiuL0AHvS/Gig0RgmoE6GlJZLVHwY7PD.O", 2)

insert into products (id, name, description, price, product_category_id, image)
values
  (1, "Café Colombia", "Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.", 700, 1, "images/colombia.png"),
  (2, "Café Nicaragua", "Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.", 70, 1, "images/nicaragua.png"),
  (3, "Café Kenya", "Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.", 702, 1, "images/kenya.png"),
  (4, "Café Brasil", "Su sabor es potente y permanente en boca. Café intenso. Tonos de fruta tropical,  cuerpo y acidez media.", 777, 1, "images/brasil.png"),
  (5, "Remera negra", "talle único ", 900, 2, "images/remera_negra.png"),
  (6, "Remera blanca", "talle único - algodon", 900, 2, "images/shirt_logo.png"),
  (7, "Termo blanco", "vaso térmico-capacidad 500cc-acero inoxidable", 1500, 2, "images/termo_blanco_logo.png"),
  (8, "Termo naranja", "vaso térmico-capacidad 500cc-acero inoxidable", 1500, 2, "images/termo_naranja_logo.png"),
  (9, "Termo negro", "vaso térmico-capacidad 500cc-acero inoxidable", 1500, 2, "images/termo_negro_2_logo.png"),
  (10, "Termo metal", "vaso térmico-capacidad 500cc-acero inoxidable", 1500, 4, "images/termo_negro_logo.png"),
  (11, "Llavero JavaCafé", "Todas tus llaves en un solo lugar", 602, 2, "images/kenya.png"),
  (12, "Cafetera JavaCafé", "Cafetera automática para que disfrutes tu café ni bien te", 4900, 3, "images/brasil.png"),
  (13, "Cafetera espresso", "2L de capacidad,  metalica potencia de 850W", 12500, 3, "images/brasil.png"),
  (14, "Cafetera para capsulas", "tiene filtro permanente,  potencia de 1500W,  incluye bandeja recolectora", 22000, "cafeteras", "images/brasil.png"),
  (15, "Vaso termico de la marca", "Vaso de 500ml", 2000, 2, "images/brasil.png"),
  (16, "buzo de la marca ", "Disponibles en talles  L XL", 4900, 4, "images/brasil.png"),
  (17, "Gorra de la marca", "Talle unico ", 500, 4, "images/colombia.png"),
  (18, "Bandeja desayunadora", "Dimensiones: 20x30cm", 1000, 2, "images/brasil.png"),
  (19, "Calcomania", "Logo de la marca", 150, 2, "images/brasil.png"),
  (20, "espumador de cafe", "espumador", 750, 2, "images/brasil.png")

insert into user_categories (id, user_category)
values
  (1,"admin"),
  (2, "user")
  
insert into product_categories (id, product_category)
values
  (1,"Café"),
  (2,"Accesorios"),
  (3,"Cafetera"),
  (4, "Indumentaria")