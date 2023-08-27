import React from 'react'
import MythItem from './MythItem'
import BackToTopBtn from './BackToTopBtn';

export default function Myths() {

    const Myth_c = [
        {
            imgUrl: "https://thumbs.dreamstime.com/b/flu-shot-cartoon-vector-illustration-55195643.jpg",
            myth: "Skip the Flu Shot",
            mythContent: "The vaccine might give the baby flu. Preservatives in the vaccine may hurt the unborn baby.",
            fact: "Flu Shot is Very Important",
            factContent: "A flu shot can be a lifesaver for mother and baby. Pregnancy alters a woman's immune system, heart, and lungs, making them more vulnerable to getting a severe case of flu. Women who are pregnant and come down with the flu do not tolerate it well and have a much higher risk of becoming extremely sick than the general population."

        },
        {
            imgUrl: "https://st2.depositphotos.com/35763774/42610/v/600/depositphotos_426106364-stock-illustration-yoga-pregnant-women-set-active.jpg",
            myth: "It’s not safe to exercise while you’re pregnant",
            mythContent: 'Are you concerned that exercising will harm your unborn baby? This common myth says that once you get pregnant, you need to avoid activities like jogging, stretching, and more.',
            fact: "Doctor-approved exercise is helpful during pregnancy",
            factContent: "Low to moderate activity has an abundance of health benefits. From helping you manage pregnancy weight gain to contributing to a healthier labor and delivery, staying active is good for you and your baby."

        },
        {
            imgUrl: "https://images.indianexpress.com/2021/01/coffee1200_getty.jpg",
            myth: "You have to give up caffeine for nine months",
            mythContent: "Friends and family are often quick to point out all the foods and drinks that you need to avoid once you announce that you’re pregnant. But many people assume that caffeine is dangerous, too.",
            fact: "Pregnant women can enjoy caffeine in moderation",
            factContent: "Low amounts of caffeine don’t have a negative effect on growing fetuses. If you drink coffee or soda in moderation, it’s usually OK to continue enjoying those beverages while you’re pregnant. Just keep caffeine consumption to 12 ounces or under per day, which is about 1.5 cups of coffee."

        },
        {
            imgUrl: "https://images.healthshots.com/healthshots/en/uploads/2021/09/14172048/healthy-eating-during-pregnancy.jpg",
            myth: "Eat for two",
            mythContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea minima, excepturi deserunt inventore natus praesentium nemo libero id omnis soluta incidunt explicabo vitae animi. Omnis nobis rerum minima ullam.",
            fact: "Fact: Eat twice as healthy",
            factContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea minima, excepturi deserunt inventore natus praesentium nemo libero id omnis soluta incidunt explicabo vitae animi. Omnis nobis rerum minima ullam."

        },
        {
            imgUrl: "https://img.freepik.com/free-photo/seafood-plate-with-shrimps-mussels-lobsters-served-with-lemon_140725-8798.jpg?w=2000",
            myth: "You can eat any sea food",
            mythContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea minima, excepturi deserunt inventore natus praesentium nemo libero id omnis soluta incidunt explicabo vitae animi. Omnis nobis rerum minima ullam.",
            fact: "Uncooked seafood is not safe",
            factContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea minima, excepturi deserunt inventore natus praesentium nemo libero id omnis soluta incidunt explicabo vitae animi. Omnis nobis rerum minima ullam."

        },
        {
            imgUrl: "https://chelseyamernutrition.com/wp-content/uploads/2019/03/My-Prenatal-Supplement-Routine-1-797x1024.jpg",
            myth: "No need for supplements",
            mythContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea minima, excepturi deserunt inventore natus praesentium nemo libero id omnis soluta incidunt explicabo vitae animi. Omnis nobis rerum minima ullam.",
            fact: "Supplements are essential",
            factContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea minima, excepturi deserunt inventore natus praesentium nemo libero id omnis soluta incidunt explicabo vitae animi. Omnis nobis rerum minima ullam."

        }
    ];

    return (

        <div>
        <div className="container my-5 w-75 d-flex justify-content-around">
            <div>
                <img src="https://www.premisehealth.com/wp-content/uploads/2022/02/Blog_Illustrations_MythvsFact.png" className="img-fluid mx-auto d-block rounded-4" style={{ border: "#0a4498 solid 4px" }} alt="" />
                <div className="fs-4 py-3">
                    <p>If you’re like many moms-to-be, you’ll study pregnancy books and surf the Web for information. You’ll want to know how to keep your baby as healthy as possible. And, like others, you might fall prey to some myths.
                    </p>
                    <p>So let's separate fact from fiction.</p>
                </div>


                {Myth_c.map((element, index) => (
                    <MythItem
                        key={element.imgUrl} // Don't forget to add a unique key prop when rendering an array of components 
                        index={index + 1}
                        imgUrl={element.imgUrl}
                        myth={element.myth}
                        mythContent={element.mythContent}
                        fact={element.fact}
                        factContent={element.factContent}
                    />
                ))}

            </div>
           
        </div >
        <BackToTopBtn />
        </div>
    )
}
