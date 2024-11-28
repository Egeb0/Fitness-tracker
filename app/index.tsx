import prisma from "../lib/prisma"; // Ensure the path to prisma.ts is correct

export async function getServerSideProps() {
  // Fetch all users from the database
  const users = await prisma.user.findMany();

  return {
    props: {
      users,
    },
  };
}

export default function Users({ users }: { users: any[] }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
