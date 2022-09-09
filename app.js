const sections = document.querySelectorAll('.section');
const section_buttons  = document.querySelectorAll('.controlls');
const section_button = document.querySelectorAll('.control');
const all_sections = document.querySelector('.main-content');

const game_list = document.querySelectorAll('.game-list');

import {content as games} from './javascript/games.js';

//import {get_content as get_games} from 'javascript/games.js';

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
            /*
            section_buttons.forEach ((btn) =>
            {
                btn.classList.remove('active');
            })
            e.target.classList.add('active')
            */
            
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

function theme_button()
{
    const btn = document.querySelector('.theme-btn');
    btn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

// const game_list = document.querySelectorAll('.game-list');
// game_list[0].appendChild()

function append_games()
{
    let div_string = ""
    
    console.log(games);

    for (var i = 0; i < games.length; i++)
    {
        div_string += `
        <div class="game">
            <img src="images/`+games[i].image_name+`" alt="">
            <div class="game-details">
                

                <div class="desc">
                    <h4>
                        `+games[i].name+`
                    </h4>
                    <p>
                        `+games[i].description+`
                    </p>
                </div>

                <div class="date">
                    <h4>
                        `+games[i].date+` - <span> `+games[i].team+` </span>
                    </h4>
                </div>

                <div class="btn-con">
                    <a href="`+games[i].link+`" class="download-btn">
                        <span class="btn-text">Download</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>`
    }

    game_list[0].innerHTML = div_string;
}


console.log('AAAAA');
page_transitions();

append_games();

theme_button();
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