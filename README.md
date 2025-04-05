Grocery Store API

Admin Responsibilities

- Add grocery items
- View grocery list
- Update grocery item
- Delete grocery item
- Update inventory quantity

User Responsibilities

- View grocery items
- Place orders with multiple grocery items

---

API Endpoints

Admin (Base URL: /admin)
- POST /add → Add new grocery item
- GET /view → View all grocery items
- PUT /update/:id → Update grocery item
- DELETE /remove/:id → Delete grocery item
- PATCH /inventory/:id → Update inventory quantity

User (Base URL: /user)
- GET /groceries → View groceries
- POST /order → Place an order with multiple items

---

Running the App with Docker

1. Run Docker Compose:
   docker-compose up --build

2. Access API:
   http://localhost:3000

---

Testing in Postman

1. Add Grocery (Admin)
- Method: POST
- URL: http://localhost:3000/admin/add
- Body:
  {
    "name": "Banana",
    "price": 8.5,
    "quantity": 50
  }

2. View Groceries (User)
- Method: GET
- URL: http://localhost:3000/user/groceries

3. Place Order (User)
- Method: POST
- URL: http://localhost:3000/user/order
- Body:
  {
    "items": [
      { "grocery_id": 1, "quantity": 2 },
      { "grocery_id": 2, "quantity": 3 }
    ]
  }