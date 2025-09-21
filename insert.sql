-- Users
INSERT INTO Users VALUES 
('U001','Anu','anu123','anu@gmail.com','9876543210','Y','MG Road, Kochi','Kochi'),
('U002','Rahul','rahul456','rahul@gmail.com','9876501234','N','Round North, Thrissur','Thrissur');

-- Restaurants
INSERT INTO Restaurant VALUES
('R001','KFC','0484222333','Lulu Mall, Kochi','Kochi'),
('R002','Dominos','0487555111','Sakthan Arcade, Thrissur','Thrissur');

-- Categories
INSERT INTO Category VALUES
('C001','Burgers'),
('C002','Pizza');

-- Items
INSERT INTO Items VALUES
('I001','Zinger Burger',150,10,'C001','R001'),
('I002','French Fries',80,5,'C001','R001'),
('I003','Veg Pizza',200,15,'C002','R002');

-- Delivery Guys
INSERT INTO Delievery_Guy VALUES
('D001','Arjun','Kochi','9998887776','KL07AB1234'),
('D002','Sneha','Thrissur','9997776665','KL08CD5678');

-- Payments
INSERT INTO Payment VALUES
('P001',380.00,'UPI'),
('P002',200.00,'Card');

-- Orders
INSERT INTO Orders VALUES
('O001','Delivered','2025-09-15','Kochi','U001','P001','D001'),
('O002','Pending','2025-09-16','Thrissur','U002','P002','D002');

-- Ordered Items
INSERT INTO Ordered_item VALUES
('O001','I001',2),
('O001','I002',1),
('O002','I003',1);

-- Ratings
INSERT INTO Item_Ratings VALUES
('U001','I001',5),
('U002','I003',4);

INSERT INTO Restaurant_Ratings VALUES
('R001','U001',5),
('R002','U002',4);

-- Offers
INSERT INTO Offer VALUES
('OF001','Buy 1 Get 1 Free'),
('OF002','20% Off');

-- Have_offer
INSERT INTO Have_offer VALUES
('R001','OF001'),
('R002','OF002');
