
import * as app from './a';

const PORT = 4000;

app.listen({port: PORT}, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
