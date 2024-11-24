"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, UserRound } from "lucide-react";

import { Button } from "@/ui";

import { menuList, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "@/shared";

import styles from "./Header.module.scss";

const Header = () => {
    const isAuth = false;

    const router = useRouter();

    const goSignIn = () => {
        router.push(SIGN_IN_ROUTE);
    };

    const goSignUp = () => {
        router.push(SIGN_UP_ROUTE);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <Link href="/" className={styles.header__logo}>
                        Clothes Shop
                    </Link>
                    <nav className={styles.header__menu}>
                        <ul className={styles.header__list}>
                            {menuList && menuList.length > 0
                                ? menuList.map((item, index) => (
                                      <li
                                          key={index}
                                          className={styles.header__list_item}
                                      >
                                          <Link
                                              href={item.href}
                                              className={
                                                  styles.header__item_link
                                              }
                                          >
                                              {item.title}
                                          </Link>
                                      </li>
                                  ))
                                : null}
                        </ul>
                    </nav>
                    <div className={styles.header__row}>
                        {isAuth ? (
                            <>
                                <button className={styles.header__btn}>
                                    <Heart size={16} />
                                </button>
                                <button className={styles.header__btn}>
                                    <ShoppingBag size={16} />
                                </button>
                                <button className={styles.header__btn}>
                                    <UserRound size={16} />
                                </button>
                            </>
                        ) : (
                            <>
                                <Button size="sm" onClick={goSignIn}>
                                    Sign In
                                </Button>
                                <Button size="sm" onClick={goSignUp}>
                                    Sign Up
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
