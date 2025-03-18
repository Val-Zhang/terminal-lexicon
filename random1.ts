type UUID = string;

interface User {
  id: UUID;
  name: string;
  email: string;
  createdAt: Date;
}

interface Order {
  id: UUID;
  userId: UUID;
  amount: number;
  createdAt: Date;
}

const users: User[] = [];
const orders: Order[] = [];

function generateUUID(): UUID {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function createUser(name: string, email: string): User {
  const user: User = {
    id: generateUUID(),
    name,
    email,
    createdAt: new Date(),
  };
  users.push(user);
  return user;
}

function createOrder(userId: UUID, amount: number): Order {
  const order: Order = {
    id: generateUUID(),
    userId,
    amount,
    createdAt: new Date(),
  };
  orders.push(order);
  return order;
}

function getUserOrders(userId: UUID): Order[] {
  return orders.filter((order) => order.userId === userId);
}

function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

function deleteUser(userId: UUID): boolean {
  const index = users.findIndex((user) => user.id === userId);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

function deleteOrder(orderId: UUID): boolean {
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) return false;
  orders.splice(index, 1);
  return true;
}

// 泛型工具函数
function delay<T>(ms: number, result: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms));
}

async function simulateBusinessLogic() {
  const user1 = createUser("Alice", "alice@example.com");
  const user2 = createUser("Bob", "bob@example.com");

  console.log("Created Users:", users);

  await delay(500, null);

  const order1 = createOrder(user1.id, 99.99);
  const order2 = createOrder(user2.id, 49.49);

  console.log("Created Orders:", orders);

  await delay(500, null);

  console.log("Orders for Alice:", getUserOrders(user1.id));
  console.log("Orders for Bob:", getUserOrders(user2.id));
}

simulateBusinessLogic();
