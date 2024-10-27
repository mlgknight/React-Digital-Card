
function Card() {


    return (
        <section className="card--holder">
            <div className="content-container">
                <div className="img-div"></div>
                <h3>Oussama Ajala</h3>
                <p>Frontend Developer</p>
                <a href="https://oussamaajala-portfolio.netlify.app/">Portfolio Link</a>
            </div>
            <div className="btn-container">
                <button className="email-btn"><img src="Email.png" alt="" /> Email </button>
                <button className="linkedin-btn"><img src="LinkedIn.png" alt="" /> LinkedIn</button>
            </div>

            <div className="about end-container">
                <h4>About</h4>
                <p>
                    Passionate web developer skilled in HTML, CSS, Javascript,
                    and React currently expanding my knowledge in
                    Node.js and databases.
                </p>

            </div>
            <div className="interests end-container">
                <h4>Interests</h4>
                <p>
                “Passionate about web development with a focus on React, JavaScript, and AWS.
                Currently exploring Node.js and databases.
                Lover of unique fashion and cutting-edge design.
                </p>

            </div>

            <footer>
                <img src="/icons/Facebook Icon.png" alt="" />
                <img src="/icons/GitHub Icon.png" alt="" />
                <img src="/icons/Instagram Icon.png" alt="" />
                <img src="/icons/Linkedin Icon.png" alt="" />
                <img src="/icons/Twitter Icon.png" alt="" />
                
                
                
            </footer>


        </section>
    )

}

export default Card