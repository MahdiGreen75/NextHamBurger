/*
    এখানে কোন ক্লাইন্ট ফিচার ইমপ্লিমেন্ট করা হলে 
    "use client" ইউজ করতে হবে। কিন্তু যেহেতু 
    server actions ইউজ করেছি। তাই, একই সাথে 
    "use client" ইউজ করা যাবে না।

    তাই, সার্ভার অ্যাকশন কে সেপারেট ফাইলে রেখে
    "use client" ইউজ করা যাবে।
*/ 
"use client";


import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';

export default function ShareMealPage() {

    // এখানে সার্ভার অ্যাকশন ফাংশন ছিল যেটাকে 
    // একটা আলাদা ফোল্ডারে রাখা হয়েছে।
    
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                {/* traditional: 
                    handling form submission -> 
                    manually collecting the data -> 
                    sending it to the server.

                    কি করা উচিতঃ
                    এখানে ব্রাউজার ডিফল্ট (ডেটা হ্যান্ডেলার এর মাধ্যমে গেট করা) কে 
                    প্রিভেন্ট করে ডাইরেক সার্ভারে পাঠাবো।

                    next.js:
                    কিন্ত আমি অলরেডি সার্ভার কম্পোনেন্টেই আছি। 
                    তাই সার্ভার অ্যাকশন ইউজ করতে পারি। যেটা গ্যারান্টিড যে শুধুমাত্র 
                    সার্ভারেই এক্সিকিউট হবে।

                */}
                <form className={classes.form} action={shareMeal}>
                    {/* 
                        e.preventDefault() করা লাগে নাই, অটোমেটীক সেটা ক্লোস হয়ে গেসে।
                     */}
                    {/* 
                        normally inside action attribute we include an url. 
                        but in this case, we're writting here a server action function.
                    */}
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label={"Your image"} name={"image"} />
                    <p className={classes.actions}>
                        <button type="submit">Share Meal</button>
                    </p>
                </form>
            </main>
        </>
    );
}