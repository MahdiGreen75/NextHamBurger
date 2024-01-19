"use client";
const ErrorPage = ({error}) => {
    return (
        <main className={"error"}>
            <h1>An Erorr Occured.</h1>
            <p>Failed to fetch meal data. Please try again later.</p>
        </main>
    );
};

export default ErrorPage;
