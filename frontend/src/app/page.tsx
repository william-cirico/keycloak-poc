"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const fetchProtectedData = async () => {
    const res = await fetch("http://localhost:3000/admin", {
      headers: {
        // @ts-expect-error
        Authorization: `Bearer ${session?.accessToken}`
      }
    });

    const data = await res.json();
    console.log(data);
  }

  if (session) {
    fetchProtectedData();
    return (
      <>
        Logado como {session.user?.name} <br/>
        <button onClick={() => signOut()}>Deslogar</button>
      </>
    );
  }

  return (
    <>
      <p>Usuário não autenticado.</p>
      <button onClick={() => signIn('keycloak')}>Login</button>
    </>
  );
}
