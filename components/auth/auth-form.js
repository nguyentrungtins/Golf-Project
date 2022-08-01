import { useState, useRef, useEffect } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import React from 'react';

import classes from './auth-form.module.scss';
import classnames from 'classnames';

function AuthForm() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState(true);

    const router = useRouter();

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    async function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        // console.log(enteredEmail);
        // optional: Add validation

        if (isLogin) {
            const result = await signIn('credentials', {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword,
            });

            if (!result.error) {
                // set some auth state
                router.replace('/admin');
            }
        } else {
            try {
                const result = await createUser(enteredEmail, enteredPassword);
            } catch (error) {
                setIsError(error);
            }
        }
    }

    return (
        <section className={classes.auth}>
            {/* -------------- */}
            <div className={classes.body__login}>
                <div className={classes.card}>
                    <form onSubmit={submitHandler}>
                        <h2 className={classes.title}> Log in</h2>
                        <p className={classes.subtitle}>
                            Đăng nhập để sử dụng chức năng admin
                        </p>
                        <div>
                            <div className={classes.input__login}>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className={classes.input}
                                    name="email"
                                    ref={emailInputRef}
                                />
                                <label
                                    className={classes.input__valid_label}
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        <div>
                            <div className={classes.input__login}>
                                <input
                                    type="password"
                                    id="password"
                                    required
                                    className={classes.input}
                                    name="password"
                                    ref={passwordInputRef}
                                />
                                <label
                                    className={classes.input__valid_label}
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </div>
                        </div>
                        {isError && <p className={classes.error}>{message}</p>}

                        <button type="submit" className={classes.cta__btn}>
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AuthForm;
