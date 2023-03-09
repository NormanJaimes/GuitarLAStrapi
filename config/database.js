module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfoedeg2i3mo4bsud2sg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_oiyv'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'jZAWxRlPAmUn3KxJcdNor4H3QrcVBB1m'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
