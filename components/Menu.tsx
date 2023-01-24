import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const now = router.pathname;
  console.log(router);

  const paths = [
    { href: "/", component: "Home" },
    { href: "/test", component: "Test" },
    { href: "/record", component: "Record" },
    { href: "/mypage", component: "MyPage" },
  ];

  return (
    <div className={styles.menu}>
      {paths.map(path => {
        return (
          <Link key={path.component} href={path.href} style={{ textDecoration: "none", color: now === path.href ? "red" : "inherit" }}>
            <p className={styles.menus}>{path.component}</p>
          </Link>
        );
      })}
    </div>
  );
}
