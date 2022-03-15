const pool = require('../utils/pool');
module.exports = class Order {
  id;
  product;
  quantity;

  constructor(row) {
    this.id = row.id;
    this.product = row.product;
    this.quantity = row.quantity;
  }

  static async insert({ product, quantity }) {
    try {
      const { rows } = await pool.query(
        'INSERT INTO orders(product, quantity) VALUES ($1, $2) RETURNING *',
        [product, quantity]
      );

      return new Order(rows[0]);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  static async getAll() {
    // TODO: Implement me
  }

  static async getById(id) {
    try {
      const { rows } = await pool.query('SELECT * FROM orders WHERE id=$1', [
        id,
      ]);

      if (!rows[0]) return null;

      return new Order(rows[0]);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  static async updateById(id, { product, quantity }) {
    // TODO: Implement me
  }

  static async deleteById(id) {
    // TODO: Implement me
  }
};
