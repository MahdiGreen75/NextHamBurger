import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

const MealsShare = ({ params }) => {
    const meal = getMeal(params.slug);

    // যদি এমন কোন ডিটেইলস পেজ এ ইউজার ভিজিট করে যেটা exist করে না। 
    // তাহলে not-found.js পেজ কে কম্পনেন্ট এর ভিতর থেকে কল করা যায়।
    if(!meal) {
        notFound(); // It will proceed to the closest not-found.js or error.js page.
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br>');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image
                        alt={meal.title}
                        src={meal.image}
                        fill
                    />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    );
};

export default MealsShare;