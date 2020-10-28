import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';
import './App.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Image({filename}) {
    return (
        <picture>
            <source type="image/webp" srcset={`/img/IMG_${filename}.webp`} />
            <source type="image/jpeg" srcset={`/img/IMG_${filename}.jpg`} />
            <img src={`/img/IMG_${filename}.jpg`} alt="" />
        </picture>
    );
}

function ImagePerformers({filename}) {
  return (
      <picture>
          <source type="image/webp" srcset={`/img/performers/${filename}.webp`} />
          <source type="image/png" srcset={`/img/performers/${filename}.png`} />
          <img src={`/img/performers/${filename}.png`} alt="" />
      </picture>
  );
}

function ImagePeople({filename}) {
  return (
      <picture>
          <source type="image/webp" srcset={`/img/people/${filename}.webp`} />
          <source type="image/png" srcset={`/img/people/${filename}.jpg`} />
          <img src={`/img/people/${filename}.jpg`} alt="" />
      </picture>
  );
}

function App() {
    let [ message, setMessage ] = React.useState("The Voice of the Youth Committee");
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: `
              <video preload muted autoplay playsinline loop style="width: 100%; margin-top: -6%;">
                  <source src='/video.webm' type='video/webm' />
                  <source src='/video.mp4' type='video/mp4' />
                  <picture>
                      <source type="image/webp" srcset="/noplay.webp" />
                      <source type="image/png" srcset="/noplay.png" />
                      <img src="/noplay.png" alt="" />
                  </picture>
              </video>
            `}} />
            {/* <div className="video-callout" dangerouslySetInnerHTML={{__html: `
                <!-- <div class="video-bg">
                    <video preload muted autoplay playsinline loop>
                        <source src='/video.webm' type='video/webm' />
                        <source src='/video.mp4' type='video/mp4' />
                    </video>
                </div> -->
                <div class="video-overlay"></div>
                <!-- <header style="opacity: 0; height: 423px;">
                    <img src='/logo.png' alt='logo' style={{width: '10em'}} />
                    <h1>The 2020 <br />Xavier School<br />Voice of The Youth Concert</h1>
                    <br />
                    <a class="header-link" href="#contact">Contact Us</a>
                </header> -->
            ` }} /> */}
            <div className="catalyst">
              <div style={{backdropFilter: "blur(5px) contrast(0.8)"}}>
                <div className="about" style={{background: 'transparent'}}>
                    <Container fluid>
                        <h1 style={{fontSize: '4rem'}}>CATALYST</h1>
                        {/* <img src="/catalyst-logo.png" alt="CATALYST" style={{width: '35vw', height: 'auto'}} /> */}
                        <p>The word catalyst is defined as “a person or thing that precipitates an event.” With our advocacy of taking initiative and fighting apathy in mind, the word catalyst is a perfect fit for embodying what it truly means to take initiative: that by becoming ‘catalysts’ to inspire others to do the same, we in turn also fight apathy by instigating change within them.</p>
                        <h1>Expedite formations.</h1>
                        <p>Our advocacy this year, which is our belief in “taking initiative and fighting apathy,” may be interpreted as becoming men who are leaders and not followers— and, as leaders we must make strides before anyone else. By definition, to expedite means to accelerate or start a particular thing, while formations refers to the chemical change brought about by different factors. In this case, expediting formations is akin to accelerating a reaction in the formation of crystals, which is both in theme and in the same vein as our advocacy.</p>
                        <Row>
                            <Col lg={6}>
                                <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight autoplay autoplaySpeed={2000}>
                                  <div>
                                    <center>
                                      <ImagePerformers filename="1" />
                                      {/* <img src="/img/performers/1.png" alt="Fern" /> */}
                                      <h3 style={{color: 'white'}}>Fern</h3>
                                    </center>
                                  </div>
                                  <div>
                                    <center>
                                      <ImagePerformers filename="2" />
                                      {/* <img src="/img/performers/2.png" alt="FMD Extreme" /> */}
                                      <h3 style={{color: 'white', fontWeight: 'light'}}>FMD Extreme</h3>
                                    </center>
                                  </div>
                                  <div>
                                    <center>
                                      <ImagePerformers filename="3" />
                                      {/* <img src="/img/performers/3.png" alt="Lola Amour" /> */}
                                      <h3 style={{color: 'white', fontWeight: 'light'}}>Lola Amour</h3>
                                    </center>
                                  </div>
                                  <div>
                                    <center>
                                      <ImagePerformers filename="4" />
                                      {/* eslint-disable-next-line */}
                                      {/* <img src="/img/performers/4.png" alt="Motion Picture Blur" /> */}
                                      <h3 style={{color: 'white', fontWeight: 'light'}}>Motion Picture Blur</h3>
                                    </center>
                                  </div>
                                  <div>
                                    <center>
                                      <ImagePerformers filename="5" />
                                      {/* <img src="/img/performers/5.png" alt="The Great Dane" /> */}
                                      <h3 style={{color: 'white', fontWeight: 'light'}}>The Great Dane</h3>
                                    </center>
                                  </div>
                                  <div>
                                    <center>
                                      <ImagePerformers filename="6" />
                                      {/* <img src="/img/performers/6.png" alt="Up Dharma Down" /> */}
                                      <h3 style={{color: 'white', fontWeight: 'light'}}>UDD</h3>
                                    </center>
                                  </div>
                                  {/* <div>
                                    <center>
                                      <ImagePerformers filename="7" />
                                      <img src="/img/performers/7.png" alt="Velasco Brothers" />
                                      <h3 style={{color: 'white', fontWeight: 'light'}}>Velasco Brothers</h3>
                                    </center>
                                  </div> */}
                              </Slider>
                            </Col>
                            <Col lg={6}>
                                <picture>
                                    <source type="image/webp" srcset="/ticket.webp" />
                                    <source type="image/jpg" srcset="/ticket.jpg" />
                                    <img src="/ticket.jpg" alt="CATALYST" />
                                </picture>
                            </Col>
                        </Row>
                        <br  />
                        <a className="header-link" href="https://voyccommittee.typeform.com/to/zDsRst" target="_blank" rel="noopener noreferrer">PRE-ORDER MERCH</a>
                    </Container>
                </div>
                <div className="about" style={{backgroundColor: 'white'}}>
                  <Container fluid>
                    <h1 style={{color: 'black'}}>In collaboration with:</h1>
                    <div className="sponsors-flexbox">
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/1.webp" />
                        <source type="image/jpeg" srcset="/img/sponsors/1-copresenter/1.jpg" />
                        <img src="/img/sponsors/1-copresenter/1.jpg" alt="Daiesumi Digital Cafe" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/2.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/2.png" />
                        <img src="/img/sponsors/1-copresenter/2.png" alt="Hopkins Logistics" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/3.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/3.png" />
                        <img src="/img/sponsors/1-copresenter/3.png" alt="REWIND" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/4.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/4.png" />
                        <img src="/img/sponsors/1-copresenter/4.png" alt="Inquirer.net" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/5.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/5.png" />
                        <img src="/img/sponsors/1-copresenter/5.png" alt="InqPOP!" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/6.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/6.png" />
                        <img src="/img/sponsors/1-copresenter/6.png" alt="Dubstation" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/7.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/7.png" />
                        <img src="/img/sponsors/1-copresenter/7.png" alt="BYS" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/8.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/8.png" />
                        <img src="/img/sponsors/1-copresenter/8.png" alt="Monster RX 93.1" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/9.webp" />
                        <source type="image/png" srcset="/img/sponsors/1-copresenter/9.png" />
                        <img src="/img/sponsors/1-copresenter/9.png" alt="STR8" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/1-copresenter/10.webp" />
                        <source type="image/jpeg" srcset="/img/sponsors/1-copresenter/10.jpg" />
                        <img src="/img/sponsors/1-copresenter/10.jpg" alt="When In Manila" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/2-principal/converse.webp" />
                        <source type="image/jpeg" srcset="/img/sponsors/2-principal/converse.jpeg" />
                        <img src="/img/sponsors/2-principal/converse.jpeg" alt="Converse" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/6-foodofficial/1.webp" />
                        <source type="image/png" srcset="/img/sponsors/6-foodofficial/1.png" />
                        <img src="/img/sponsors/6-foodofficial/1.png" alt="Pepper Lunch" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/6-foodofficial/2.webp" />
                        <source type="image/png" srcset="/img/sponsors/6-foodofficial/2.png" />
                        <img src="/img/sponsors/6-foodofficial/2.png" alt="YanYan International (Phils.) Inc." />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/6-foodofficial/3.webp" />
                        <source type="image/png" srcset="/img/sponsors/6-foodofficial/3.png" />
                        <img src="/img/sponsors/6-foodofficial/2.png" alt="Shakeys Pizza Parlor" />
                      </picture>
                      <picture>
                        <source type="image/webp" srcset="/img/sponsors/6-foodofficial/4.webp" />
                        <source type="image/png" srcset="/img/sponsors/6-foodofficial/4.png" />
                        <img src="/img/sponsors/6-foodofficial/2.png" alt="Macao Imperial Tea" />
                      </picture>
                    </div>
                  </Container>
                </div>
              </div>
            </div>
            <div className="about">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <picture>
                                <source type="image/webp" srcset="/more_babes.webp" />
                                <source type="image/jpeg" srcset="/more_babes.jpg" />
                                <img src="/more_babes.jpg" alt="The Voice of the Youth Committee" />
                            </picture>
                        </Col>
                        <Col lg={6}>
                            <h1>ABOUT VOYC</h1>
                            <p>The Voice of the Youth Concert (VoYC) aims to promote its chosen advocacy through a celebration of music and entertainment. Hosted yearly, the Xavier School Variety Show receives an audience of over two thousand attendees. The concert showcases a wide array of talented performers,  including bands, dance troupes, celebrities, and much more. Alongside this, VoYC is also home to two flagship programs, the Fashion Show and Singing Ensemble, which never fail to capture attention whether it be through advertisements or during the actual show itself. All proceeds gained from the show go to organizations such as the Alay Kapwa Foundation and other beneficiaries related to the show’s advocacy.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight autoplay autoplaySpeed={2000}>
                                <div>
                                    <Image filename="5972" />
                                </div>
                                <div>
                                    <Image filename="1" />
                                </div>
                                <div>
                                    <Image filename="5975" />
                                </div>
                            </Slider>
                        </Col>
                        <Col lg={6}>
                            <h1>RULING THE RUNWAY</h1>
                            <p>One of the most anticipated segments of the annual Xavier School Variety Show, the Voice of the Youth Concert’s Fashion Show is truly a dazzling event. It aims to give student-models a chance to express themselves on the runway, through walking in their own personal choice of clothing. These people may serve as a beacon to others in the hopes that they too, may also be able to express themselves. Each year, the theme of the Fashion Show changes, with outfits and accessories adapting to fit the current style of the theme chosen. As such, the Fashion Show is constantly changing and bringing in new looks that have never been seen before. Holistically, the end goal of the Fashion Show is to promote self-confidence and freedom of expression, as well as to give aspiring models a chance to soar on the stage.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight autoplay autoplaySpeed={2000}>
                                <div>
                                    <Image filename="5976" />
                                </div>
                                <div>
                                    <Image filename="7" />
                                </div>
                            </Slider>
                        </Col>
                        <Col lg={6}>
                            <h1>LET OUR VOICES BE HEARD</h1>
                            <p>The Voice of the Youth Concert’s Singing Ensemble is a group of talented young performers that showcase their musical talent to the audience of the Xavier School Variety Show. Like the Fashion Show, the annual iteration of the Singing Ensemble comes with a new theme as well. As such, every note reached and lyric sung is not without reason, as the songs they sing are directly related to fit the advocacy that the committee has chosen for that year. Along with that, the Singing Ensemble also aims to empower students and allow them to showcase their talents on a wider stage.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about prev-shows">
                <Container fluid>
                    <h1>Previous Shows</h1>
                    <Row>
                        <Col lg={4}>
                            <h3>COALESCE (2017)</h3>
                            <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight autoplay autoplaySpeed={2000}>
                                <div>
                                    <Image filename="6024" />
                                </div>
                                <div>
                                    <Image filename="6023" />
                                </div>
                                <div>
                                    <Image filename="6027" />
                                </div>
                                <div>
                                    <Image filename="6035" />
                                </div>
                                <div>
                                    <Image filename="6036" />
                                </div>
                            </Slider>
                        </Col>
                        <Col lg={4}>
                            <h3>WILDFIRE (2018)</h3>
                            <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight autoplay autoplaySpeed={2000}>
                                <div>
                                    <Image filename="6004" />
                                </div>
                                <div>
                                    <Image filename="6007" />
                                </div>
                                <div>
                                    <Image filename="6010" />
                                </div>
                                <div>
                                    <Image filename="6016" />
                                </div>
                                <div>
                                    <Image filename="6019" />
                                </div>
                                <div>
                                    <Image filename="6020" />
                                </div>
                            </Slider>
                        </Col>
                        <Col lg={4}>
                            <h3>HORIZONS (2019)</h3>
                            <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight autoplay autoplaySpeed={2000}>
                                <div>
                                    <Image filename="5980" />
                                </div>
                                <div>
                                    <Image filename="5987" />
                                </div>
                                <div>
                                    <Image filename="5988" />
                                </div>
                                <div>
                                    <Image filename="5989" />
                                </div>
                                <div>
                                    <Image filename="5999" />
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about" id="contact">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <h1>Contact Us</h1>
                            <p>Partnerships have always been an important asset for the Voice of the Youth Concert, as it would not be made possible without people who help make it all happen. To be able to fulfill its advocacy and attract talented performers (such as El Gamma Penumbra,  IV of Spades, Ben&Ben, and many more), the Voice of the Youth Committee partners up with many other individuals to help fund, as well as fuel the show.<br /><br />Interested in promoting a good cause to a large audience? Contact <a href="mailto:cdtcoo20@xs.edu.ph">Charles Coo (cdtcoo20@xs.edu.ph)</a> with regards to Sponsorships and be part of the VoYC family!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about">
                <Container fluid>
                    <center>
                        <img src='/logo.png' alt='logo' style={{width: '10em'}} />
                        <br />
                        <br />
                        <a class="header-link" href="https://fb.com/xsvoyc">Facebook Page</a> | <a class="header-link" href="https://www.youtube.com/channel/UC6Z_iFZRkVFEievL-yD6fbg">YouTube Channel</a>
                        <br />
                        <br />
                        <br />
                        {message}
                    </center>
                </Container>
            </div>
            {/* <div className="babes">
                <div className="moreBabes">
                    <img src="/img/people/derreck.jpg" alt="" onMouseOver={() => setMessage("Derreck Garcia - Fashion Show Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/CHARLES.jpg" alt="" onMouseOver={() => setMessage("Charles Coo - Finance Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/jco.jpg" alt="" onMouseOver={() => setMessage("Joshua Co - Visuals Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/JELLO.jpg" alt="" onMouseOver={() => setMessage("Josh Gonzales - Logistics Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/jean.jpg" alt="" onMouseOver={() => setMessage("Jean Sarino - Student Council Executive Board Representative")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/diaz.jpg" alt="" onMouseOver={() => setMessage("Luis Diaz - Overall Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/miguel.jpg" alt="" onMouseOver={() => setMessage("Miguel Glinoga - Administrative Officer")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/ELIAS.jpg" alt="" onMouseOver={() => setMessage("Elias Juan - Logistics Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/JYU.jpg" alt="" onMouseOver={() => setMessage("Joshua Yu - Marketing Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/ang.jpg" alt="" onMouseOver={() => setMessage("Zachary Ang - Programs Tech Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                    <img src="/img/people/armando.jpg" alt="" onMouseOver={() => setMessage("Armando Khong Hun - Ensemble Head")} onMouseOut={() => setMessage("The Voice of the Youth Committee")} />
                </div>
            </div> */}
        </div>
    );
}

export default App;
