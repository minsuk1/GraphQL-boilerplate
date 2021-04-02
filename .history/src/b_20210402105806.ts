
import * as App from './a';

const PORT = 4000;

new App().app.listen({port: PORT}, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
