import prisma from "../lib/prisma";

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return { props: { users } };
}

export default function UsersPage({ users }: { users: any[] }) {
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
