import React from 'react'
import BackToTopBtn from './BackToTopBtn'

//Refer to site Health and Baby
export default function Home() {
    return (
        <div className=''>
            <div className='my-3 d-flex justify-content-around'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ width: '60%' }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img style={{height: "35vw"}} src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/30/17/early-pregnancy-main.jpg?width=1200&height=900&fit=crop" className="d-block w-100 border border-1 rounded-5" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img style={{height: "35vw"}} src="https://www.parents.com/thmb/vWIiiKyTnEQ5O33E4lTRxwxLwDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1310443783-2000-3fe0eb1818e84997915c83fc14e58777.jpg" className="d-block w-100 border border-1 rounded-5" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img style={{height: "35vw"}} src="https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/02/web3-family-pregnant-woman-love-couple-shutterstock_129855953-iryna-tiumentseva-ai.jpg?w=620&h=348&crop=1" className="d-block w-100 border border-1 rounded-5" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="my-5" style={{ width: '20%' }}>
                    <h3 className="fs-4 fw-semibold font-monospace text-uppercase text-decoration-underline">In this article</h3>
                    <div className='lead'>
                    <a className="fs-5" href="#prePregnancyChecklist">- Pre-Pregnancy Checklist</a>
                    <br></br>
                    <a className="fs-5" href="#prenatalVitamins">- Prenatal Vitamins</a>
                    <br></br>
                    <a className="fs-5" href="#pregnancyTests">- Pregnancy Tests</a>
                    <br></br>
                    <a className="fs-5" href="#earlyPregnancySymptoms">- Early Pregnancy Symptoms</a>
                    </div>
                </div>
            </div>

            <div className="container my-5 w-75 p-3">
                <div>
                    <h1 className="my-3 text-primary">Getting Started</h1>
                    <p className="fs-5">When the pregnancy test comes back positive, you've begun a life-altering journey. As the baby grows and changes through each stage of pregnancy, you go through changes, too: in your body, emotions, and lifestyle. You need information to answer your questions and help you make good decisions for a healthy baby and a healthy you.
                    </p>
                </div>
                <div className="container my-4">
                    <div id="prePregnancyChecklist" style={{ height: '55px' }}>

                    </div>
                    <h2 className="fw-semibold text-primary" id="prePregnancyChecklist">Pre-Pregnancy Checklist</h2>
                    <div className="fs-4 fw-medium">1. Make an appointment with your doctor</div>
                    <div className="fs-5 my-2">
                        <p>True, you'll be seeing them plenty after you conceive, but it's a good idea to book a visit ahead of time, too, even if you've been pregnant before. If you have any health issues that could affect your chances of conceiving or that could make a pregnancy more risky, it's important to get those under control now.</p>

                        <p>Your doctor will want to start a prepregnancy checkup by getting a full medical history from both you and your partner. They may also want to run a number of tests -- such as blood tests and a Pap smear -- to make sure that neither of you have any medical conditions that could affect pregnancy or your chances of conceiving.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed, corrupti soluta non voluptatibus sint quo sit fuga molestiae quos a vero dolorum tenetur, accusamus eos consectetur praesentium? Harum, nam!</p>

                    </div>
                    <div className="fs-4 fw-medium">2. Quit Smoking and Drinking</div>
                    <div className="fs-5 my-2">
                        <p>You may already know that tobacco and alcohol during pregnancy are never OK. They're bad for a baby's growth and can cause health problems for them when they get older.</p>

                        <p>But even now, smoking and drinking can make it harder to get pregnant and raise your odds of a miscarriage. Talk to your doctor about programs that can help you quit these habits.</p>

                    </div>
                    <div className="fs-4 fw-medium">3. Cut back on Caffeine</div>
                    <div className="fs-5 my-2">
                        <p>Drinking more than two cups of coffee or five cans of soda a day (about 250 milligrams of caffeine) could make it harder for you to conceive and raise the chances that you'll miscarry.</p>

                        <p>Switching to decaf now has another advantage: You won't have to put up with caffeine cravings during those first few weeks of pregnancy.</p>

                    </div>
                    <div className="fs-4 fw-medium">4. Eat Smart</div>
                    <div className="fs-5 my-2">
                        <p>There's no better time to cut out junk food and all of its empty calories. Make sure you're getting plenty of fruits, veggies, whole grains, and lean protein every day.</p>

                        <p>A healthy diet before you conceive can make you less likely to get gestational diabetes, a type that affects pregnant women.</p>

                    </div>
                    <div className="fs-4 fw-medium">5. Take Folic Acid</div>
                    <div className="fs-5 my-2">
                        <p>Folic acid, found naturally in leafy green vegetables and artificially in fortified flour and rice products, has been shown to lower the risk of certain birth defects.</p>

                        <p>Experts recommend that in addition to a good diet, you should take a multivitamin with folic acid daily for 3 months before pregnancy and continue throughout your pregnancy. If you've had a previous pregnancy in which the fetus had birth defects of the brain and spinal cord, your doctor will probably recommend a higher dose of 4 mg of folic acid daily.</p>

                    </div>
                    <div className="fs-4 fw-medium">6. Hit the Gym</div>
                    <div className="fs-5 my-2">
                        <p>Not only will exercise help you get to a healthy weight, but it'll also get you into shape for labor and delivery. Once you're expecting, look for special prenatal classes that are safe for moms-to-be.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio minima facilis corporis! Animi deleniti, ab dolor aspernatur, possimus repellendus tenetur id accusamus, esse consequatur enim omnis? Ullam, nulla consequuntur.</p>

                    </div>
                    <div className="fs-4 fw-medium">7. Think about the meds you take.</div>
                    <div className="fs-5 my-2">
                        <p>It's important to let your doctor know about all the drugs you're taking -- prescription, over the counter, even vitamins and herbs. Some of them could affect your baby.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolore voluptas earum omnis natus eos blanditiis, fuga nesciunt. Quas error esse officiis pariatur aperiam dolores odio sint ad reiciendis!</p>

                    </div>

                    <div id="prenatalVitamins" style={{ height: '55px' }}>

                    </div>
                    <h2 className="fw-semibold text-primary">Prenatal Vitamins</h2>
                    <div className="fs-4 fw-medium">What Are Prenatal Vitamins?</div>
                    <div className="fs-5 my-2">
                        <p>Prenatal vitamins are supplements made for pregnant women to give their bodies the vitamins and minerals needed for a healthy pregnancy. Your doctor may suggest that you take them when you begin to plan for pregnancy, as well as while you’re pregnant.</p>

                        <p>Eating a healthy diet is always a wise idea -- especially during pregnancy. It's also a good idea to take a prenatal vitamin to help cover any nutritional gaps in your diet.</p>

                    </div>

                    <div className="fs-4 fw-medium">What to Look for in Prenatal Vitamins?</div>
                    <div className="fs-5 my-2">
                        <p>Prenatal vitamins help ensure that you get the nutrients you need for a healthy pregnancy.</p>

                        <p>Look for prenatal vitamins that have:</p>
                        <ul>
                            <li>400 micrograms (mcg) of folic acid</li>
                            <li>400 IU of vitamin D</li>
                            <li>200 to 300 milligrams (mg) of calcium</li>
                            <li>70 mg of vitamin C</li>
                            <li>3 mg of thiamine</li>
                            <li>2 mg of riboflavin</li>
                            <li>20 mg of niacin</li>
                            <li>6 mcg of vitamin B12</li>
                            <li>10 mg of vitamin E</li>
                            <li>15 mg of zinc</li>
                            <li>17 mg of iron</li>
                            <li>150 micrograms of iodine</li>
                        </ul>

                    </div>

                    <div className="fs-4 fw-medium">Folic acid</div>
                    <div className="fs-5 my-2">
                        <p>If getting pregnant is a possibility for you, you should take folic acid. It can prevent birth defects that affect the baby’s brain and spinal cord. Neural tube defects develop early in pregnancy, before many women know they’re pregnant; half of all pregnancies are unplanned. This is why doctors recommend that any woman who could get pregnant take 400 micrograms (mcg) of folic acid daily, starting before conception and continuing for the first 12 weeks of pregnancy..</p>

                        <p>If you’ve had a baby with a neural tube defect you should talk with your health care provider about folic acid. Studies have shown that taking a larger dose (up to 4,000 micrograms) at least one month before and during the first trimester may help if you’ve had a baby with this defect. But talk to your doctor about what’s right for you.</p>

                        <ul>
                            <li>Green Leafy Vegetables</li>
                            <li>Nuts</li>
                            <li>Beans</li>
                            <li>Citrus fruits</li>
                            <li>Many other foods fortified with folic acid</li>
                        </ul>
                        <p>Even though you can get folic acid from food, it's a good idea to take a supplement as a backup.</p>
                    </div>

                    <div className="fs-4 fw-medium">What About Other Nutrients?</div>
                    <div className="fs-5 my-2">
                        <p>There are other nutrients that may improve the health of your pregnancy. Your doctor can help you decide if you need to take supplements that include:</p>


                        <p><span className="fw-bold">Omega-3 fatty acids: </span>Eating a healthy diet is always a wise idea -- especially during pregnancy. It's also a good idea to take a prenatal vitamin to help cover any nutritional gaps in your diet.</p>
                        <p><span className="fw-bold">Chlorine:: </span>Although your body can make some choline on its own, you get most of it from food. Rich sources include beef, pork, chicken, fish, and eggs. Many pregnant women don’t get enough choline, which the baby needs for healthy brain growth.</p>

                    </div>

                    <div id="pregnancyTests" style={{ height: '55px' }}>

                    </div>
                    <h2 className="fw-semibold text-primary">Pregnancy Tests</h2>
                    <div className="fs-4 fw-medium">What is a pregnancy test, and how does it work?</div>
                    <div className="fs-5 my-2">
                        <p>Pregnancy tests check your pee or blood for a hormone called human chorionic gonadotropin (hCG). Your body makes this hormone after a fertilized egg attaches to the wall of your uterus.</p>

                        <p>This usually happens about 6 days after fertilization. Levels of hCG rise quickly, doubling every 2 to 3 days.</p>

                    </div>

                    <div className="fs-4 fw-medium">What types of pregnancy tests are available?</div>
                    <div className="fs-5 my-2">
                        <p>Two main types of pregnancy tests are blood tests and urine tests.</p>
                        <p className="fw-bold">Blood Tests</p>

                        <p>You get these at your doctor's office, but they’re not used as often as urine tests. These tests can detect pregnancy earlier than a home pregnancy test, about 6 to 8 days after ovulation. It takes longer to get the results than with a home pregnancy test.</p>
                        <p>The two types of blood pregnancy tests are:</p>
                        <p><span className="fw-bold">A qualitative hCG test</span> simply checks for hCG. It gives a "yes" or "no" answer to the question, "Are you pregnant?" Doctors often order these tests to confirm pregnancy as early as 10 days after conception. Some can detect hCG much earlier.</p>
                        <p><span className="fw-bold">A quantitative hCG test</span>(beta hCG) measures the exact amount of hCG in your blood. It can find even very low levels of hCG. These tests may help track problems during pregnancy. Your doctor may use them along with other tests to rule out an ectopic pregnancy, when the fertilized egg implants outside your uterus, or after a miscarriage, when hCG levels fall quickly.</p>

                        <p className="fw-bold">Urine Tests</p>
                        <p>You can take these at home or in a doctor's office.</p>
                        <p>Along with being private and convenient, home pregnancy tests are quick and easy to use. They’re also very accurate if you follow the directions. These pregnancy tests all work in a similar way.</p>

                    </div>
                    
                    <div className="fs-4 fw-medium">How accurate are pregnancy tests?</div>
                    <div className="fs-5 my-2">
                        <p>Urine home pregnancy tests are about 99% accurate. Blood tests are even more accurate.</p>

                        <p>A home test’s accuracy depends on:</p>
                        <ul>
                            <li>How closely you follow the instructions</li>
                            <li>When you ovulate and how soon the egg implants</li>
                            <li>How soon after pregnancy you take the test</li>
                            <li>The sensitivity of the pregnancy test</li>
                        </ul>

                    </div>

                    <div className="fs-4 fw-medium"></div>
                    <div className="fs-5 my-2">
                        <p>Some pregnancy tests can spot hCG before you miss a period. But the results will be more accurate if you wait until the first day of a missed period.</p>

                        <p>Results may also be more accurate if you do the test first thing in the morning, when your urine is more concentrated.</p>

                    </div>

                    <div id="earlyPregnancySymptoms" style={{ height: '55px' }}>

                    </div>
                    <h2 className="fw-semibold text-primary">Early Pregnancy Symptoms</h2>
                    <p  className="fs-5">Are you wondering if you might be pregnant? The only way to know for sure is by taking a pregnancy test.

But there are early symptoms of pregnancy that may point to the possibility. Here's what to look for.</p>
                    <div className="fs-4 fw-medium">Do All Women Get Early Symptoms of Pregnancy?</div>
                    <div className="fs-5 my-2">
                        <p>Every woman is different. So are their experiences of pregnancy. Not every woman has the same symptoms or even the same symptoms from one pregnancy to the next.</p>
                        <p>Also, because the early symptoms of pregnancy often mimic the symptoms you might experience right before and during menstruation, you may not realize you're pregnant.</p>
                        <p>What follows is a description of some of the most common early symptoms of pregnancy. You should know that these symptoms may be caused by other things besides being pregnant. So the fact that you notice some of these symptoms does not necessarily mean you are pregnant. The only way to tell for sure is with a pregnancy test.</p>

                    </div>

                    <div className="fs-4 fw-medium">Spotting and Cramping</div>
                    <div className="fs-5 my-2">
                        <p>After conception, the fertilized egg attaches itself to wall of the uterus. This can cause one of the earliest signs of pregnancy -- spotting and, sometimes, cramping.</p>
                        <p>That's called implantation bleeding. It occurs anywhere from six to 12 days after the egg is fertilized.</p>
                        <p>The cramps resemble menstrual cramps, so some women mistake them and the bleeding for the start of their period. The bleeding and cramps, however, are slight.</p>
                        <p>Besides bleeding, a woman may notice a white, milky discharge from their vagina. That's related to the thickening of the vagina's walls, which starts almost immediately after conception. The increased growth of cells lining the vagina causes the discharge.</p>
                        <p>This discharge, which can continue throughout pregnancy, is typically harmless and doesn't require treatment. But if there is a bad smell related to the discharge or a burning and itching sensation, tell your doctor so they can check on whether you have a yeast or bacterial infection or STD.</p>

                    </div>

                    <div className="fs-4 fw-medium">Breast Changes</div>
                    <div className="fs-5 my-2">
                        <p>Breast changes are another very early sign of pregnancy. A woman's hormone levels rapidly change after conception. Because of the changes, their breasts may become swollen, sore, or tingly a week or two later. Or they may feel heavier or fuller or feel tender to the touch. The area around the nipples, called the areola, may also darken.</p>
                        <p>Other things could cause breast changes. But if the changes are an early symptom of pregnancy, keep in mind that it is going to take several weeks to get used to the new levels of hormones. But when it does, breast pain should ease up.</p>

                    </div>

                    <div className="fs-4 fw-medium">Fatigue</div>
                    <div className="fs-5 my-2">
                        <p>Feeling very tired is normal in pregnancy, starting early on.</p>
                        <p>A woman can start feeling unusually fatigued as soon as one week after conceiving.</p>
                        <p>Why? It's often related to a high level of a hormone called progesterone, although other things -- such as lower levels of blood sugar, lower blood pressure, and a boost in blood production -- can all contribute.</p>
                        <p>If fatigue is related to pregnancy, it's important to get plenty of rest. Eating foods that are rich in protein and iron can help offset it.</p>

                    </div>

                    <div className="fs-4 fw-medium">Nausea (Morning Sickness)</div>
                    <div className="fs-5 my-2">
                        <p>Morning sickness is a famous symptom of pregnancy. But not every pregnant woman gets it.</p>
                        <p>The exact cause of morning sickness is not known but pregnancy hormones likely contribute to this symptom. Nausea during pregnancy may occur at any time of the day but most commonly in the morning.</p>
                        <p>Also, some women crave, or can't stand, certain foods when they become pregnant. That's also related to hormonal changes. The effect can be so strong that even the thought of what used to be a favorite food can turn a pregnant woman's stomach.</p>
                        <p>It's possible that the nausea, cravings, and food aversions can last for the entire pregnancy. Fortunately, the symptoms lessen for many women at about the 13th or 14th week of their pregnancy.</p>
                        <p>In the meantime, be sure to eat a healthy diet so that you and your developing baby get essential nutrients. You can talk to your doctor for advice on that.</p>

                    </div>

                    <div className="fs-4 fw-medium">Missed Period</div>
                    <div className="fs-5 my-2">
                        <p>The most obvious early symptom of pregnancy -- and the one that prompts most women to get a pregnancy test -- is a missed period. But not all missed or delayed periods are caused by pregnancy..</p>
                        <p>Also, women can experience some bleeding during pregnancy. If you are pregnant, ask your doctor what you should be aware of with bleeding. For example, when is bleeding normal and when is it a sign of an emergency?</p>
                        <p>There are reasons, besides pregnancy, for missing a period. it might be that you gained or lost too much weight. Hormonal problems, fatigue, or stress are other possibilities. Some women miss their period when they stop taking birth control pills. But if a period is late and pregnancy is a possibility, you may want to get a pregnancy test.</p>
                       

                    </div>

                </div>


            </div>

            <BackToTopBtn/>
        </div>
    )
}
