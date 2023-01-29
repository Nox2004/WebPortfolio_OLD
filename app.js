const sections = document.querySelectorAll('.section');
const section_buttons  = document.querySelectorAll('.controlls');
const section_button = document.querySelectorAll('.control');
const all_sections = document.querySelector('.main-content');
const languages = document.querySelectorAll('.language-item');



import {content as games} from './javascript/games.js';
import {translations_id, translations_text} from './javascript/languages.js';

let language_id = translations_id['EN-US'];

function page_transitions()
{
    for (let i = 0; i < section_button.length; i++)
    {
        section_button[i].addEventListener('click', function () 
        {
            let c_button = document.querySelectorAll('.active-btn');
            c_button[0].className = c_button[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    all_sections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id)
        {
            sections.forEach ((sec) =>
            {
                if (sec.classList.contains('active'))
                {
                    sec.classList.remove('active');
                    sec.classList.add('unactive');
                }
            })
            const element = document.getElementById(id)
            element.classList.add('active')
            element.classList.remove('unactive');
        }
    })
}

function change_language()
{
    for (let i = 0; i < languages.length; i++)
    {
        languages[i].addEventListener('click', function () 
        {
            let c_button = document.querySelector('.current-language');
            c_button.className = c_button.className.replace('current-language','');
            this.className += ' current-language';

            language_id = translations_id[this.innerHTML];
            
            const sec_list = translations_text[language_id];

            sec_list.forEach((sec) => {
                let element = document.getElementById(sec.sec_id);
                element.innerHTML = sec.text;
            })

            append_games();
        })
    }
}

function theme_button()
{
    const btn = document.querySelector('.theme-btn');
    btn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
        
        //console.log();

        if (element.classList.contains('light-mode') == true) btn.innerHTML = '<i class="fa-sharp fa-solid fa-moon"></i>';
        else btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    })
}

function append_games()
{
    let div_string = "";
    
    let games_lang = games[language_id];

    for (var i = 0; i < games_lang.length; i++)
    {
        let game = games_lang[i];
        div_string += `
        <div class="game">
            <img src="images/`+game.image_name+`" alt="">
            <div class="game-details">
                

                <div class="desc">
                    <h4>
                        `+game.name+`
                    </h4>
                    <p>
                        `+game.description+`
                    </p>
                </div>

                <div class="date">
                    <h4>
                        `+game.date+` - <span> `+game.team+` </span>
                    </h4>
                </div>

                <div class="btn-con">
                    <a href="`+game.link+`" class="download-btn">
                        <span class="btn-text">Download</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>`
    }

    let game_list = document.querySelector('.game-list');
    game_list.innerHTML = div_string;
}

page_transitions();

append_games();

theme_button();

change_language();

//let main_element = document.querySelector('main');
//main_element.innerHTML = "AAAAAAAAAAA";
/*
Hello! my name is Gabriel, but you can call me Nox. I'm a 17 years old brazilian dev.

I have always loved video games! When I was 13, I read about making games easily using scratch in a kids magazine, this was my first contact with programming.
After making some unplayable games with scratch, I downloaded GameMaker Studio and started to make some plataformers. 
In the following years I had developed a lot of unfinished stuff, aswell as some finished stuff (which you can see in this website :D).

Right now I'm studying game design in college and working as an intern Systems Analyst.

I have some profeciency in this languages:

- GML
- JavaScript
- C#
- Python 3.0
- Java
- CSS

And I am experencied with this game engines:

- Game Maker
- Unity
- Godot (mentira ainda nao kkkkkk)

*/