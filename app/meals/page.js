import Link from 'next/link';
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from "@/lib/meals";
import { Suspense } from 'react';

// ডাটা ফেচ যেখানে হবে তাকে শুধু ঐ কম্পোনেন্ট এর ভিতরে রাখা হলো।
async function MealLoader() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}

const Meals = async () => {
    // console.log(meals);
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favourate receipe and cook it yourself. It is easy and fun.</p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>
                        Share your favourate receipe.
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                {/* Separate Component */}
                <Suspense fallback={
                    <p className={classes.loading}>
                        Featching meals...
                    </p>
                }>
                    <MealLoader />
                </Suspense>
            </main>
        </>
    );
};

export default Meals;