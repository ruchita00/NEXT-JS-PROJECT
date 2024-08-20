//http://localhost:3000/api/users

export async function GET(request) {
  //handle GET request for /ap/users
  //retrieve users from the database or any source
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "jane" },
    { id: 3, name: "chiku" },
  ];

  return new Response(JSON.stringify(users));
}
