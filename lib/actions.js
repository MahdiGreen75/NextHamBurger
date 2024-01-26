"use server";

export async function shareMeal(formData) {
    // "use server";

    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        // image should store on a file system or cloud
        // then, the path or location of the image should
        // store in the project's database
        image: formData.get("image"),
        creator: formData.get("creator"),
        creator_email: formData.get("email")
    }

    // test
    console.log(meal);
}
