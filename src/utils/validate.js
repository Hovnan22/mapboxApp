export const isEmpty = (string) => {
    return !string.trim();
};

export const checkEmail = (email) => {
    console.log({ email })
    const emailRegEx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (isEmpty(email)) {
        return 'empty';
    }

    if (!emailRegEx.test(email.trim())) {
        return 'email incorect';
    }

    return null;
};
