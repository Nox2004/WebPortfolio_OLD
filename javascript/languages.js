const translations_id = {
    "EN-US" : 0,
    "PT-BR" : 1
}

const translations_text = [];

translations_text[translations_id["EN-US"]] = [
    {
        sec_id : "games",
        text : `
        <div class="games-content">
            <div class="sec-title">
                <h2>My <span>Games</span><span class="bg-text">My Games</span></h2>
            </div>
            <div class="sec-description">
                <h3>These are all the <span>Games</span> I have created or which I participated in the development. At Least the ones that are finished.</h3>
            </div>
            <div class="game-list">
                Preenchido pelo app.js
            </div>
        </div>`
    },
    {
        sec_id : "projects",
        text : `
        <div class="sec-title">
                <h2>My Other<span> Projects</span><span class="bg-text">My Other Projects</span></h2>
            </div>
            <div class="sec-description">
                <h3>Section Under <span>Construction</span>!!! Here I will put the projects I worked in that are not games.</h3>
        </div>`
    },
    {
        sec_id : "about",
        text : `
        <div class="sec-title">
            <h2><span>About</span> Me<span class="bg-text">About Me</span></h2>
        </div>
        <div class="sec-description">
            <h3>Hello! my name is <span>Gabriel</span>, but you can call me <span>Nox</span>! 
            <BR>
            I'm a 19 years old brazilian <span>dev</span>.</h3>
        </div>
        <div class = "about-container">
            <div class = "about-bio">
            <h3>
                I have always loved video games!
                <BR><BR>
                When I was 13, I read about making games easily using scratch in a kids magazine, this was my first contact with programming.<BR>
                After making some unplayable stuff with scratch, I downloaded GameMaker Studio and started making plataformers. <BR>
                In the following years I had developed a lot of unfinished stuff, aswell as some finished stuff (which you can check in this website :D).
                <BR><BR>
                Right now I'm studying game design in college and working as an intern Systems Analyst.
            </h3>
            </div>
            <div class="right-about">
                <br>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Location:</span>
                        </div>
                        <p>
                            Sao Paulo, Brazil
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-envelope"></i>
                            <span>Email:</span>
                        </div>
                        <p>
                            <span>biel.bianchi2004@hotmail.com</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-globe-africa"></i>
                            <span>Languages:</span>
                        </div>
                        <p>
                            <span>Portuguese, English, Spanish</span>
                        </p>
                    </div>
                </div>
                <div class="contact-icons">
                    <div class="contact-icon">
                        <a href="https://twitter.com/Gabriel_Nox_" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://github.com/Nox2004" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCt5FLI_KtaOa-ioyg4xZvcQ" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div class = "my-languages">
            <h2> These are the <span>languages</span> I have some profeciency with: </h2>

            <span class = "languages-list">
                <h3>
                    <img src = "images/gamemaker_logo.png" alt="">
                    GML
                </h3>
                <h3>
                    <img src = "images/c-logo.png" alt="">
                    C#
                </h3>
                <h3>
                    <i class="fa-brands fa-square-js"></i>
                    JavaScript
                </h3>
                <h3>
                    <i class="fa-brands fa-python"></i>
                    Python
                </h3>
                <h3>
                    <img src = "images/opengl-logo.png" alt="">
                    Open/Web GL
                </h3>
                <h3>
                    <i class="fa-brands fa-java"></i>
                    Java
                </h3>
                <h3>
                    <i class="fa-brands fa-css3-alt"></i>
                    CSS
                </h3>
            </span>
            <BR>
            <BR>
            <h2>And I am Experiencied with these <span>Engines</span>: </h2>

            <span class = "languages-list">
                <h3>
                    <img src = "images/gamemaker_logo.png" alt="">
                    Game Maker Studio 2
                </h3>
                <h3>
                    <img src = "images/c-logo.png" alt="">
                    Unity
                </h3>
            </span>
        </div>`
    },
    {
        sec_id : "contact",
        text : `
        <div class="sec-title">
            <h2><span>Contact Me</span><span class="bg-text">Contact Me</span></h2>
        </div>
        <div class="sec-description">
            <h3>Fill this <span>FORM</span> to contact me. (Actually, don't do this! this function is currently not working. just send me an email instead.)</h3>
        </div>

        
        <div class="contact-form">
            <form action="" class="contact-form">
                <div class="input-control i-c-2">
                    <input type="text" required placeholder="YOUR NAME">
                    <input type="email" required placeholder="YOUR EMAIL">
                </div>
                <div class="input-control">
                    <input type="text" required placeholder="ENTER SUBJECT">
                </div>
                <div class="input-control">
                    <textarea name="" id="" cols="15" rows="8" placeholder="MESSAGE HERE"></textarea>
                </div>
            </form>
            <div class="btn-con-submit">
                <a href="https://www.noxdev.net" class="submit-btn">
                    <span class="btn-icon"><i class="fa-solid fa-envelope"></i></i></span>
                    <span class="btn-text">Submit</span>
                </a>
            </div>
        </div>`
    }
]

