import Link from "next/link";

const Header = () => {
    return (
        <>
            <img src="/logo.png" alt="A server surrounded by magic sparkles." />
            <h1>Welcome to this NextJS Course!</h1>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href={"/meals"}>Meals</Link></p>
            <p><Link href={"/meals/share"}>Share Meal</Link></p>
            <p><Link href={"/community"}>Community</Link></p>
        </>
    );
};

export default Header;