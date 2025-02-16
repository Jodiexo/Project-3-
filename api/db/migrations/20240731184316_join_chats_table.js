/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('chats_join', function (table) {
    table
      .uuid('chat_id')
      .references('chat_id')
      .inTable('chats')
      .onDelete('CASCADE');
    table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.primary(['chat_id', 'user_id']);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('chats_join');
};//       updated_at: new Date(),
//     },
//     {
//       chat_id: group_chats[1].groupchat_id,
//       user_id: users[2].id,
//       created_at: new Date(),
//       updated_at: new Date(),
//     },
//   ]);
// };
