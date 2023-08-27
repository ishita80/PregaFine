import React from 'react'
import PageNavigator from './PageNavigator'
import BackToTopBtn from './BackToTopBtn'

export default function FirstTrimester() {
  return (
    <div>
      <PageNavigator w1='#week1To4' w2='#week5To8' w3='#week9To12' s1="1" e1="4" s2="5" e2="8" s3="9" e3="12" />

      <div className="fs-4 px-5 mx-5 w-75">
        <div id="whatToExpect" style={{ height: '55px' }}>

        </div>
        <p className="fw-semibold text-primary fs-2">What to Expect</p>
        <div className="fs-4 fw-medium"> Changes in Your Body</div>

        <div className="fs-5 my-2">
          <p>
            Pregnancy is different for every woman. Some women glow with good health during those first 3 months; others feel absolutely miserable. Here are some of the changes you might notice, what they mean, and which signs warrant a call to your doctor.</p>


          <p><span className="fw-bold">Bleeding: </span> About 25% of pregnant women have slight bleeding during their first trimester. Early in the pregnancy, light spotting may be a sign that the fertilized embryo has implanted in your uterus. But if you have severe bleeding, cramping, or sharp pain in your belly, call the doctor. These could be signs of a miscarriage or ectopic pregnancy (a pregnancy in which the embryo implants outside of the uterus). </p>

          <p><span className="fw-bold">Breast Tenderness: </span> Sore breasts are one of the earliest signs of pregnancy. They're triggered by hormonal changes, which are getting your milk ducts ready to feed your baby. Your breasts will probably be sore throughout the first trimester. Going up a bra size (or more) and wearing a support bra can make you feel more comfortable. You probably won’t go back to your regular bra size until after your baby is finished nursing. </p>

          <p><span className="fw-bold">Constipation: </span> During pregnancy, high levels of the hormone progesterone slow down the muscle contractions that normally move food through your system. Add to that the extra iron you're getting from your prenatal vitamin, and the result is uncomfortable constipation and gas that can keep you feeling bloated throughout your pregnancy. Eat more fiber and drink extra fluids to keep things moving more smoothly. Physical activity can also help. </p>

          <p><span className="fw-bold">Discharge: </span> It's normal to see a thin, milky white discharge (called leukorrhea) early in your pregnancy. You can wear a panty liner if it makes you feel more comfortable, but don't use a tampon because it could put germs into your vagina. If the discharge smells really bad, if it’s green or yellow, or if there's a lot of clear discharge, call the doctor. </p>

          <p><span className="fw-bold">Fatigue: </span> Your body is working hard to support a growing baby. That means you’ll get tired more easily than usual. Take naps or rest when you need to during the day. Make sure you're getting enough iron. Too little can lead to anemia, which can make you even more tired. </p>

          <p><span className="fw-bold">Food likes and Dislikes: </span> Although you may not want a bowl of mint chip ice cream topped with dill pickles, as the old stereotype goes, your tastes can change while you're pregnant. More than 60% of pregnant women have food cravings. More than half have foods they really don’t like. Giving in to cravings from time to time is OK, so long as you eat healthy, low-calorie foods most of the time. The exception is pica -- a craving for nonfoods like clay, dirt, and laundry starch, which can be dangerous for you and your baby. If you experience this kind of craving, report it to your doctor right away. </p>

          <p><span className="fw-bold">Mood Swings: </span> Increased fatigue and changing hormones can put you on an emotional roller coaster that takes you from joyous to miserable, or from hopeful to terrified in a matter of seconds. It's OK to cry, but if you feel overwhelmed, try to find an understanding ear. You can talk to your partner, a friend, a family member, or even a professional. </p>

          <p><span className="fw-bold">Morning Sickness: </span>  Nausea is one of the most common pregnancy symptoms. Up to 85% of pregnant women have it. It results from hormone changes in your body and it can last through the entire first trimester. For some pregnant women, nausea is mild. Others can't start their day without vomiting. Nausea is usually worse in the morning (hence the name, "morning sickness"). To calm your nausea, try eating small, bland, or high-protein snacks (crackers, meat, or cheese) and sipping water, clear fruit juice (apple juice), or ginger ale. You may want to even do this before you get out of bed. Avoid any foods that make you sick to your stomach. Nausea itself isn't anything to worry about, but if it’s severe or just won’t go away, it can affect the amount of nutrition your baby gets. Call your doctor if you can't stop throwing up or can't keep down any food. </p>

          <p><span className="fw-bold">Weight Gain: </span> Pregnancy is one of the few times in a woman's life when weight gain is considered a good thing, but don't overdo it. During the first trimester, you should gain about 3-6 pounds (your doctor may suggest you adjust your weight gain up or down if you started your pregnancy underweight or overweight). Although you're carrying an extra person, you really aren’t eating for two. You only need about an extra 150 calories a day during the first trimester. Get those calories the healthy way, by adding extra fruits and vegetables, milk, whole-grain bread, and lean meat to your diet. </p>

        </div>
        </div>

        <div className="fs-4 px-5 mx-5">
          <div id="whatToEat" style={{ height: '50px' }}>

          </div>
          <p className="fw-semibold text-primary fs-2">What to Eat</p>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://images.healthshots.com/healthshots/en/uploads/2022/03/13201300/protein-foods.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Proteins</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://cdn-blog.credihealth.com/wp-content/uploads/2018/03/Calcium-rich-food.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Calcium (1,000-1,300 mg)</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://static-bebeautiful-in.unileverservices.com/1200/900/Iron-rich-foods-for-healthy-skin-hair-and-nails_mobilehome.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Iron (Atleast 27mg)</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://stylesatlife.com/wp-content/uploads/2020/02/Best-Iodine-Rich-Foods-List-That-Fight-Iodine-Deficiency.jpg.webp" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Iodine (220 mcg)</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://blog-images-1.pharmeasy.in/2020/08/27184853/shutterstock_362885486-1-1140x760.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Vitamin C (80-85 mg)</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://vinmec-prod.s3.amazonaws.com/images/20201124_034302_516339_5-loai-thuc-pham-ne.max-1800x1800.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Folate (Atleast 600 mcg)</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://www.healthifyme.com/blog/wp-content/uploads/2018/07/vitamin-a-feature.jpeg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Vitamin A (80-85 mg)</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="fs-4 px-5 mx-5">
          <div id="pregnancyExercises" style={{ height: '50px' }}>

          </div>
          <p className="fw-semibold text-primary fs-2">Pregnancy Exercises</p>

          <div className="container text-center">
            <div className="row">
              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://www.invitra.com/en/wp-content/uploads/2014/07/Definition-of-Kegel-exercises.png" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <a  href="https://www.youtube.com/watch?v=Wjb20SXIvA4" className="card-text fs-5">Kegels</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://img.freepik.com/premium-vector/pregnant-woman-walking-active-well-fitted-pregnant-female-character-happy-pregnancy-yoga-sport-pregnant-flat-cartoon-illustration_176448-8.jpg?w=2000" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Walking and jogging</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://img.freepik.com/premium-vector/synchronized-swimming-water-aerobics_369750-937.jpg?w=2000" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=MbD8BWCYIis" className="card-text fs-5">Swimming and water aerobics</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://i.pinimg.com/originals/b6/0b/0d/b60b0dc599ee9d1f20e5d34c8cd7fc38.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=3VHnnpBJVsk" className="card-text fs-5">Yoga</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://img.freepik.com/free-vector/girl-doing-yoga-cartoon-character_1308-118198.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=RxdbTOkjPBM" className="card-text fs-5">Pilates</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://thumbs.dreamstime.com/b/push-ups-dumbbells-flat-color-vector-illustration-push-ups-dumbbells-flat-color-vector-illustration-female-athlete-188393708.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=-cU60AvAws8" className="card-text fs-5">Low Intensity Weight Training</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 my-4">
                <div className="card" style={{ height: '47vh' }}>
                  <img style={{ height: '37vh' }} src="https://media.istockphoto.com/id/1306337113/vector/young-african-american-woman-on-exercise-bike.jpg?s=612x612&w=0&k=20&c=zWjgsILDrpuDbFRAH5-K6H4kMW4R4ZcUhQ2kbUhBqU8=" className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text fs-5">Spin cycling/Stationary Cycling</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>


        <div className="fs-4 px-5 mx-5 w-75">


        <div id="week1To4" style={{ height: '55px' }}>

        </div>
        <p className="fw-semibold text-primary fs-2">Week 1 to 4</p>
        <div className="fs-4 fw-medium"> Weeks 1 and 2</div>

        <div className="fs-5 my-2">

          <p><span className="fw-bold">Baby: </span> Your baby is still just a glimmer in your eye. It’s difficult to know exactly when conception occurred, so doctors calculate your due date from the beginning of your last menstrual cycle. That’s right -- for calculation purposes, you’re “pregnant” before you even conceive! </p>
          <p><span className="fw-bold">Mom-to-be: </span> The lining of your uterus thickens to prepare for pregnancy. You may notice sticky vaginal discharge during ovulation. At the beginning of your period, about 20 eggs called ova occupy fluid-filled sacs called follicles. If you typically have your period every 28 days, then about 14 days later, you ovulate: One of these follicles releases one or two eggs, which travel down your fallopian tube to await fertilization. This time -- 14 days after your period started and a day or so longer -- is when you're the most fertile. (Note that if you just stopped taking birth control, you may ovulate sooner than expected.) If you want to get pregnant, this is the best time to try. Once the egg is fertilized -- 24 to 72 hours after ovulation -- it moves into the uterus.</p>
          <p><span className="fw-bold">Tip of the Week: </span> Make sure you've scheduled a preconception visit with your OB-GYN to determine risks of genetic diseases and environmental hazards as well as learn about necessary lifestyle changes to ensure a healthy pregnancy and baby. Most important, make sure you've started taking 0.4 milligrams, or 400 micrograms, of folic acid a day. Folic acid taken a few months before conception has been shown to dramatically reduce such neural tube defects as spina bifida.</p>


        </div>

        <div className="fs-4 fw-medium"> Weeks 3</div>

        <div className="fs-5 my-2">

          <p><span className="fw-bold">Baby: </span> Congratulations! If your egg and your partner's sperm have joined successfully, your embryo is really there, although it's very small -- about the size of the head of a pin. It doesn't look like a fetus or baby; it's just a group of about 100 cells multiplying and growing rapidly. The outer layer of cells will become the placenta, and the inner layer will become the embryo. </p>

          <p><span className="fw-bold">Mom-to-be: </span> You won't notice any changes in your body at this point. Remember, you haven't even missed your period yet. But hormones are signaling your body to stop the menstruation process and support your pregnancy.</p>

          <p><span className="fw-bold">Tip of the Week: </span> Can't wait to find out? Take a home pregnancy test. They're about as reliable as a urine test or blood test done in the doctor's office -- and you get results immediately. To ensure accuracy, read the directions carefully and make sure all the supplies you use are clean.</p>

        </div>

        <div className="fs-4 fw-medium"> Weeks 4</div>

        <div className="fs-5 my-2">

          <p><span className="fw-bold">Baby: </span>Now that your egg is fertilized, it burrows into the lining of your uterus. This is called implantation. It may happen up to 4 days after fertilization. </p>

          <p><span className="fw-bold">Mom-to-be: </span> You're probably expecting your period this week, and if it doesn't occur, it might be one of the first signs that you're pregnant. You may also notice light spotting as the embryo implants itself in your uterus. The amniotic cavity, which will be filled with fluid, and the placenta, which will bring oxygen and nutrients to nourish your baby, are forming in your uterus. Your breasts might feel tender and swollen, or you might not feel any different yet. By the end of this week, a home pregnancy test may be positive.</p>

          <p><span className="fw-bold">Tip of the Week: </span>Try to eat healthfully, which means choosing a variety of foods from recommended food groups and drinking at least six to eight 8-ounce glasses of water a day. But you don't really need to "eat for two"; you only need an extra 300 calories per day while you're pregnant. And don't worry if your food intake drops in the beginning because of morning sickness. If you've been eating right already, your baby will get what it needs</p>
        </div>


        <div id="week5To8" style={{ height: '55px' }}>

        </div>
        <p className="fw-semibold text-primary fs-2">Week 5 to 8</p>
        <div className="fs-4 fw-medium"> Weeks 5</div>

        <div className="fs-5 my-2">

          <p><span className="fw-bold">Baby: </span> Your baby is still tiny, but its heart, brain, spinal cord, muscle, and bones are beginning to develop. The placenta, which nourishes your baby, and the amniotic sac, which provides a warm and safe environment where your baby can move easily, are still forming, too. The umbilical cord forms and connects your baby to your blood supply. Chromosomes already determine your baby's hair, eye color, and sex. </p>
          <p><span className="fw-bold">Mom-to-be: </span> You might suspect by now that you're pregnant. You may also notice some early symptoms of pregnancy:

            <ul>
              <li>Feeling nauseated (called morning sickness, although it can happen at any time of day or night)</li>
              <li>Tingling or soreness in your breasts and darkening of your nipples</li>
              <li>Needing to pee more often</li>
              <li>Feeling more tired than usual</li>
              <li>Feeling bloated</li>
            </ul></p>

          <p><span className="fw-bold">Tip of the Week: </span>You'll want to schedule a visit to your OB-GYN as soon as you suspect you're pregnant. Starting prenatal care early and keeping up with your appointments is a large step toward having a healthy pregnancy and a healthy baby.</p>


        </div>

        <div className="fs-4 fw-medium"> Weeks 6</div>

        <div className="fs-5 my-2">

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eligendi aspernatur voluptate, totam expedita esse amet autem alias quos hic vero omnis recusandae iste magni nihil. Repellat nisi velit ea?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem voluptatem, nihil perspiciatis quaerat porro, in laborum sed, quasi est facere ipsam rem dignissimos ex soluta mollitia rerum ipsum facilis.</p>
        </div>

        <div className="fs-4 fw-medium"> Weeks 7</div>

        <div className="fs-5 my-2">

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eligendi aspernatur voluptate, totam expedita esse amet autem alias quos hic vero omnis recusandae iste magni nihil. Repellat nisi velit ea?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem voluptatem, nihil perspiciatis quaerat porro, in laborum sed, quasi est facere ipsam rem dignissimos ex soluta mollitia rerum ipsum facilis.</p>
        </div>

        <div className="fs-4 fw-medium"> Weeks 8</div>

        <div className="fs-5 my-2">

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eligendi aspernatur voluptate, totam expedita esse amet autem alias quos hic vero omnis recusandae iste magni nihil. Repellat nisi velit ea?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem voluptatem, nihil perspiciatis quaerat porro, in laborum sed, quasi est facere ipsam rem dignissimos ex soluta mollitia rerum ipsum facilis.</p>
        </div>


        <div id="week9To12" style={{ height: '55px' }}>

        </div>
        <p className="fw-semibold text-primary fs-2">Week 9 to 12</p>
        <div className="fs-4 fw-medium"> Weeks 9</div>

        <div className="fs-5 my-2">

          <p><span className="fw-bold">Baby: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde, facilis vero excepturi consequatur quod non culpa sed, at voluptate facere. Facere expedita nulla ipsa sint neque inventore minus dolore. </p>
          <p><span className="fw-bold">Mom-to-be: </span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut est veritatis ipsa expedita, deserunt et veniam voluptate molestias maiores, sint dolores sequi soluta aliquam. Ex totam porro reiciendis aliquid fuga!</p>

          <p><span className="fw-bold">Tip of the Week: </span>You'll want to schedule a visit to your OB-GYN as soon as you suspect you're pregnant. Starting prenatal care early and keeping up with your appointments is a large step toward having a healthy pregnancy and a healthy baby.</p>


        </div>

        <div className="fs-4 fw-medium"> Weeks 10</div>

        <div className="fs-5 my-2">

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eligendi aspernatur voluptate, totam expedita esse amet autem alias quos hic vero omnis recusandae iste magni nihil. Repellat nisi velit ea?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem voluptatem, nihil perspiciatis quaerat porro, in laborum sed, quasi est facere ipsam rem dignissimos ex soluta mollitia rerum ipsum facilis.</p>
        </div>

        <div className="fs-4 fw-medium"> Weeks 11</div>

        <div className="fs-5 my-2">

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eligendi aspernatur voluptate, totam expedita esse amet autem alias quos hic vero omnis recusandae iste magni nihil. Repellat nisi velit ea?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem voluptatem, nihil perspiciatis quaerat porro, in laborum sed, quasi est facere ipsam rem dignissimos ex soluta mollitia rerum ipsum facilis.</p>
        </div>

        <div className="fs-4 fw-medium"> Weeks 12</div>

        <div className="fs-5 my-2">

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eligendi aspernatur voluptate, totam expedita esse amet autem alias quos hic vero omnis recusandae iste magni nihil. Repellat nisi velit ea?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem voluptatem, nihil perspiciatis quaerat porro, in laborum sed, quasi est facere ipsam rem dignissimos ex soluta mollitia rerum ipsum facilis.</p>
        </div>

      </div>


      <div className="fs-4 px-5 mx-5 w-75">
        <div id="dosAndDonts" style={{ height: '50px' }}>

        </div>
        <p className="fw-semibold text-primary fs-2">Pregnancy Do's And Dont's</p>
        <div className="fs-4 fw-medium"> Do: see your doctor </div>

        <div className="fs-5 my-2">
          <p>Your body goes through some significant changes over the course of pregnancy. Your body is your baby's first home, so it's important that you take good care of yourself.</p>
          <p>When you get a positive pregnancy test, call your doctor to schedule your first prenatal visit. If your doctor is not an OB/GYN, they will likely refer you to one. </p>
        </div>

        <div className="fs-4 fw-medium"> Do: take prenatal vitamins </div>

        <div className="fs-5 my-2">
          <p>Prenatal vitamins are not the same as everyday multivitamins. When you are pregnant, your body has different needs as it grows and changes. Your growing baby needs certain vitamins to develop healthily, too.  </p>
          <p>Prenatal vitamins include important nutrients including all of the calcium, iron, zinc, and folate that you need. Folate is especially important because it helps prevent some common — but potentially very serious birth defects — like anencephaly and spina bifida. </p>
        </div>

        <div className="fs-4 fw-medium">Do: stay active</div>

        <div className="fs-5 my-2">
          <p>It’s a good idea to keep up the level of exercise you had before you were pregnant. There are lots of benefits in exercising through your first trimester of pregnancy — and beyond. These include:</p>

          <ul>
            <li>Decreased levels of stress</li>
            <li>More balanced moods and emotions</li>
            <li>Less fatigue and tiredness</li>
            <li>Less weight gain and lower risk of gestational diabetes</li>
            <li>Better sleep and minimized insomnia</li>
          </ul>
        </div>

        <div className="fs-4 fw-medium">Do: eat healthy foods </div>

        <div className="fs-5 my-2">
          <p>A healthy diet can provide you and your growing baby with a sound nutritional basis that your pregnancy vitamins can build on. Studies suggest that being exposed to many flavors via a mother's amniotic fluid can set a baby up to be a good eater into early childhood, too. </p>
        </div>

        <div className="fs-4 fw-medium">Do: stay hydrated</div>

        <div className="fs-5 my-2">
          <p>Hydration, while it’s important for non-pregnant people as well, is critical when you’re in the first trimester of pregnancy. Staying hydrated during these first weeks can help you prevent many unpleasant symptoms, including dizziness, kidney stones, constipation, headaches, and even preterm labor. </p>
          <p>How much water should you drink during the first trimester of pregnancy? Doctors recommend drinking between 8-12 cups of water each day.</p>
          <p>If you’re having a hard time getting that much plain water down, consider choices like sparkling water, juices, soups, herbal teas, and many kinds of fruit and vegetables. It’s important to avoid drinks with high levels of caffeine or lots of sugar. </p>

        </div>

        <div className="fs-4 fw-medium">get a flu shot</div>

        <div className="fs-5 my-2">
          <p>The CDC recommends that all pregnant people get a flu shot — not a nasal spray version of the vaccine. Influenza can be harmful to a developing baby and can have serious impacts on a mother's heart and lungs during pregnancy. Getting a flu shot is safe during pregnancy and is an easy way to protect yourself and your baby.</p>

        </div>

        <div className="fs-4 fw-medium">Do: get plenty of sleep</div>

        <div className="fs-5 my-2">
          <p>Though you may not see your belly growing just yet, your body is making major changes to develop the system to grow your baby. Many people feel particularly exhausted during the first trimester of pregnancy. It's important to get as much high-quality sleep at night as you can — aim for 8-9 hours. </p>
          <p>Setting aside time to nap or rest during the afternoon can be helpful, too.</p>

        </div>

        <div className="fs-4 fw-medium">Don't: drink alcohol</div>

        <div className="fs-5 my-2">
          <p>During these early weeks of your pregnancy, your baby is developing in many important ways, including a significant amount of brain growth. Alcohol can cause serious damage to a baby's brain as it begins to develop. Especially during the first trimester, there is no known amount of alcohol that is considered safe — experts recommend steering clear entirely to prevent Fetal Alcohol Syndrome.</p>
        </div>

        <div className="fs-4 fw-medium">Don't: smoke or use drugs</div>

        <div className="fs-5 my-2">
          <p>Smoking at any time during your pregnancy puts you at an elevated risk for miscarriage as well as puts your baby at an increased risk of birth defects, premature birth, low birth weight, infant death, and learning disabilities. Smoking after your baby is born is considered one of the most significant risk factors for Sudden Infant Death Syndrome (SIDS). </p>
          <p>Other controlled substances and drugs are equally dangerous. Even some kinds of prescription medications can cause serious harm to your baby during the first trimester. Experts recommend avoiding all opioids and street drugs during pregnancy. If you’re not certain about using a particular medication, check with your doctor or pharmacist to ensure that it is approved for safe use during pregnancy. </p>
        </div>

        <div className="fs-4 fw-medium">Don't: drink (too much) caffeine </div>

        <div className="fs-5 my-2">
          <p>While some pregnancy experts suggest cutting caffeine out of your diet entirely, many providers agree that small amounts are likely safe during the first trimester. Consuming caffeine, found in coffee, tea, chocolate, and energy drinks, has a diuretic effect, meaning it causes you to urinate more. This can lead to dehydration. Caffeine can also increase your heart rate and blood pressure, both of which can potentially be dangerous to you and your developing baby when you’re pregnant.</p>
          <p>Experts do agree that the less caffeine you consume, the safer you are. Aiming for a daily intake no greater than 150 mg (which is about one cup of brewed coffee or three cups of green or black tea) is considered to be reasonably safe.</p>
        </div>
      </div>

      <BackToTopBtn/>
    </div>
  )
}
