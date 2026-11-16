export const getSession = () => {
    const session = localStorage.getItem("triixDemoSession");

    return session ? JSON.parse(session) : null;
};

export const isAuthenticated = () => {
    const session = getSession();

    return session?.loggedIn === true;
};

export const loginDemo = (email) => {
    const session = {
        email,
        loggedIn: true,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem(
        "triixDemoSession",
        JSON.stringify(session)
    );

    window.dispatchEvent(new Event("authChanged"));
};

export const logoutDemo = () => {
    localStorage.removeItem("triixDemoSession");

    window.dispatchEvent(new Event("authChanged"));
};