translations_text[translations_id["PT-BR"]] = [
    {
        sec_id : "games",
        text : `
        <div class="games-content">
            <div class="sec-title">
                <h2>Meus <span>Jogos</span><span class="bg-text">Meus Jogos</span></h2>
            </div>
            <div class="sec-description">
                <h3>Esses são todos os <span>Jogos</span> que eu criei ou participei do desenvolvimento (os que eu terminei pelo menos).</h3>
            </div>
            <div class="game-list">
                Preenchido pelo app.js
            </div>
        </div>`
    },
    {
        sec_id : "projects",
        text : `
        <div class="sec-title">
                <h2>Meus outros<span> Projetos</span><span class="bg-text">Meus outros Projetos</span></h2>
            </div>
            <div class="sec-description">
                <h3>Essta sessão está em <span>Construção</span>!!! Aqui eu irei exibir os projetos que desenvolvi que não são jogos.</h3>
        </div>`
    },
    {
        sec_id : "about",
        text : `
        <div class="sec-title">
            <h2><span>Sobre </span>Mim<span class="bg-text">Sobre Mim</span></h2>
        </div>
        <div class="sec-description">
            <h3>Olá! meu nome é <span>Gabriel</span>, Mas podem me chamar de <span>Nox</span>! 
            <BR>
            Sou um <span>desenvolvedor de jogos</span> brasileiro com 19 anos.</h3>
        </div>
        <div class = "about-container">
            <div class = "about-bio">
            <h3>
                Eu sempre amei video games!
                <BR><BR>
                Quando eu tinha 13 anos, li em uma revista recreio sobre um aplicativo chamado Scratch, onde crianças poderiam criar jogos facilmente, esse foi meu primeiro contato com programação.<BR>
                Depois de fazer alguns projetos (a maioria injogável), eu baixei o GameMaker Studio e comecei a criar jogos de plataforma. <BR>
                Nos anos seguintes eu criei vários projetos que nunca terminei, e alguns projetos finalizador (que vocês podem checar nesse website :D)
                <BR><BR>
                Atualmente estou estudando game design na faculdade enquanto faço um estágio como analista de sistemas.
            </h3>
            </div>
            <div class="right-about">
                <br>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Localização:</span>
                        </div>
                        <p>
                            São Paulo, Brazil
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-envelope"></i>
                            <span>Email:</span>
                        </div>
                        <p>
                            <span>biel.bianchi2004@hotmail.com</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-globe-africa"></i>
                            <span>Linguas:</span>
                        </div>
                        <p>
                            <span>Português, Inglês, Espanhol</span>
                        </p>
                    </div>
                </div>
                <div class="contact-icons">
                    <div class="contact-icon">
                        <a href="https://twitter.com/Gabriel_Nox_" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://github.com/Nox2004" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCt5FLI_KtaOa-ioyg4xZvcQ" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div class = "my-languages">
            <h2> Essas são as <span>linguagens</span> com as quais eu tenho experiência: </h2>

            <span class = "languages-list">
                <h3>
                    <img src = "images/gamemaker_logo.png" alt="">
                    GML
                </h3>
                <h3>
                    <img src = "images/c-logo.png" alt="">
                    C#
                </h3>
                <h3>
                    <i class="fa-brands fa-square-js"></i>
                    JavaScript
                </h3>
                <h3>
                    <i class="fa-brands fa-python"></i>
                    Python
                </h3>
                <h3>
                    <img src = "images/opengl-logo.png" alt="">
                    Open/Web GL
                </h3>
                <h3>
                    <i class="fa-brands fa-java"></i>
                    Java
                </h3>
                <h3>
                    <i class="fa-brands fa-css3-alt"></i>
                    CSS
                </h3>
            </span>
            <BR>
            <BR>
            <h2>E eu sou experiênciado com as seguintes <span>Engines</span>: </h2>

            <span class = "languages-list">
                <h3>
                    <img src = "images/gamemaker_logo.png" alt="">
                    Game Maker Studio 2
                </h3>
                <h3>
                    <img src = "images/c-logo.png" alt="">
                    Unity
                </h3>
            </span>
        </div>`
    },
    {
        sec_id : "contact",
        text : `
        <div class="sec-title">
            <h2><span>Me Contate</span><span class="bg-text">Me Contate</span></h2>
        </div>
        <div class="sec-description">
            <h3>Preencha este <span>Formulário</span> para me contatar. (Na verdade, não faz isso não! Essa função não está funcionando no momento. Apenas me mande um email no lugar disso.)</h3>
        </div>

        
        <div class="contact-form">
            <form action="" class="contact-form">
                <div class="input-control i-c-2">
                    <input type="text" required placeholder="SEU NOME">
                    <input type="email" required placeholder="SEU EMAIL">
                </div>
                <div class="input-control">
                    <input type="text" required placeholder="ASSUNTO">
                </div>
                <div class="input-control">
                    <textarea name="" id="" cols="15" rows="8" placeholder="MENSAGEM"></textarea>
                </div>
            </form>
            <div class="btn-con-submit">
                <a href="https://www.noxdev.net" class="submit-btn">
                    <span class="btn-icon"><i class="fa-solid fa-envelope"></i></i></span>
                    <span class="btn-text">Submit</span>
                </a>
            </div>
        </div>`
    }
]

export {translations_id, translations_text};