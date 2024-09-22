import React, { useEffect } from 'react';
import football from '../../../assets/HomePage/football.png';
import run from '../../../assets/HomePage/run.png';
import badminton from '../../../assets/HomePage/badminton.png';
import achieve from '../../../assets/HomePage/achievements.png';
import schoolband from '../../../assets/HomePage/schoolband.png';
import gym from '../../../assets/HomePage/gym.png';
import basketball from '../../../assets/HomePage/basketball.png';
import './carousel.css';
import loadScript  from './carousel.js';

function Carousel() {
    useEffect(() => {
        loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                console.log('Bootstrap JS loaded successfully');
            })
            .catch(err => {
                console.error('Failed to load Bootstrap JS:', err);
            });
    }, []);

    return (
        <>
            
            <div id="carouselExampleAutoplaying" className="carousel slide main" data-bs-ride="carousel" >
                <div className="carousel-inner">
                   
                    <div className="carousel-item active">
                        <div className="container d-flex flex-row">
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://en.reformsports.com/oxegrebi/2023/10/what-is-an-olymp-swimming-pool.jpg" alt="Swimming pools" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Swimming pools</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src={football} alt="Football ground" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Football ground</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src={run} alt="Running tracks" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Running tracks</div>
                                </div>
                            </div>
                        </div>
                        <div className="container d-flex flex-row">
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src={badminton} alt="Tennis court" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Tennis court</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src={gym} alt="Gym" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Gym</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src={basketball} alt="Basketball court" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Basketball court</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second carousel item */}
                    <div className="carousel-item">
                        <div className="container d-flex flex-row">
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://shivalikpublic.com/assets/img/smartclassroom.jpg" alt="Smart Classes" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Smart Classes</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://ciel.health/wp-content/uploads/2022/07/Resources-2.jpg" alt="Scientific Labs" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Scientific Labs</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://img.freepik.com/premium-photo/large-hall-with-many-chairs-conference-room-ai-generated_859483-528.jpg?w=740" alt="Seminar halls" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Seminar halls</div>
                                </div>
                            </div>
                        </div>
                        <div className="container d-flex flex-row">
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://www.clarkenersen.com/wp-content/uploads/2022/04/LPS-East_5.jpg" alt="Auditorium" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Auditorium</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://americanlibrariesmagazine.org/wp-content/uploads/2021/08/charlotte2.jpg" alt="Library" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Library</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://www.communityplaythings.com/-/media/images/cpus/resources/article-photos/2011-aesthetics-in-the-classroom/2-quilt-on-wall.ashx?rev=2200840317d7491b89046e7f6946573b&sc_lang=en&hash=A5CC1558C19E8290491F4CB68FA1E685" alt="Kindergartens" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Kindergartens</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third carousel item */}
                    <div className="carousel-item">
                        <div className="container d-flex flex-row">
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src={schoolband} alt="School band" className="img-fluid" />
                                    <div className="card-text text-center text-dark">School band</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src={achieve} alt="Achievements" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Achievements</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://www.hubstar.com/wp-content/uploads/2022/03/HubStar-Campus_Planning.jpeg" alt="Leadership" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Leadership</div>
                                </div>
                            </div>
                        </div>
                        <div className="container d-flex flex-row">
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://www.ibm.com/blog/wp-content/uploads/2021/03/ibm-stem-student-scaled-1200x630.jpg" alt="Robotic Labs" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Robotic Labs</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://cache.careers360.mobi/media/presets/860X430/article_images/2019/10/4/Delhi-CET-Exam.jpg" alt="Competitive Exams" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Competitive Exams</div>
                                </div>
                            </div>
                            <div className="card m-3 aca">
                                <div className="card-body">
                                    <img src="https://www.teluguone.com/teluguoneUserFiles/img/children-nature.JPG" alt="Camping trips" className="img-fluid" />
                                    <div className="card-text text-center text-dark">Camping trips</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
