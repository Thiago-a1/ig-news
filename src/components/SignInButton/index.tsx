import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useSession, signIn, signOut } from 'next-auth/react';

import styles from './styles.module.scss';

export function SighInButton() {
  const { data } = useSession();

  console.log(data)

  return data ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color='#04d361' />
      Thiago Araujo
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color='#eba417' />
      Sing in with github
    </button>
  )
}